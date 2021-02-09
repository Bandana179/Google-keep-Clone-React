import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note=(props)=>{
    
    return(
        <>
        <div className="note">
        <h1>{props.titles}</h1>
        <br/>
        <p>{props.contents}</p>
        <button className="btn">
        <DeleteOutlineIcon className="deleteIcon"  onClick={
            ()=>{
                props.onSelect(props.id)
            }
        }
        />
        </button>


        </div>
        </>
    )
}
export default Note;