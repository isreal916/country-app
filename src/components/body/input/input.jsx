import React,{useContext} from 'react';
import { FaSearch } from 'react-icons/fa';
import './input.scss';
import { backgroundContext } from '../../../App';
 export default function Input({handleInput}){ 
  const isDarkmode =useContext(backgroundContext)

  return(
    <div className="input-container" >
      <div className="input-container-text" style={(isDarkmode)?{backgroundColor:'hsl(209, 23%, 22%)',color:'white'}:{backgroundColor:'white',color:'black', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} >
        <span><FaSearch/></span>
        
        <input type="text" name="text" id=""  onChange={(ev)=>handleInput(ev)}   />
      </div>
      <div className="input-container-select" >
        <select name="select" id="" onChange={(ev)=>handleInput(ev)} style={(isDarkmode)?{backgroundColor:'hsl(209, 23%, 22%)',color:'white'}:{backgroundColor:'white',color:'black', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe" selected>Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}