import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
const App=()=>{
  const[mynote, setmynote]=useState([]);
    
  const addNote=(note)=>{
    setmynote((olddata)=>{
      return[...olddata, note]
    })
   

  }
  const Deleteitem=(id)=>{
    setmynote((olddata)=>{
      return  olddata.filter(( currelem, index)=>{
        return index!=id;
  
      })
    })
   

  }
  return(
    <>
    <Header/>
    <CreateNote
      passNote={addNote}
    />
    {
   mynote.map((currelem, index)=>{
     return <Note key={index} id={index} titles={currelem.title}  contents={currelem.content}
      onSelect={Deleteitem} />

   })
    }
    <Footer/>
    </>
  )
}
export default App;
