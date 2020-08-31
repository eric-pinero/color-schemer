import React, { useEffect, useState } from 'react'
import {fetchColors} from '../../util/colorsAPIUtil'
import SelectedColors from './SelectedColors'

const ColorDropdown = ({scheme, schemeChange}) => {
    let [paints, setPaints] = useState([]);
    let [dropdownVisible, setDropdownVisible] = useState(false);
    let [searchCriteria, setSearchCriteria] = useState(null);

    useEffect(()=>{
        fetchColors().then((colors, error) =>{
            if (colors) {
                let idNum = 1;
                const paintsArr = []
                while (colors[idNum]){
                    paintsArr.push(colors[idNum])
                    idNum++
                }
                console.log(colors)
            } else {
                console.log(error)
            }
        })
    }, [])
    
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

    let selectorHeight = dropdownVisible ? "vh-50percent" : "h-0"
    let colorSelector = <ul className={`bg-white overflow-scroll ${selectorHeight} border-rad-5 ease-in-h`}>{list2}</ul>

    const handleAdd = (e) => {
        if (!scheme.includes(e)){
            schemeChange(scheme.concat(e))
        }
    }
    return(
        <>
            <SelectedColors 
                scheme={scheme} 
                schemeChange={schemeChange}
                dropdownVisible={dropdownVisible}
                setDropdownVisible={setDropdownVisible}
            />
            {colorSelector}
        </>
    )
}

export default ColorDropdown