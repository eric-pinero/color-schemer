import React, {createContext, useState} from 'react'

export const UserSchemesContext = createContext([]);

export const UserSchemesProvider = (props) =>{
    const [userSchemes, setUserSchemes] = useState([])

    return(
        <UserSchemesContext.Provider value={[userSchemes, setUserSchemes]}>
            {props.children}
        </UserSchemesContext.Provider>
    )
}