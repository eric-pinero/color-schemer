import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import {fetchColors} from '../util/colorsAPIUtil'

const ColorDropdown = ({scheme, schemeChange}) => {
    let [paints, setPaints] = useState([]);
    let [dropdownVisible, setDropdownVisible]  = useState(false)

    if(paints.length === 0){
        fetchColors().then((colors, error) =>{
            if (colors) {
                let idNum = 1;
                const paintsArr = []
                while (colors[idNum]){
                    paintsArr.push(colors[idNum])
                    idNum++
                }
                setPaints(paintsArr)
            } else {
                console.log(error)
            }
        })
    }
    const sortedPaints = paints.sort((a,b) => (a.name < b.name ? -1 : 1));

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
            <li key={paint.id} className="flex padding-10 hover-blue" onClick={()=>handleChange(paint)} >
                <span>{name}</span>
                {dot}
            </li>
        )

    }

    const list = sortedPaints.map(
        paint => {
            const name = paint.name
            const rgbString = `rgb(${paint.rgb.join(",")})`
            const dot = <div style= {{
                background: rgbString,
                border: "1px solid black",
                height: "15px",
                width: "15px",
                borderRadius: "15px",
                marginLeft: "10px"
                }}
            />
            return({
                "label": 
                    <div key={paint.id} className="flex">
                        <span>{name}</span>
                        {dot}
                    </div>,
                "value": {...paint, complement: paint.complement },
                "key":name
            })
        }
    )

    const list2 = sortedPaints.map(
        paint => {
            const paintItem = paintItemBuilder(paint)
            return paintItem
        }
    )

    const selectedColorsBuilder = (colors) => {
        return colors.map((color) => paintItemBuilder(color))
    }
    
    const placeholderText = scheme.length ? "" : "Select or Search"
    let selectedColors = 
    <ul className="flex bg-white border-rad-5">{selectedColorsBuilder(scheme)}
        <input className="outline-none border-none" placeholder={placeholderText} type="text"/>
    </ul>


    let colorSelector = dropdownVisible ? <ul className="bg-white overflow-scroll vh-50percent border-rad-5">{list2}</ul> : null


    const handleChange = (selected) => {
        debugger
        const change = selected ? selected.map(selection => selection.value) : []
        schemeChange(change)
    }
    return(
        <>
        <Select 
            isMulti
            options = {list}
            closeMenuOnSelect = {false}
            onChange = {handleChange}
        />

        <div onClick={() => setDropdownVisible(!dropdownVisible)}>
            {selectedColors}
            {colorSelector}
        </div>
        </>
    )
}

export default ColorDropdown