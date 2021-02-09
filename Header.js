import React from 'react';
import logo from './images/logo.png'
const Header=()=>{
    return(
        <>
        <div className="heading">
        <img src={logo} alt="logo" width="70px" height="50px"  />
         <h1>Google keep</h1>
        </div>



        </>
    )
}
export default Header;