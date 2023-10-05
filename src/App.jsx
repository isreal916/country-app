import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout';
import Details from './components/body/country-detail/detail';
import Header from './components/header/header';
import { createContext } from 'react';
 export const backgroundContext = createContext()

function App() {
  const [isdarkMode,setisdarkMode] =useState(true)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/countrydetails/:name",
      element: <Details/>,
    },
  ]);
  const handleToggle =()=>{
    setisdarkMode(!isdarkMode)
    console.log(isdarkMode)
  }
  return (
    <>
    <backgroundContext.Provider value={isdarkMode}>
    <Header handleToggle={handleToggle}/>
    <RouterProvider router={router} />
    </backgroundContext.Provider>
   
    </>
  )
}

export default App
