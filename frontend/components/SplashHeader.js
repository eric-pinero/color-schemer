import React, {useState} from "react";
import paints from "../paints.json";
import ColorList from "./ColorList";
import About from "./About";
import Schemes from "./schemesPage/Schemes"
import {logout} from "../util/sessionAPIUtil"

const SplashHeader = ({setActiveTab, currentUser, setCurrentUser, setSessionModal}) => {
    let colorsObj = {}
  
    paints.forEach(paint => {
      colorsObj[paint._id] = paint
    });
    
    let randomId = () => (
      Math.floor(Math.random() * paints.length + 1)
    );
      
    let [randomColor, setRandomColor] = useState(colorsObj[1]);

    let colorString = `rgba(${randomColor.rgba.join(",")})`;
    let colorName = randomColor.name

    let resetRandomColor = () =>{
      const newId = randomId();
      setRandomColor(colorsObj[newId]);
      colorString = `rgba(${randomColor.rgba.join(",")})`;
    }

    const loginLink = currentUser ?
        null 
        :
        <p className="link pointer bold padding-l-10 border-r-s-1 border-white padding-r-10" 
            onClick={()=> setSessionModal("login") }>Login
        </p>
    ;

    const signupLink = currentUser ? 
        null
        :
        <p className="link pointer bold padding-l-10" 
            onClick={()=> setSessionModal("signup") }>Signup
        </p>
    ;

    const schemesLink = currentUser ?
        <p className="link pointer bold padding-l-10 border-r-s-1 border-white padding-r-10"  
            onClick={() => setActiveTab(<Schemes schemes={currentUser.schemes}/>)}>Schemes
        </p>
        :
        null
    ;   

    const logoutLink = currentUser ?
        <p className="link pointer bold padding-l-10" 
            onClick={() => handleLogout()}>Logout
        </p>
        :
        null
    ;

    const handleLogout = () =>{
        logout(currentUser).then((loggedOut,failure) =>{
            if (loggedOut){
                setCurrentUser(null)
            }
            else {
                console.log(failure);
            };
        });
    };
        
    return (
        <header className="flex column bg-red shadow margin-b-10 padding-b-10">
            <div className="flex justify-center align-center">
                <h1 
                    className="f-50 padding-20 w-fit-content white" 
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
                <p className="link pointer bold border-r-s-1 border-white padding-r-10" 
                    onClick={()=> setActiveTab(<About/>) }>About
                </p>
                <p className="link pointer bold padding-l-10 border-r-s-1 border-white padding-r-10" 
                    onClick={()=> setActiveTab(<ColorList/>) }>Scheme Selector
                </p>
                {schemesLink}
                {logoutLink}
                {loginLink}
                {signupLink}
            </div>

        </header>
      );
    
}

export default SplashHeader;