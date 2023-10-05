import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'

 export const apiSlice = createApi({
  reducerPath:'api',
  baseQuery:fetchBaseQuery({
    baseUrl:'https://restcountries.com/v3.1/',
   
  }),
  endpoints(builder){
return{
  fetchCountryByRegion:builder.query({
    query(region ='africa'){
      return `/region/${region}`;
    }
  }),
  fetchCountryByName:builder.query({
    query(name='nigeria' ){
      return `name/${name}`;
    }
  })
}
  }
})
export const {useFetchCountryByRegionQuery,useFetchCountryByNameQuery } = apiSlice