import React, {useState} from "react"
import SchemeSwatch from "./SchemeSwatch"

const ColorSchemeView = ({scheme}) => {
    let [schemeTitle, setSchemeTitle] = useState("Your Scheme")
    let schemeView = scheme.length ?
        scheme.map(
            paint => <SchemeSwatch className="border-1" paint={paint} scheme={scheme} key={paint.id}/>
        )
       :
       null
    ;
    
    const schemeViewStyle = scheme.length ? "border-1 border-rad-15 border-red bg-lightyellow padding-10" : "";
    return(
        <div className="flex column w-45percent h-fit red">
            <h2 className="f-20 padding-10">{schemeTitle}</h2>
            <ul className={schemeViewStyle}>
                {schemeView}
            </ul>
            <input
                onChange={(e) => setSchemeTitle(e.target.value)}
                value={schemeTitle}
            />
            <button onClick={}>Submit</button>
        </div>
    );
}

export default ColorSchemeView;