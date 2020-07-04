import React, {useState} from 'react';
import paints from "../paints.json"
import ColorList from "./ColorList"
import About from "./About"

const SplashHeader = ({setActiveTab}) => {
    let colorsObj = {}
  
    paints.forEach(paint => {
      colorsObj[paint._id] = paint
    });
    
    let randomId = () => (
      Math.floor(Math.random() * paints.length + 1)
      )
      
    let [randomColor, setRandomColor] = useState(colorsObj[1]);
    let colorString = `rgba(${randomColor.rgba.join(",")})`;
    let colorName = randomColor.name

    let resetRandomColor = () =>{
      const newId = randomId();
      setRandomColor(colorsObj[newId]);
      colorString = `rgba(${randomColor.rgba.join(",")})`;
    }
    return (
        <header className="flex column bg-red shadow margin-b-10 padding-b-10">
            <div className="flex justify-center align-center">
                <h1 
                    className="f-50 padding-20 bg-lightgrey w-fit-content white" 
                >
                    Welcome to&nbsp;
                    <span className="bold txt-stroke-white" style={{ color : colorString }}>
                        Color Schemer!
                    </span>
                </h1>
                <button className="w-150 padding-10 bg-white pointer border-rad-5" onClick={resetRandomColor}>
                    {colorName}
                </button>
            </div>
            <div className="flex justify-center white margin-bottom-10 default-margin f-20">
                <p className="link pointer bold border-r-s-1 border-white padding-r-10" onClick={()=> setActiveTab(<About/>) }>About</p>
                <p className="link pointer bold padding-l-10" onClick={()=> setActiveTab(<ColorList/>) }>Scheme Selector</p>
            </div>

        </header>
      );
    
}

export default SplashHeader;