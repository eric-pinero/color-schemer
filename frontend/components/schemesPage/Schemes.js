import React, { useContext } from 'react';
import { CurrentUserContext} from '../../contexts/CurrentUserContext';
import SchemeIndexItem from './schemeIndexItem';

const Schemes = () => {
    const [currentUser] = useContext(CurrentUserContext)
    const schemes = currentUser.schemes.length ? currentUser.schemes : [];
    const schemeList = schemes.map(scheme =>{
        return(
            <SchemeIndexItem/>
        )
    });

    return(
        <div>
            <h2>Your Schemes</h2>
            <ul>
                {schemeList}
            </ul>
        </div>
    )
}

export default Schemes;