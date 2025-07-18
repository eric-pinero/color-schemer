import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { UserSchemesContext } from '../../contexts/UserSchemesContext'
import { fetchUserSchemes } from '../../util/schemeAPIUtil';
import correctUserCheck from '../../functions/correctUserCheck';
import SchemeIndexItem from './SchemeIndexItem';
import DeleteSchemeButton from './DeleteSchemeButton';

const Schemes = ({ match }) => {
    const [currentUser] = useContext(CurrentUserContext)
    const [userSchemes, setUserSchemes] = useContext(UserSchemesContext)
    const schemeOwnerId = match.params.userId;

    if (!currentUser) return <Navigate to="/" replace />

    useEffect(() => {
        correctUserCheck(currentUser, schemeOwnerId)

    }, [])

    function retrieveSchemes() {
        if (currentUser) {
            fetchUserSchemes(currentUser.id).then((response) => {
                setUserSchemes(response);
            })
        }
    }

    useEffect(() => {
    }, [userSchemes])


    useEffect(() => {
        retrieveSchemes();
    }, [currentUser])

    function makeSchemeList(schemes) {
        const schemeListItems = []
        for (const schemeId in schemes) {
            schemeListItems.push(
                <li className="flex space-around" key={schemeId}>
                    <SchemeIndexItem match={match} scheme={schemes[schemeId]} />
                    <DeleteSchemeButton schemeId={schemeId} />
                </li>
            )
        }
        return schemeListItems
    }


    return (
        <div className='flex column txt-left margin-default w-80percent 
         bg-lightyellow align-center padding-10 line-h-1pt5 min-h-80vh h-fit'>
            <h2 className='red bold f-30 txt-center border-b-s-1 border-red w-80percent'>
                Your Schemes
            </h2>
            <ul className='padding-t-10 w-25percent'>
                {makeSchemeList(userSchemes)}
            </ul>
        </div>
    )
}

export default Schemes;