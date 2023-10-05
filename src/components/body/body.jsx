import React, { useState, useEffect, useContext } from 'react';
import './body.scss';
import Input from './input/input';
import Desc from './container/description';
import { useFetchCountryByRegionQuery, useFetchCountryByNameQuery } from '../../country-api/country-api-slice';
import useFetch from '../../useFetch';
import { backgroundContext } from '../../App';

function Body() {
  const [values, setvalue] = useState('europe');
  const [datas, setdata] = useState();
  const [url, seturl] = useState(`https://restcountries.com/v3.1/region/${values}`);

  const [names, setName] = useState('n')
  const [data, isPending, isError] = useFetch(url)
  const isDarkmode = useContext(backgroundContext)
  console.log(data)
  const handleInput = (ev) => {

    const { name, value, type } = ev.target;

    if (name == 'select') {
      seturl(`https://restcountries.com/v3.1/region/${value}`)


    }
    if (name == 'text') {
      if (value == '') {
        // setName('a')
        // seturl(`https://restcountries.com/v3.1/region/${values}`)
      }

      else {
      }

      seturl(`https://restcountries.com/v3.1/name/${value}`)

    }

  }
  return (
    <section className="section-container" style={(isDarkmode) ? { backgroundColor: 'hsl(207, 26%, 17%)', color: 'white' } : { backgroundColor: 'white', color: 'black' }} >
      <Input handleInput={handleInput} />
      <div className="section-description">
        {data && <Desc data={data} />}

      </div>

    </section>
  )
}
//
export default Body;