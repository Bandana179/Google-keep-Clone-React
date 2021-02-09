import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{
    const [expand , setexpand]=useState(false)
    const[note ,setNote]=useState({
        title:"",
        content:"",

    });
    const expandit=()=>{
        setexpand(true);
    }
    const unexpand=()=>{
        setexpand(false);
    }
    const InputEvent=(event)=>{
        const {name , value}=event.target;
        setNote((prevalue)=>{
            return{
                ...prevalue,
                [name]:value
            }

        })
    }
    const AddEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:""
        })

    }
    return(
        <>
        <div className="main-note">
        <form>
       { expand?
            <input type="text" placeholder="Title" name="title" autoComplete="off"
             value={note.title} onChange= {InputEvent}/> :null }
            <textarea  rows='' columns='' placeholder='Write a note..'  
            name="content" value={note.content} onChange={InputEvent} 
            onClick={expandit} onDoubleClick={unexpand}/>
            { expand?
            <Button onClick={AddEvent}>
            <AddIcon className="plus-sign" />

            </Button>:null}

        </form>

        </div>

        </>
    )
}

export default CreateNote;