import React from 'react';


const Schemes = ({schemes}) => {

    const schemeList  = schemes.map

    return(
        <ul>
            <p>Your Schemes</p>
            {schemeList}
        </ul>
    )
}

export default Schemes;