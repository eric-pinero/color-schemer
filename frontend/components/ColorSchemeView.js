import React, {useState} from "react";
import SchemeSwatch from "./SchemeSwatch";
import {createScheme} from "../util/schemeAPIUtil";

const ColorSchemeView = ({scheme}) => {
    let [schemeTitle, setSchemeTitle] = useState("Your Scheme")
    let schemeView = scheme.length ?
        scheme.map(
            paint => <SchemeSwatch className="border-1" paint={paint} scheme={scheme} key={paint.id}/>
        )
       :
       null
    ;

    const handleSchemeSubmit = () =>{
        createScheme(schemeTitle).then((response) =>{
            scheme.forEach((color)=>{

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