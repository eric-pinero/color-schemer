import React, {createContext, useState} from 'react'

export const SchemeContext = createContext([]);

export const SchemeProvider = (props) =>{
    const [scheme, setScheme] = useState([])

    return(
        <SchemeContext.Provider value={[scheme, setScheme]}>
            {props.children}
        </SchemeContext.Provider>
    )
}