import React, { useState, useContext, useEffect } from 'react';
import SchemeSwatch from './SchemeSwatch';
import { fetchUser } from '../util/userAPIUtil'
import { createScheme } from '../util/schemeAPIUtil';
import { createSchemeSwatch } from '../util/schemeSwatchAPIUtil'
import { SchemeContext } from '../contexts/SchemeContext'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { ColorsContext } from '../contexts/ColorsContext';


const ColorSchemeView = ({title, swatches, schemeId}) => {
    const startingTitle = title ? title : '';
    const [schemeTitle, setSchemeTitle] = useState(startingTitle);
    const [scheme, setScheme] = useContext(SchemeContext);
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
    const [colors] = useContext(ColorsContext);
    let schemeSaved = null;

    function updateExistingSwatches(){
        let swatchColors;
        if (swatches){
        swatchColors = swatches.map(swatch => (
            colors[swatch.color_id]
        ))} else if(swatches === null){
            swatchColors = []
        }
        setScheme(swatchColors)
    }

    useEffect(()=>
        updateExistingSwatches()
    ,[swatches])


    let schemeView = scheme.length ?
        scheme.map(
            paint => <SchemeSwatch className='border-1' paintId={paint.id} key={paint.id}/>
        )
       :
       <div className='vh-60percent'>
            <h3 className='bold border-b-s-1 border-red margin-b-10'>How to Scheme</h3>
            <ul className='h-90percent margin-b-10 flex column space-between align-start'>
                <li>Click the arrow or start typing in the search field</li>
                <li>Click on colors to select them and add them to your scheme</li>
                <li>Swatches will appear with the complements of your selection</li>
                <li>Login to save your schemes</li>
                <li>Smock up before painting</li>
                <li><iframe src="https://giphy.com/embed/xT9Igmxor5ijVnu7QI" 
                    width="480" height="269" frameBorder="0" class="" 
                    allowFullScreen/>
                </li>
            </ul>
        </div>
    ;

    const handleSchemeSubmit = () =>{
        const schemeParams = {
            title: schemeTitle,
            owner_id: currentUser.id
        }
        
        createScheme(schemeParams).then((response) =>{
            scheme.forEach((color)=>{
                const schemeSwatchParams = {
                    color_id: color.id,
                    scheme_id: response.scheme.id
                }
                createSchemeSwatch(schemeSwatchParams);
            })
        })
        setSchemeTitle('');
        setScheme([])
        schemeSaved = 'Scheme successfully saved!'
        fetchUser(currentUser.id).then((response => (
            setCurrentUser(response)
        )))
    }

    
    const schemeNameField = scheme.length ?             
        <input
            onChange={(e) => setSchemeTitle(e.target.value)}
            value={schemeTitle}
            placeholder='Your Scheme Name'
        />
        :
        null
    ;
    const schemeSubmitButton = scheme.length ? <button onClick={handleSchemeSubmit}>Submit</button> : null;
    
    const schemeViewStyle = 'border-1 border-rad-15 border-red bg-lightyellow padding-10';
    const schemeCreateArea = schemeId || !currentUser ?  null : <div>{schemeNameField} {schemeSubmitButton}</div>

    return(
        <>
        <div className='flex column w-45percent h-fit red align-center'>
            <h2 className='f-20 padding-10'>{schemeTitle}</h2>
            <ul className={schemeViewStyle}>
                {schemeView}
            </ul>
            {schemeCreateArea}
        </div>
        {schemeSaved}
        </>
    );
}

export default ColorSchemeView;