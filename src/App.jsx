import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import LandAndPlotsPage from './pages/LandAndPlotsPage';
import ResidentialLandPlotsPage from './pages/ResidentialLandPlotsPage';
import ResidentialPlotPage from './pages/ResidentialPlotPage';
import DTCPPlotPage from './pages/DTCPPlotPage';
import GatedCommunityPlotPage from './pages/GatedCommunityPlotPage';
import VillaPlotPage from './pages/VillaPlotPage';
import FarmHousePlotPage from './pages/FarmHousePlotPage';
import RowHousePlotPage from './pages/RowHousePlotPage';


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
          <Route path="/land-plots/residential-land-plots/dtcp-cmda-approved-plot" element={<DTCPPlotPage/>} />
          <Route path="/land-plots/residential-land-plots/gated-community-plot" element={<GatedCommunityPlotPage/>} />
          <Route path="/land-plots/residential-land-plots/villa-plot" element={<VillaPlotPage/>} />
          <Route path="/land-plots/residential-land-plots/farm-house-plot" element={<FarmHousePlotPage/>} />
          <Route path="/land-plots/residential-land-plots/row-house-plot" element={<RowHousePlotPage/>} />
         
          

        </Routes>
     </BrowserRouter> 
        
          
    </>
  )
}

export default App
