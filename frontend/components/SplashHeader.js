import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom'
import paints from '../paints.json';
import { logout } from '../util/sessionAPIUtil'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

const SplashHeader = ({ setSessionModal }) => {
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
    let colorsObj = {};
  
    paints.forEach(paint => {
      colorsObj[paint._id] = paint
    });
    
    let randomId = () => (
      Math.floor(Math.random() * paints.length + 1)
    );
      
    let [randomColor, setRandomColor] = useState(colorsObj[1]);

    let colorString = `rgba(${randomColor.rgba.join(',')})`;
    let colorName = randomColor.name

    let resetRandomColor = () =>{
      const newId = randomId();
      setRandomColor(colorsObj[newId]);
      colorString = `rgba(${randomColor.rgba.join(',')})`;
    }

    const loginLink = currentUser ?
        null 
        :
        <p className='link pointer bold padding-l-10 border-r-s-1 border-white padding-r-10' 
            onClick={()=> setSessionModal('login') }>Login
        </p>
    ;

    const signupLink = currentUser ? 
        null
        :
        <p className='link pointer bold padding-l-10' 
            onClick={()=> setSessionModal('signup') }>Signup
        </p>
    ;

    const schemesLink = currentUser ?
        <Link to={`${currentUser.id}/schemes`}>
            <p className='link pointer bold padding-l-10 border-r-s-1 white border-white padding-r-10'>
                Schemes
            </p>
        </Link>
        :
        null
    ;   

    const logoutLink = currentUser ?
        <Link to='/' className='white link pointer bold padding-l-10' 
            onClick={() => handleLogout()}>Logout
        </Link>
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
        <header className='flex column bg-red shadow margin-b-10 padding-b-10'>
            <div className='flex justify-center align-center'>
                <h1 
                    className='f-50 padding-20 w-fit-content white' 
                >
                    Welcome to&nbsp;
                    <span className='bold txt-stroke-white' style={{ color : colorString }}>
                        Color Schemer!
                    </span>
                </h1>
                <button className='w-150 padding-10 bg-white pointer border-rad-5' onClick={resetRandomColor}>
                    {colorName}
                </button>
            </div>
            <div className='white flex justify-center margin-bottom-10 default-margin f-20'>
                <Link to='/about'>
                    <p className='link pointer bold border-r-s-1 border-white padding-r-10' >
                        About
                    </p>
                </Link>
                <Link className='link pointer bold padding-l-10 border-r-s-1 border-white padding-r-10' 
                    to='/scheme_selector'>Scheme Selector
                </Link>
                {schemesLink}
                {logoutLink}
                {loginLink}
                {signupLink}
            </div>

        </header>
      );
    
}

export default SplashHeader;