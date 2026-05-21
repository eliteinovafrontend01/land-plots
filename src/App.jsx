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

import CommercialLandPlotsPage from './pages/CommercialLandPlotsPage';
import OfficeSpaceLandPage from './pages/OfficeSpaceLandPage';
import RetailShopPlotPage from './pages/RetailShopPlotPage';
import ShowroomPlotPage from './pages/ShowroomPlotPage';
import ShoppingComplexLandPage from './pages/ShoppingComplexLandPage';
import HotelResortLandPage from './pages/HotelResortLandPage';
import PetrolBunkPlotPage from './pages/PetrolBunkPlotpage';
import ITParkLandPage from './pages/ITParkLandPage';
import WarehouseLandPage from './pages/WarehouseLandPage';
import IndustrialCommercialPlotPage from './pages/IndustrialCommercialPlotPage';


const App = () => {
  return (
    <>
     <BrowserRouter>
     
        <Routes>
        
          {/* Customer Portal Routes */}
         
          <Route path="/land-plots" element={<LandAndPlotsPage />} />
         
          {/* Residential land/plots  Routes */}

          <Route path="/" element={<LandAndPlotsPage/>} />
          <Route path="/land-plots/residential-land-plots" element={<ResidentialLandPlotsPage/>} />
          <Route path="/land-plots/residential-land-plots/residential-plot" element={<ResidentialPlotPage/>} />
          <Route path="/land-plots/residential-land-plots/dtcp-cmda-approved-plot" element={<DTCPPlotPage/>} />
          <Route path="/land-plots/residential-land-plots/gated-community-plot" element={<GatedCommunityPlotPage/>} />
          <Route path="/land-plots/residential-land-plots/villa-plot" element={<VillaPlotPage/>} />
          <Route path="/land-plots/residential-land-plots/farm-house-plot" element={<FarmHousePlotPage/>} />
          <Route path="/land-plots/residential-land-plots/row-house-plot" element={<RowHousePlotPage/>} />

            {/* Commercial land/plots  Routes */}
            
          <Route path="/land-plots/commercial-land-plots" element={<CommercialLandPlotsPage/>} />
          <Route path="/land-plots/commercial-land-plots/office-space-land" element={<OfficeSpaceLandPage/>} />
          <Route path="/land-plots/commercial-land-plots/retail-shop-plot" element={<RetailShopPlotPage/>} />
          <Route path="/land-plots/commercial-land-plots/showroom-plot" element={<ShowroomPlotPage/>} />
          <Route path="/land-plots/commercial-land-plots/shopping-complex-land" element={<ShoppingComplexLandPage/>} />
          <Route path="/land-plots/commercial-land-plots/hotel-resort-land" element={<HotelResortLandPage/>} />
          <Route path="/land-plots/commercial-land-plots/petrol-bunk-plot" element={<PetrolBunkPlotPage/>} />
          <Route path="/land-plots/commercial-land-plots/it-park-land" element={<ITParkLandPage/>} />
          <Route path="/land-plots/commercial-land-plots/warehouse-land" element={<WarehouseLandPage/>} />
          <Route path="/land-plots/commercial-land-plots/industrial-commercial-plot" element={<IndustrialCommercialPlotPage/>} />
          

        </Routes>
     </BrowserRouter> 
        
          
    </>
  )
}

export default App
