import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import LandAndPlotsPage from './pages/LandAndPlotsPage';
import ResidentialLandPlotsPage from './pages/ResidentialLandPlotsPage';
import ResidentialPlotPage from './pages/ResidentialPlotPage';


const App = () => {
  return (
    <>
     <BrowserRouter>
     
        <Routes>
        
          {/* Customer Portal Routes */}
         
          <Route path="/land-plots" element={<LandAndPlotsPage />} />
         
          {/* Apartment House  Type Routes */}
          <Route path="/" element={<LandAndPlotsPage/>} />
          <Route path="/land-plots/residential-land-plots" element={<ResidentialLandPlotsPage/>} />
          <Route path="/land-plots/residential-land-plots/residential-plot" element={<ResidentialPlotPage/>} />
         
          

        </Routes>
     </BrowserRouter> 
        
          
    </>
  )
}

export default App
