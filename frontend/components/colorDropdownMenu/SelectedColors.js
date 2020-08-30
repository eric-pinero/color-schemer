import React from 'react';

const SelectedColors = ({scheme, schemeChange, dropdownVisible, setDropdownVisible}) =>{

    
    const placeholderText = scheme.length ? "" : "Select or Search"

    const paintItemBuilder = (paint) => {
        const name = paint.name
        const rgbString = `rgb(${paint.rgb.join(",")})`
        const dot = 
        <div style= {{
            background: rgbString,
            border: "1px solid black",
            height: "15px",
            width: "15px",
            borderRadius: "15px",
            marginLeft: "10px"
            }}
        />
        return(
            <li key={paint.id} className="flex padding-10 hover-blue" onClick={()=>handleRemove(paint)}>
                <span>{name}</span>
                {dot}
            </li>
        )
        
    }

    const handleRemove = (paint) => {
        debugger
        const paintIndex = scheme.indexOf(paint);
        const updatedScheme = scheme;
        updatedScheme.splice(paintIndex, 1);
        schemeChange(updatedScheme);
    }
    
    const selectedColorsBuilder = (colors) => {
        return colors.map((color) => paintItemBuilder(color))
    }

    const selectedColorItems = scheme.length ? selectedColorsBuilder(scheme) : null;

    let selectedColorsList = 
    <ul className="flex bg-white border-rad-5 flex-wrap" >
        {selectedColorItems}
        <input className="outline-none border-none margin-l-10 h-25px w-80percent pointer" placeholder={placeholderText} type="text" onClick={(e) => setDropdownVisible(!dropdownVisible)}/>
    </ul>
    return(
        <>
        {selectedColorsList}
        </>
    )

}
export default SelectedColors