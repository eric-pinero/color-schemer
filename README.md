# Color Schemer

### Architecture and Technologies
Color Schemer was built using:
* JavaScript 9
* AWS S3
* React 16.8.6
* Redux 4.0.1
* Ruby on Rails 5.2.3
* PostgreSQL 2.2.2
* webpack 4.32.2
* react-select 3.1.0

### Background and Overview
Color Schemer is a single page app for helping the user determine possible color schemes for a miniature, based on [The Army Painter](https://www.thearmypainter.com/) line of paints

[Live Site](https://color-schemer.herokuapp.com/#/)

![](./app/assets/images/learn.gif)

### Complementary Color Calculation
The formula for determining the exact complement for an rgb color is fairly straightforward: 255 - each color value.

```JavaScript
function complementCalculator(color){
    let complement = [0, 0, 0]

    for (let i = 0; i < color.length; i++) {
        const element = color[i];
        complement[i] = 255 - element
    }
    return complement
}
```

However, this exact "True Complement" is extremely unlikely to exist in a given paint line. So another algorithm was necessary, to identify the paint closest to the True Complement. The closest complement is determined by iterating over the list of paints and identifying the paint with the least combined difference from the red, green, and blue values of the True Complement.

```JavaScript
function complementLocator(color, colorList){
    const trueComplement = complementCalculator(color.rgba.slice(0, 3))
    let closestComplement
    let leastDelta = 765

    for (let i = 0; i < colorList.length; i++){
        const paint = colorList[i]
        const rgb = paint.rgba.slice(0, 3)
        let delta = 0

        for (let i = 0; i < rgb.length; i++) {
            const element = rgb[i];
            delta += Math.abs(trueComplement[i] - element)
        }
        if (delta < leastDelta){
            leastDelta = delta
            closestComplement = paint
        }
    }
    return closestComplement
}
```


### Color Selection Dropdown
A React-Select dropdown menu was populated with The Army Painter acryllic paints line. The names and rgba values were scraped and converted to JSON using a custom webcrawler. By customizing the React-Select attributes, a sample of each color is displayed alongside each option.

```JavaScript
    const list = sortedPaints.map(
        paint => {
            const name = paint.name
            const rgbaString = `rgba(${paint.rgba.join(",")})`

            const dot = <div style= {{
                background: rgbaString,
                border: "1px solid black",
                height: "15px",
                width: "15px",
                borderRadius: "15px",
                marginLeft: "10px"
                }}
            />
            return({
                "label": 
                    <div className="flex">
                        <span>{name}</span>
                        {dot}
                    </div>,
                "value": {...paint, complement: complementCalculator(paint, paints) },
                "key":{name}
            })
        }
    )
```



This ensures a re-render of the field as every change to the the field and component state occurs. Every field's value is equal to the corresponding key-value pair in component state. Navigating to the next section of the form triggers an update action to be fired to the back end, saving the updated information to the project. This is what allows a user to complete the form in any order. A user can partially complete each section and still navigate to subsequent or previous sections.

Users can upload an image for their project. These uploads are handled through the AWS S3 connection. Storing images in S3 reduces load time for the app.

Every part of a project's edit form is protected by auth routes, ensuring that only the creator can view or edit the incomplete form. If a user attempts to manually enter the url for a project's edit page that they do not own, they will be redirected to the home page.

### Rewards:
Every project can have many rewards, which are added as part of project creation, which have a value that must be pledged to receive them. Every user can have many rewards, based on the the pledges they've made to projects. The relationship between a user, a pledge, and a project is tracked in the joins table "pledges", which ties the user id, project id, reward id, and the pledged amount. The sum of pledges in this table determine how much backing a project has received. The association with the users tracks how many rewards will be given and to who.

### Dropdown:
Once a user has logged in, they can use the dropdown menu to view their five most recent projects. The dropdown menu's display is tied to the component state "display". The button in the top right corner has an onClick listener that fires the toggleDropdown function, which sets the toggles the display value between true and false. The dropdown variable is defined by a ternary, tied to the display value. 

```javascript
class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            display: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    toggleDropdown(){
        this.setState({display: !(this.state.display)})
    }

    render() {
        const projectCount = this.props.projects.length;
        const recentProjects = this.props.projects.slice(projectCount - 5, projectCount);
        
        const dropdown = this.state.display ? dropdownmenu : null;
    }
}
```

Selecting a project through the dropdown will bring the user to that project's edit page. The dropdown menu also contains the logout button which destroy's the current user's session.