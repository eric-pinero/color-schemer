import React, {useState, useContext} from "react";
import SchemeSwatch from "./SchemeSwatch";
import {createScheme} from "../util/schemeAPIUtil";
import {createSchemeSwatch} from "../util/schemeSwatchAPIUtil"
import {SchemeContext} from "../contexts/SchemeContext"

const ColorSchemeView = () => {
    const [schemeTitle, setSchemeTitle] = useState("Your Scheme")
    const [scheme, setScheme] = useContext(SchemeContext)
    let schemeView = scheme.length ?
        scheme.map(
            paint => <SchemeSwatch className="border-1" paint={paint} scheme={scheme} key={paint.id}/>
        )
       :
       null
    ;

    const handleSchemeSubmit = () =>{
        const schemeParams = {
            title: schemeTitle,
            owner_id: currentUser.id
        }
        
        createScheme(schemeParams).then((response) =>{
            scheme.forEach((color)=>{
                const schemeSwatchParams = {
                    color_id: color.id,
                    scheme_id: response.id
                }
                createSchemeSwatch(schemeSwatchParams);
            })
        })
    }

    const schemeNameField = scheme.length ?             
        <input
            onChange={(e) => setSchemeTitle(e.target.value)}
            value={schemeTitle}
        />
        :
        null
    ;
    const schemeSubmitButton = scheme.length ? <button onClick={handleSchemeSubmit}>Submit</button> : null;

    const schemeViewStyle = scheme.length ? "border-1 border-rad-15 border-red bg-lightyellow padding-10" : "";
    return(
        <div className="flex column w-45percent h-fit red">
            <h2 className="f-20 padding-10">{schemeTitle}</h2>
            <ul className={schemeViewStyle}>
                {schemeView}
            </ul>
            {schemeNameField}
            {schemeSubmitButton}
        </div>
    );
}

export default ColorSchemeView;