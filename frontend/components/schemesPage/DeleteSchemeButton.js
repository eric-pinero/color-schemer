import React, { useState, useContext  } from 'react';
import { deleteScheme } from '../../util/schemeAPIUtil'
import { UserSchemesContext } from '../../contexts/UserSchemesContext'

const DeleteSchemeButton = ({ schemeId }) => {
    const [deleteConfirmed, setDeleteConfirmed] = useState(false)
    const [userSchemes, setUserSchemes] = useContext(UserSchemesContext)

    const handleDelete = () => {
        deleteScheme(schemeId).then((response) => {
            let currentSchemes = {...userSchemes};
            delete currentSchemes[response.id]
            setUserSchemes(currentSchemes)
        })
    }
    const deleteButton = deleteConfirmed ? 
        <>
        <button onClick={handleDelete}>X</button><span>click again to delete</span>
        </>
        : 
        <button onClick={()=> setDeleteConfirmed(true)}>X</button> 
    ;
    
    return deleteButton
};

export default DeleteSchemeButton;