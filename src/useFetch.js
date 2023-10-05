import  { useState, useEffect } from 'react';
function useFetch(url) {
  const [data,setData] = useState(null)
  const [isPending,setPending] = useState(true)
  const [error,setError] = useState(true)
  useEffect(()=>{
    const abbortCont =new AbortController()
    fetch(url ,{signal :abbortCont.signal})
    .then(res => {
     if (!res.ok) {
      throw Error('could not fetch data from server')
     }
      return res.json()})
    .then(data =>{
      setData(data)
      console.log(data)
      setPending(false)
      setError(false)
    }).catch(err=>{
      if(err.name === 'AbortError'){
console.log('Fetch aborted');
      }
      else{
        setError(err.message);
        setPending(null)
      }
   
    })
    return ()=>abbortCont.abort();
  },[url])
  return [data,isPending,error];
}
export default useFetch;