import React, {useContext} from 'react';
import {SchemeContext} from "../../contexts/SchemeContext"

const SelectedColors = ({dropdownVisible, setDropdownVisible, searchCriteria, setSearchCriteria}) =>{
    const placeholderText = "Select or Search";
    const [scheme, setScheme] = useContext(SchemeContext);

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
            <li key={paint.id} className="flex padding-10 hover-blue pointer" onClick={()=>handleRemove(paint)}>
                <span>{name}</span>
                {dot}
            </li>
        ) 
    }

    const handleSearchChange = (e) => {
        setSearchCriteria(e.target.value)
        const searchLength = e.target.value.length;

        if (searchLength){
            setDropdownVisible(true)
        } else{
            setDropdownVisible(false)
        }
    }

    const handleRemove = (paint) => {
        const paintIndex = scheme.indexOf(paint);
        const updatedScheme = [...scheme];
        updatedScheme.splice(paintIndex, 1);
        setScheme(updatedScheme);
    }
    
    const selectedColorsBuilder = (colors) => {
        return colors.map((color) => paintItemBuilder(color))
    }

    const separator = scheme.length ? "border-b-s-1 border-red" : "";
    const buttonRotation = dropdownVisible ? <span>&#x25BC;</span> : <span>&#x25B2;</span>;
    
    const selectedColorItems = scheme.length ? selectedColorsBuilder(scheme) : null;

    const selectedColorsList = 
    <ul className="flex bg-white border-rad-5 w-100percent flex-wrap" >
        <div className="flex space-between w-100percent">    
            <input 
                className={`outline-none border-none ${separator} margin-l-10 margin-r-10 h-25px w-100percent pointer`} 
                placeholder={placeholderText} type="text" 
                onChange={(e) => handleSearchChange(e)}
                value={searchCriteria}
            />
            <button 
                className={`pointer relative cursor bg-lightyellow red border-1 border-rad-5 border-red`} 
                onClick={() => setDropdownVisible(!dropdownVisible)}
            >
                {buttonRotation}
            </button>
        </div>
        {selectedColorItems}
    </ul>
    return(
        <div className="flex w-100percent">
            {selectedColorsList}
        </div>
    )

}
export default SelectedColors