import React, { useContext } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const SessionModal = ({sessionModal, setSessionModal} ) => {
    
    const displayedForm = sessionModal === 'signup' ? 
        <SignupForm setSessionModal={setSessionModal} setCurrentUser={setCurrentUser}/> 
        : 
        <LoginForm setSessionModal={setSessionModal} setCurrentUser={setCurrentUser}/>
    ;

    return(
        <div className= "absolute flex column top-25percent left-40percent bg-yellow z-2 w-25percent h-fit border-rad-5">
            {displayedForm}
        </div>
    )
}
export default SessionModal;