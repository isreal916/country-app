import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'

 export const nameSlice = createApi({
  reducerPath:'api-country',
  baseQuery:fetchBaseQuery({
    baseUrl:'https://restcountries.com/v3.1/',
   
  }),
  endpoints(builder){
return{
  fetchCountryByName:builder.query({
    query(name='nigeria' ){
      return `name/${name}`;
    }
  })
}
  }
})
export const {useFetchCountryByNameQuery  } = nameSlice