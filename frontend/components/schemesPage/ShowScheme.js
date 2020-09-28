import React, { useContext, useEffect } from 'react';
import { UserSchemesContext} from '../../contexts/UserSchemesContext';
import { CurrentUserContext} from '../../contexts/CurrentUserContext';
import correctUserCheck from '../../functions/correctUserCheck';
import SchemeSwatch from '../SchemeSwatch';

const ShowScheme = ({match}) =>{
    const [currentUser] = useContext(CurrentUserContext)
    const [userSchemes] = useContext(UserSchemesContext);
    const schemeOwnerId = match.params.userId
    const schemeId = match.params.schemeId
    useEffect(() => {
        correctUserCheck(currentUser, schemeOwnerId)

    },[])
    const scheme = userSchemes[schemeId]
    const swatches = scheme.scheme_swatches.map((swatch) =>{
        return <SchemeSwatch/>
    })
    return (
        <>
        <h1>Scheme Show</h1>
        <p>{scheme.scheme_swatches}</p>
        </>
    )
}

export default ShowScheme;