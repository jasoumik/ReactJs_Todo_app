import React from 'react';
import {Link} from 'react-router-dom';
function Header(){
 return (
     <header style={h_style}>
     <h1>
         JAS Todo List
     </h1>
     <Link style={L_style} to="/">Home</Link>| <Link style={L_style} to="/about">About</Link>
     </header>
 )
}
const h_style={
    background:'#333',
      color:'#fff',
      cursor:'pointer',
      border:'none',
      padding:'9px',
    //  borderRadius:'90%',
     
  }
  const L_style={
    background:'#333',
      color:'#fff',
      cursor:'pointer',
      border:'none',
      padding:'9px',
    //  borderRadius:'90%',
     
  }
export default Header;