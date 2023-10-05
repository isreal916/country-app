import React, { useContext } from 'react';
import './header.scss';
import { FaMoon, FaSun } from 'react-icons/fa';
import { backgroundContext } from '../../App';




export default function Header({handleToggle}) {
const isDarkmode =useContext(backgroundContext)

  return (
<header className="header" style={(isDarkmode)?{backgroundColor:'hsl(209, 23%, 22%)',color:'white'}:{backgroundColor:'white',color:'black', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
  <div className="header-brand">
  <h1>Where in the world?</h1>
  </div>
  <div className="header-utils" onClick={handleToggle}>
   {(isDarkmode)? <FaMoon /> :<FaSun /> }
  </div>

</header>
     );
}
