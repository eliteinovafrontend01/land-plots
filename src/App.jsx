import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import LandAndPlotsPage from './pages/LandAndPlotsPage';


const App = () => {
  return (
    <>
     <BrowserRouter>
     
        <Routes>
        
          {/* Customer Portal Routes */}
         
          <Route path="/landandplots" element={<LandAndPlotsPage />} />
         
          {/* Apartment House  Type Routes */}
          <Route path="/" element={<LandAndPlotsPage/>} />
          {/* <Route path="/commercial/office-space" element={<OfficeSpacePage />} /> */}
         
          

        </Routes>
     </BrowserRouter> 
        
          
    </>
  )
}

export default App
