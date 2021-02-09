import React, { useState } from 'react';

const Footer=()=>{
    const d=new Date().getFullYear();
    
   return(
       <>
       <footer>
           <p>CopyRight © {d}</p>
       </footer>
       </>
   )   
}
export default Footer;