import React, {useState} from 'react';
import ColorSchemeView from "./ColorSchemeView"
import ColorDropdown from "./colorDropdownMenu/ColorDropdown"

const ColorList = () => {
    let [scheme, schemeChange] = useState([]);
    
    return(
        <div className="flex justify-center space-between w-80percent margin-default padding-b-20 min-h-80vh h-fit">
            <div className="flex column w-45percent margin-5">
                <h2 className="f-20 padding-10 red">Army Painter Colors</h2>
                <ColorDropdown scheme={scheme} schemeChange={schemeChange}/>
            </div>
            <ColorSchemeView className="margin-5 border-1" scheme = {scheme}/>
      </div>
    )
}

export default ColorList