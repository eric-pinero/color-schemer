import React, { useEffect, useState, useContext } from 'react'
import {fetchColors} from '../../util/colorsAPIUtil'
import SelectedColors from './SelectedColors'
import {SchemeContext} from '../../contexts/SchemeContext'

const ColorDropdown = () => {
    const [paints, setPaints] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchCriteria, setSearchCriteria] = useState("");
    const [scheme, setScheme] = useContext(SchemeContext)

    useEffect(()=>{
        fetchColors().then((colors) =>{
            if (colors) {
                let idNum = 1;
                const paintsArr = []
                while (colors[idNum]){
                    paintsArr.push(colors[idNum])
                    idNum++
                }
                setPaints(paintsArr)
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
            <li key={paint.id} className="flex padding-10 hover-blue" onClick={(e)=>handleAdd(e,paint)} >
                <span>{name}</span>
                {dot}
            </li>
        )

    }
    const paintSearch = searchCriteria.length ? sortedPaints.filter(paint => {
        const lowerPaintName = paint.name.toLowerCase();
        const lowerSearchCriteria = searchCriteria.toLowerCase();
        return lowerPaintName.includes(lowerSearchCriteria);
        }) 
    : 
        null
    ;
    const displayedPaints = paintSearch ? paintSearch : sortedPaints;
    const paintItems = displayedPaints.map(
        paint => {
            const paintItem = paintItemBuilder(paint)
            return paintItem
        }
    );

    let selectorHeight = dropdownVisible ? "vh-50percent" : "h-0"
    let colorSelector = <ul className={`bg-white overflow-scroll ${selectorHeight} border-rad-5 ease-in-h`}>{paintItems}</ul>

    const handleAdd = (e, paint) => {
        if (!scheme.includes(paint)){
            setScheme(scheme.concat(paint))
        }
    }
    return(
        <>
            <SelectedColors 
                dropdownVisible={dropdownVisible}
                setDropdownVisible={setDropdownVisible}
                searchCriteria={searchCriteria}
                setSearchCriteria={setSearchCriteria}
            />
            {colorSelector}
        </>
    )
}

export default ColorDropdown