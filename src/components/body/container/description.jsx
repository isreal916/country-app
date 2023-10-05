import React,{useContext} from 'react';
import './description.scss';
import { Link } from 'react-router-dom';
import { backgroundContext } from '../../../App';
function Desc({ data }) {
  const isDarkmode =useContext(backgroundContext)

  return (
   data && data.map(data => {
      return (
        <Link to={'countrydetails/' + data.name.common}>
 < div className = "description-card"  key={data.name.official} style={(isDarkmode)?{backgroundColor:'hsl(209, 23%, 22%)',color:'white'}:{backgroundColor:'white',color:'black', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      
      <div className="description-card-flag"><img src={data.flags.png} alt="hb" /></div>
      <div className="description-card-name"><h3>{data.name.common}</h3></div>
      <div className="description-card-population">
        <h4>Population:</h4>
        <p>{data.population.toLocaleString()}</p>
      </div>
      <div className="description-card-region">
          <h4>Region:</h4>
          <p>{data.region}</p>
      </div>
      <div className="description-card-capital">
        <h4>Capital:</h4>
        <p>{data.capital}</p>
      </div>
    </div>
        </Link>
       
      )
    })
   


  )
}
export default Desc;

