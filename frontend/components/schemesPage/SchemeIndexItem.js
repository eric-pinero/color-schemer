import React from 'react';
import { Link } from 'react-router-dom'

const SchemeIndexItem = ({scheme, match}) => {
    const schemeOwnerId = match.params.userId;
    return(
        <Link to={`/${schemeOwnerId}/scheme/${scheme.id}`} 
            className='link red bold'>{scheme.title}
        </Link>
    )
};
export default SchemeIndexItem;