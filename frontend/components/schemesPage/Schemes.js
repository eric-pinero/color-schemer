import React, { useState, useContext, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom'; 
import { CurrentUserContext} from '../../contexts/CurrentUserContext';
import { UserSchemesContext } from '../../contexts/UserSchemesContext'
import SchemeIndexItem from './SchemeIndexItem';
import { fetchUserSchemes } from '../../util/schemeAPIUtil'
import correctUserCheck from '../../functions/correctUserCheck'

const Schemes = ({match}) => {
    const [currentUser] = useContext(CurrentUserContext)
    const [userSchemes, setUserSchemes] = useContext(UserSchemesContext)
    const schemeOwnerId = match.params.userId;

    useEffect(() => {
        correctUserCheck(currentUser, schemeOwnerId)

    },[])

    function retrieveSchemes(){
        if(currentUser) {
            // setUserSchemes(currentUser.schemes)
            fetchUserSchemes(currentUser.id).then((response)=> {
                setUserSchemes(response);
            })    
        }
    }

    useEffect(() => {
        retrieveSchemes();
    }, [currentUser])

    const makeSchemeList = (schemeObj) => {
        const schemeListItems = []
        for(const schemeId in schemeObj){
            const scheme = schemeObj[schemeId]
            schemeListItems.push( <li key={schemeId}><SchemeIndexItem match={match} scheme={scheme}/></li>)
        }
        return schemeListItems
    }

    // const schemeList = for (const scheme in userSchemes){scheme =>{
    //     return(
    //         <li key={scheme.id}><SchemeIndexItem match={match} title={scheme.title}/></li>
    //     )
    // }};

    return(
        <div className='flex column txt-left margin-default w-80percent 
         bg-lightyellow align-center padding-10 line-h-1pt5 min-h-80vh h-fit'>
            <h2>Your Schemes</h2>
            <ul>
                {makeSchemeList(userSchemes)}
            </ul>
        </div>
    )
}

export default Schemes;