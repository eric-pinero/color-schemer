import React, { useContext, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom'; 
import { CurrentUserContext} from '../../contexts/CurrentUserContext';
import SchemeIndexItem from './SchemeIndexItem';

const Schemes = ({match}) => {
    const [currentUser] = useContext(CurrentUserContext)
    const schemeOwnerId = match.params.userId;
    if(!currentUser || schemeOwnerId != currentUser.id ) return <Redirect to="/"/>
    let schemes = currentUser.schemes.length ? currentUser.schemes : [];

    useEffect(()=>(
        fet
    ),[])

    const schemeList = schemes.map(scheme =>{
        return(
            <li><SchemeIndexItem match={match} scheme={scheme}/></li>
        )
    });
    {}
    return(
        <div className='flex column txt-left margin-default w-80percent 
         bg-lightyellow align-center padding-10 line-h-1pt5 min-h-80vh h-fit'>
            <h2>Your Schemes</h2>
            <ul>
                {schemeList}
            </ul>
        </div>
    )
}

export default Schemes;