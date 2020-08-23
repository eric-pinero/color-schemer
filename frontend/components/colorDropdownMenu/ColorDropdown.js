import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import {fetchColors} from '../../util/colorsAPIUtil'
import SelectedColors from './SelectedColors'
import ColorSelector from './ColorSelector'

const ColorDropdown = ({scheme, schemeChange}) => {
    let [paints, setPaints] = useState([]);
    let [dropdownVisible, setDropdownVisible] = useState(false);
    let [searchCriteria, setSearchCriteria] = useState(null);

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
            <li key={paint.id} className="flex padding-10 hover-blue" onClick={(e)=>handleAdd(paint)} >
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

    let colorSelector = dropdownVisible ? <ul className="bg-white overflow-scroll vh-50percent border-rad-5">{list2}</ul> : null


    const handleChange = (e,selected) => {
        const change = selected ? selected.map(selection => selection.value) : [];
        schemeChange(change);
    }

    const handleAdd = (e) => {
        if (!scheme.includes(e)){
            schemeChange(scheme.concat(e))
        }
    }
    return(
        <>
        {/* <Select 
            isMulti
            options = {list}
            closeMenuOnSelect = {false}
            onChange = {handleChange}
        /> */}

        <div onClick={(e) => setDropdownVisible(!dropdownVisible)}>
            <SelectedColors scheme={scheme} schemeChange={schemeChange}/>
            {colorSelector}
            <ColorSelector />
        </div>
        </>
    )
}

export default ColorDropdown