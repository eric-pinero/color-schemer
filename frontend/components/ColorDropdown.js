import React from 'react'
import Select from 'react-select'
import paints from "../paints.json"
import complementCalculator from "../functions/ComplementaryColors"

const ColorDropdown = ({scheme, schemeChange}) => {
    const sortedPaints = paints.sort((a,b) => (a.name < b.name ? -1 : 1));
    const list = sortedPaints.map(
        paint => {
            const name = paint.name
            const rgbaString = `rgba(${paint.rgba.join(",")})`

            const dot = <div style= {{
                background: rgbaString,
                border: "1px solid black",
                height: "15px",
                width: "15px",
                borderRadius: "15px",
                marginLeft: "10px"
                }}
            />
            return({
                "label": 
                    <div className="flex">
                        <span>{name}</span>
                        {dot}
                    </div>,
                "value": {...paint, complement: complementCalculator(paint, paints) },
                "key":{name}
            })
        }
    )

    const handleChange = (selected) => {
        const change = selected ? selected.map(selection => selection.value) : []
        schemeChange(change)
    }

    return(
        <Select 
            isMulti
            options = {list}
            closeMenuOnSelect = {false}
            onChange = {handleChange}
        />
    )
}

export default ColorDropdown