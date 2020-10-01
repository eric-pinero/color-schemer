import React, { useContext } from "react"
import { ColorsContext } from '../contexts/ColorsContext'

const SchemeSwatch = ({paintId}) => {
    const [colors] = useContext(ColorsContext)
    const paint = colors[paintId];
    const complement = paint.complement

    return(
        <li className="flex align-center justify-center w-100percent margin-b-10">
            <p className="w-100 margin-5">Color: <br/> {paint.name}</p>
            <div className="shadow-light flex margin-r-10">
                <div className="box-100" style= {{background: `rgb(${paint.rgb.join(",")})`}}/>
                <div className="box-100" style= {{background: `rgb(${complement.rgb.join(",")})`}}/>
            </div>
            <p className="w-100">Complement: <br/> {complement.name}</p>
        </li>
    );
};

export default SchemeSwatch