import React, {useState} from 'react';
import {login} from '../../util/sessionAPIUtil';

const LoginForm = ({setSessionModal}) => {
    let [emailAddress, setEmailAddress] = useState( "" );
    let [password, setPassword] = useState( "" );
    let [errors, setErrors] = useState([])

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
        setErrors(currentErrors);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        errorCheck();
        if (errors.length === 0){
            const user = {
                email: emailAddress,
                password: password
            }
            login(user).then((success,failure) =>{

                if (success){
                    setEmailAddress("");
                    setPassword("");
                    setSessionModal(null);
                }
                else {
                    console.log(failure);
                };
            });
        };
    };

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
            <header className="bg-red shadow padding-20 bold white border-rad-5">Login</header>
            <form className="flex column padding-20 align-center" onSubmit={handleSubmit}>
                {errorList}
                <label for="email" className="margin-b-5">Email Address</label>
                <input id="email" className="w-80percent margin-b-20" 
                    type="email" 
                    value={emailAddress} 
                    onChange={handleChange(setEmailAddress)}
                />

                <label for="password" className="margin-b-5">Password</label>
                <input id="password" className="w-80percent margin-b-20" 
                    type="password" 
                    value={password} 
                    onChange={handleChange(setPassword)}
                />

                <button 
                    type="submit" 
                    className="bg-red border-rad-5 white align-self-center padding-5 w-25percent"
                    onClick={errorCheck}>
                    Submit
                </button>
            </form>
        </div>
    )
}
export default LoginForm;