import React, { useEffect, useState } from 'react'
import Select from 'react-select'
// import paints from '../paints.json'
import complementCalculator from '../functions/ComplementaryColors'
import {fetchColors} from '../util/colorsAPIUtil'

const ColorDropdown = ({scheme, schemeChange}) => {
    let [paints, setPaints] = useState([]);

    if(paints.length === 0){
        fetchColors().then((response, error) =>{
            if (response) {
                let idNum = 1;
                const paintsArr = []
                while (response[idNum]){
                    paintsArr.push(response[idNum])
                    idNum++
                }

                setPaints(paintsArr)
            } else {
                console.log(error)
            }
        })
    }
    const sortedPaints = paints.sort((a,b) => (a.name < b.name ? -1 : 1));
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