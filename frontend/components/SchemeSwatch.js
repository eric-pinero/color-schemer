import React from "react"

const SchemeSwatch = ({paint}) => {
    const complement = paint.complement
    return(
        <li className="flex align-center justify-center w-100percent margin-b-10">
            <p className="w-200 margin-5">Color: <br/> {paint.name}</p>
            <div className="shadow-light flex">
                <div className="box-100" style= {{background: `rgb(${paint.rgb.join(",")})`}}/>
                <div className="box-100" style= {{background: `rgb(${complement.rgb.join(",")})`}}/>
            </div>
            <p className="w-200">Complement: <br/> {complement.name}</p>
        </li>
    );
};

export default SchemeSwatch