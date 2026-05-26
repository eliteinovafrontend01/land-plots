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
import IndustrialLandPlotPage from './pages/IndustrialLandPlotPage';
import IndustrialPlotPage from './pages/IndustrialPlotPage';
import FactoryLandPage from './pages/FactoryLandPage';
import ManufacturingUnitPlotPage from './pages/ManufacturingUnitPlotPage';
import LogisticsHubLandPage from './pages/LogisticsHubLandPage';
import WarehousePlotPage from './pages/WarehousePlotPage';
import ColdStorageLandPage from './pages/ColdStorageLandPage';
import SEZLandPage from './pages/SEZLandPage';
import MixedUseLandPlotPage from './pages/MixedUseLandPlotPage';
import ResidentialCommercialPlotPage from './pages/ResidentialCommercialPlotPage';
import CommercialIndustrialLandPage from './pages/CommercialIndustrialLandPage';
import TownshipDevelopmentLandPage from './pages/TownshipDevelopmentLandPage';
import MultiPurposeDevelopmentLandPage from './pages/MultiPurposeDevelopmentLandPage';
import InstitutionalLandPlotPage from './pages/InstitutionalLandPlotPage';
import SchoolCollegeLandPage from './pages/SchoolCollegeLandPage';
import HospitalClinicLandPage from './pages/HospitalClinicLandPage';
import TrainingInstitutePlotPage from './pages/TrainingInstitutePlotPage';
import ReligiousInstitutionLandPage from './pages/ReligiousInstitutionLandPage';


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

          {/* Industrial land  Routes */}

           <Route path="/land-plots/industrial-land-plots" element={<IndustrialLandPlotPage/>} />
           <Route path="/land-plots/industrial-land-plots/industrial-plot" element={<IndustrialPlotPage/>} />
           <Route path="land-plots/industrial-land-plots/factory-land" element={<FactoryLandPage/>} />
           <Route path="/land-plots/industrial-land-plots/manufacturing-unit-plot" element={<ManufacturingUnitPlotPage/>} />
           <Route path="/land-plots/industrial-land-plots/logistics-hub-land" element={<LogisticsHubLandPage/>} />
           <Route path="/land-plots/industrial-land-plots/warehouse-plot" element={<WarehousePlotPage/>} />
           <Route path="/land-plots/industrial-land-plots/cold-storage-land" element={<ColdStorageLandPage/>} />
           <Route path="/land-plots/industrial-land-plots/sez-land" element={<SEZLandPage/>} />

           {/* Mixed-Use land  Routes */}

           <Route path="/land-plots/mixed-use-land-plots" element={<MixedUseLandPlotPage/>} />
           <Route path="/land-plots/mixed-use-land-plots/residential-commercial-plot" element={<ResidentialCommercialPlotPage/>} />
           <Route path="/land-plots/mixed-use-land-plots/commercial-industrial-land" element={<CommercialIndustrialLandPage/>} />
           <Route path="/land-plots/mixed-use-land-plots/township-development-land" element={<TownshipDevelopmentLandPage/>} />
           <Route path="/land-plots/mixed-use-land-plots/multi-purpose-development-land" element={<MultiPurposeDevelopmentLandPage/>} />

           {/* Institutional land  Routes */}

           <Route path="/land-plots/institutional-land-plots" element={<InstitutionalLandPlotPage/>} />
           <Route path="/land-plots/institutional-land-plots/school-college-land" element={<SchoolCollegeLandPage/>} />
           <Route path="/land-plots/institutional-land-plots/hospital-clinic-land" element={<HospitalClinicLandPage/>} />
           <Route path="/land-plots/institutional-land-plots/training-institute-plot" element={<TrainingInstitutePlotPage/>} />
           <Route path="/land-plots/institutional-land-plots/religious-institution-land" element={<ReligiousInstitutionLandPage/>} />

        </Routes>
     </BrowserRouter> 
        
          
    </>
  )
}

export default App
