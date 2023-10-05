import React,{useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import './detail.scss'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom';
import { backgroundContext } from '../../../App';

import { FaArrowLeft } from 'react-icons/fa';
import useFetch from '../../../useFetch';
import countries from './data';
export default function Details() {
  const { name } = useParams();
  const [data, isPending, Iserro] = useFetch(`https://restcountries.com/v3.1/name/${name}`)
  console.log(data)
  const isDarkmode =useContext(backgroundContext)

  // data.languages.map(lang =>{return(lang)})
  return (
    <div className="details-container" style={(isDarkmode)?{backgroundColor:'hsl(209, 23%, 22%)',color:'white'}:{backgroundColor:'white',color:'black', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <div className="details-container-button">

        <button> <Link to={'/'} > <FaArrowLeft /> Back </Link></button>

      </div>
      {
        data && data.map(data => {
          // data.languages.map(lang =>{console.log(lang)})
          let html ='';
          const getcountryName = (code) => {
            countries.forEach(country => {
              if (country.code === code) {
                console.log(country.name);
                 html = country.name
              }


            });
         return html;
          }
          getcountryName("USA")
          const languageArray = [];
          const currencyArray =[];
          for (const key in data.currencies) {
            if (data.currencies.hasOwnProperty(key)) {
              currencyArray.push({ code: key, name: data.currencies[key].name });
            }
          }
          for (const key in data.languages) {
            if (data.languages.hasOwnProperty(key)) {
              languageArray.push({ code: key, name: data.languages[key] });
            }
          }

          // console.log(languageArray);

          return (
            <div className="details-container-information" key={data.flags.png} >
              <div className="details-space-img">
                <img src={data.flags.png} alt="" />
              </div>
              <div className="details-all-information">
                <div className="details-space-information">
                  <div className="country-information-one">
                    <h1>{data.name.common}</h1>
                    <span className="country-informations"><h3>Native Name:</h3><p>{data.name.common}</p></span>
                    <span className="country-informations"><h3>Population:</h3><p>{data.population.toLocaleString()}</p></span>
                    <span className="country-informations"><h3>Region:</h3><p>{data.region}</p></span>
                    <span className="country-informations"><h3>Sub Region:</h3><p>{data.subregion}</p></span>
                    <span className="country-informations"><h3> Capital:</h3><p>{data.capital}</p></span>

                  </div>
                  <div className="country-information-two">
                    <span className="country-informations"><h3>Top Level Domain:</h3><p>{data.tld}</p></span>
                    <span className="country-informations"><h3>Currencies:</h3><p>{currencyArray && currencyArray.map(currency =>{return `${currency.name}`})}</p></span>
                    <span className="country-informations"><h3>Languages:</h3><p> { currencyArray && languageArray.map(lang => { return `${lang.name},` })}</p></span>

                  </div>
                </div>
                <div className="border-details">
                  <h2>Border Countries:</h2>
                  <div className='border-button'>
                  {
                  data.borders &&  data.borders.map(border => {
                      return (
                          <button><Link to={`/countrydetails/${getcountryName(border)}`}>{getcountryName(border)}</Link></button>
                        

                      )
                    })
                  }
                </div>
                </div>
              </div>

            </div>
          )
        }

        )
      }



    </div>
  )
}