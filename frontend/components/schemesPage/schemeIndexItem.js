import React from 'react';
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const SchemeIndexItem = ({scheme, match}) => {
    const schemeOwnerId = match.params.userId;
    debugger
    return(
        <Link to={`/${schemeOwnerId}/scheme/${scheme.id}`} className='link white'>{scheme.title}</Link>
    )
};

export default SchemeIndexItem;