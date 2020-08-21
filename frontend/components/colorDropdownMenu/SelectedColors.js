import React from 'react';

const SelectedColors = ({scheme, schemeChange}) =>{

    
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
                <p onClick={(e)=>handleRemove(e)}>X</p>
            </li>
        )
        
    }

    const handleRemove = (paint) => {
        const paintIndex = scheme.indexOf(paint);
        debugger
        schemeChange(scheme.splice(paintIndex, 1))
    }
    
    const selectedColorsBuilder = (colors) => {
        return colors.map((color) => paintItemBuilder(color))
    }

    const selectedColorItems = scheme.length ? selectedColorsBuilder(scheme) : null;

    let selectedColorsList = 
    <ul className="flex bg-white border-rad-5">
        {selectedColorItems}
        <input className="outline-none border-none" placeholder={placeholderText} type="text"/>
    </ul>
    return(
        <>
        {selectedColorsList}
        </>
    )

}
export default SelectedColors