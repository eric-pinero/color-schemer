import React from 'react'

const About = () =>{
    return(
       <div className="flex column txt-left margin-default w-80percent bg-lightyellow align-center padding-10 line-h-1pt5">
           <h3 className="red bold f-30 txt-center border-b-s-1 border-red w-80percent"> About Color Schemer</h3>
           <div>
                <p className="padding-5">Short Version:<br/> 
                I created Color Schemer because I had a problem and I wanted build something to solve it.</p>
                <p className="padding-5">
                    Long Version:<br/> 
                    I like painting miniatures and I wanted to start coming up with my own color schemes. 
                    However, I didn't know what colors looked good together. I started doing some reading 
                    on the subject and found the Color Wheel:
                </p>
           </div>
           <img 
                className="box-200 padding-20" 
                src="https://pghknitandcrochet.com/2016/wp-content/uploads/2016/08/Color-Wheel-Basics-Full-RGB-color-wheel-600x600.jpg"
                alt="A color wheel"
            />
           <p className="padding-5">
                I learned that colors opposite each other on the color wheel are complementary (see: look good together).
                I reasoned that if they have a geometric relationship they must also have a mathematical relationship.
                Sure enough, after some digging I found a formula for identifying a color's complement. Armed with this knowledge
                I set out to create an app that would help me figure out my color schemes 
                for my <a href="https://www.thearmypainter.com/">favorite line of paints</a>.
           </p>
           <p className="padding-5">
                First, I created a webcrawler in Python to scrape the rgb color values and names of each color in The Army Painter line.
                Then I ran each color through the formula to identify it's mathematical complement. Easy right?
                Unfortunately, reality doesn't always align neatly with our demands and paints aren't mixed based on being perfect
                complements of one another. So I had to write an algorithm to find the paint in the line closest to the "true" complement
                for each paint.
           </p>
           <p className="padding-5">
               Have I, in my infinite wisdom, "solved" color theory?
           </p>
           <img 
                className="box-200 padding-20" 
                src="https://www.sessions.edu/wp-content/uploads/kisspng-color-wheel.png"
                alt="color wheel with all possible color combinations"
            />
           <p className="padding-5">
               ...not quite. But hopefully I've made it a little less intimidating for people to experiment with colors.
           </p>
       </div> 
    );
};
export default About;