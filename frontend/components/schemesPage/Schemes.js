import React, { useContext } from 'react';
import { CurrentUserContext} from '../../contexts/CurrentUserContext'

const Schemes = () => {
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const schemes = currentUser.schemes
    debugger
    const schemeList  = "test"

    return(
        <ul>
            <p>Your Schemes</p>
            {schemeList}
        </ul>
    )
}

export default Schemes;