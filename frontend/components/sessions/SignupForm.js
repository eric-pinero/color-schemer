import React, {useState} from 'react';
import {signup} from '../../util/sessionAPIUtil';

const SignupForm = ({setSessionModal, setCurrentUser}) => {
    let [emailAddress, setEmailAddress] = useState( "" );
    let [secondEmail, setSecondEmail] = useState( "" );
    let [password, setPassword] = useState( "" );
    let [secondPassword, setSecondPassword] = useState( "" );
    let [errors, setErrors] = useState(null)

    const handleChange = (stateChangeFunction) =>{
        return (e) => {
            stateChangeFunction(e.target.value);
        };
    }

    const errorCheck = () =>{
        let currentErrors = [];
        
        if(emailAddress.length === 0){
            currentErrors.push("Please enter an email address")
        }
        if (password.length < 6){
            currentErrors.push("Please enter a password of at least six characters")
        }
        if(emailAddress != secondEmail){
            currentErrors.push("Passwords must match")
        };
        if(password != secondPassword){
            currentErrors.push("Emails must match")
        };
        setErrors(currentErrors);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (errors.length === 0){
            const user = {
                email: emailAddress,
                password: password
            }
            signup(user).then((currentUser) =>{

                if (currentUser){
                    setCurrentUser(currentUser)
                    setEmailAddress("")
                    setSecondEmail("")
                    setPassword("")
                    setSecondPassword("")
                    setSessionModal(null)
                }
            })
        } else{
        }
    }

    const errorMap = errors ? errors.map(error =>(
        <li className="padding-b-10">{error}</li> 
        ))
        : 
        null
    ;

    const errorList = errorMap ?
        <ul className="flex column align-start red txt-left style-disc">
            {errorMap}
        </ul>
        :
        null
    ;

    return(
        <div>
            <header className="bg-red shadow padding-20 bold white border-rad-5">Sign Up Today!</header>
            <form className="flex column padding-20 align-center" onSubmit={handleSubmit}>
                {errorList}
                <label htmlFor="email" className="margin-b-5">Email Address</label>
                <input id="email" className="w-80percent margin-b-20" 
                    type="email" 
                    value={emailAddress} 
                    onChange={handleChange(setEmailAddress)}
                />

                <label htmlFor="reenterEmail" className="margin-b-5">Re-enter Email Address</label>
                <input id="reenterEmail" className="w-80percent margin-b-20" 
                    type="email" 
                    value={secondEmail} 
                    onChange={handleChange(setSecondEmail)}
                />
                
                <label htmlFor="password" className="margin-b-5">Password</label>
                <input id="password" className="w-80percent margin-b-20" 
                    type="password" 
                    value={password} 
                    onChange={handleChange(setPassword)}
                />

                <label htmlFor="reenterPassword" className="margin-b-5">Re-enter Password</label>
                <input id="reenterPassword" className="w-80percent margin-b-20" 
                    type="password" 
                    value={secondPassword} 
                    onChange={handleChange(setSecondPassword)}
                />
                <button type="submit" className="bg-red border-rad-5 white align-self-center padding-5 w-25percent"
                    onClick={errorCheck}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
export default SignupForm;