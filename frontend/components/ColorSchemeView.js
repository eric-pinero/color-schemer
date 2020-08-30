import React, {useContext} from "react"
import SchemeSwatch from "./SchemeSwatch"
import SchemeContext from "../contexts/SchemeContext"



const ColorSchemeView = ({scheme}) => {
    
    let test = useContext(SchemeContext)
    let schemeView = scheme.length ?
        scheme.map(
            paint => <SchemeSwatch className="border-1" paint={paint} scheme={scheme} key={`${Math.floor(Math.random() * 100)}`}/>
        )
       :
       null
    ;
    const schemeViewStyle = scheme.length ? "border-1 border-rad-15 border-red bg-lightyellow padding-10" : "";
    return(
        <div className="flex column w-45percent h-fit red">
            <h2 className="f-20 padding-10">Your Scheme</h2>
            <ul className={schemeViewStyle}>
                {schemeView}
            </ul>
        </div>
    );
}

export default ColorSchemeView;