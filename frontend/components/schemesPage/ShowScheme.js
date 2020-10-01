import React, { useContext, useEffect } from 'react';
import { UserSchemesContext} from '../../contexts/UserSchemesContext';
import { CurrentUserContext} from '../../contexts/CurrentUserContext';
import correctUserCheck from '../../functions/correctUserCheck';
import SchemeSwatch from '../SchemeSwatch';
import ColorSchemeView from '../ColorSchemeView'
import { Redirect } from 'react-router-dom';

const ShowScheme = ({match}) =>{
    const [currentUser] = useContext(CurrentUserContext)
    const [userSchemes] = useContext(UserSchemesContext);
    const schemeOwnerId = match.params.userId
    const schemeId = match.params.schemeId

    useEffect(() => {
        correctUserCheck(currentUser, schemeOwnerId)
    },[])
    
    const scheme = userSchemes[schemeId]
    if(!scheme) return <Redirect to={`/`}/>
    return (
        <div className='flex column txt-left margin-default w-80percent 
         bg-lightyellow align-center padding-10 line-h-1pt5 min-h-80vh h-fit'>
            <ColorSchemeView title= {scheme.title} swatches={scheme.scheme_swatches} schemeId={schemeId}/>
        </div>
    )
}

export default ShowScheme;