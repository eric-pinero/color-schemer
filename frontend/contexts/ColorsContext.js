import React, {createContext, useState, useEffect} from 'react'
import { fetchColors } from '../util/colorsAPIUtil'

export const ColorsContext = createContext([]);

export const ColorsContextProvider = (props) =>{
    const [colorsContext, setColorsContext] = useState(null)

    const retrieveColors = () =>{
        fetchColors().then((colors) =>{
            setColorsContext(colors)
        })
    }

    useEffect(()=>{
        retrieveColors();
    }, [])

    return(
        <ColorsContext.Provider value={[colorsContext, setColorsContext]}>
            {props.children}
        </ColorsContext.Provider>
    )
}