import React, { useState, useRef, useEffect } from 'react';
import { 
  X, ChevronDown, ChevronUp, Building, MapPin, 
  IndianRupee, Ruler, Shield, Clock, CheckCircle, 
  Phone, Users, FileText, RefreshCw, DollarSign, 
  Calendar, Zap, Droplet, Wifi, Lamp, Fence, Truck,
  Home, Building2, Trees, ParkingCircle, Warehouse,
  Store, Sprout, CornerRightUp, Route, Key, Award,
  FileCheck, Landmark, HardDrive, Box, Star, TrendingUp,
  Bus
} from 'lucide-react';

// TrendUp Icon Component
const TrendUpIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 6H23V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Square Icon Component
const SquareIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor"/>
  </svg>
);

// Custom Date Picker Component
const CustomDatePicker = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || '');
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());
  const pickerRef = useRef(null);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(viewYear, viewMonth, day);
    const formattedDate = newDate.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
    onChange(formattedDate);
    setIsOpen(false);
  };

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = d === todayDate && viewMonth === todayMonth && viewYear === todayYear;
      const isSelected = selectedDate === `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      calendarDays.push(
        <button
          key={d}
          type="button"
          onClick={() => handleDateSelect(d)}
          className={`h-8 w-8 rounded-lg text-sm font-medium transition-all duration-200 ${
            isSelected 
              ? 'bg-teal-600 text-white' 
              : isToday 
                ? 'bg-teal-100 text-teal-700 border border-teal-300' 
                : 'text-gray-700 hover:bg-teal-100 hover:text-teal-700'
          }`}
        >
          {d}
        </button>
      );
    }
    return calendarDays;
  };

  return (
    <div className="relative" ref={pickerRef}>
      <label className="text-sm text-teal-800 font-medium block mb-1">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={selectedDate}
          onFocus={() => setIsOpen(true)}
          readOnly
          placeholder="Select Date"
          className="w-full px-2 py-1.5 rounded-lg border-2 border-teal-300 bg-white text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500 cursor-pointer"
        />
        <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-teal-500 pointer-events-none" />
      </div>
      {isOpen && (
        <div className="absolute z-50 mt-1 bg-white rounded-xl shadow-2xl border-2 border-teal-200 overflow-hidden" style={{ width: '280px' }}>
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-2 flex items-center justify-between">
            <button type="button" onClick={prevMonth} className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="text-white font-semibold text-sm">{months[viewMonth]} {viewYear}</span>
            <button type="button" onClick={nextMonth} className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {days.map(day => (
                <div key={day} className="h-8 w-8 flex items-center justify-center text-xs font-semibold text-teal-600">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
            <div className="mt-3 pt-2 border-t border-teal-100 flex justify-between">
              <button type="button" onClick={() => {
                const today = new Date();
                const formattedToday = today.toISOString().split('T')[0];
                setSelectedDate(formattedToday);
                onChange(formattedToday);
                setViewYear(today.getFullYear());
                setViewMonth(today.getMonth());
                setIsOpen(false);
              }} className="text-xs text-teal-600 hover:text-teal-700 font-medium">Today</button>
              <button type="button" onClick={() => {
                setSelectedDate('');
                onChange('');
                setIsOpen(false);
              }} className="text-xs text-teal-400 hover:text-teal-600 font-medium">Clear</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Custom Select Component
const CustomSelect = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={selectRef}>
      <label className="text-sm text-teal-800 font-medium block mb-1">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-2 py-1.5 rounded-lg border-2 border-teal-300 bg-white text-sm text-left flex justify-between items-center focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500 hover:bg-teal-50 transition-all duration-200"
      >
        <span className={selectedOption ? 'text-teal-800 text-xs font-medium' : 'text-gray-400 text-xs'}>
          {selectedOption ? selectedOption.label : placeholder || `Select ${label}`}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-teal-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-xl border-2 border-teal-200 max-h-48 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`w-full px-2 py-1.5 text-xs text-left transition-colors duration-150 ${
                value === opt.value ? 'bg-teal-600 text-white' : 'text-teal-700 hover:bg-teal-500 hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Plot Area Unit Select Component
const PlotAreaUnitSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  
  const units = [
    { value: 'sqft', label: 'Sq.ft' },
    { value: 'cents', label: 'Cents' },
    { value: 'acres', label: 'Acres' },
    { value: 'grounds', label: 'Grounds' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedUnit = units.find(unit => unit.value === value);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 rounded-lg border-2 border-teal-300 bg-white text-sm flex items-center justify-between gap-2 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500 hover:bg-teal-50 transition-all duration-200"
      >
        <span className="text-teal-800 text-xs font-medium">
          {selectedUnit ? selectedUnit.label : 'Select Unit'}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-teal-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-1 right-0 bg-white rounded-lg shadow-xl border-2 border-teal-200 overflow-hidden">
          {units.map((unit) => (
            <button
              key={unit.value}
              type="button"
              onClick={() => {
                onChange(unit.value);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-1.5 text-xs text-left whitespace-nowrap transition-colors duration-150 ${
                value === unit.value ? 'bg-teal-600 text-white' : 'text-teal-700 hover:bg-teal-500 hover:text-white'
              }`}
            >
              {unit.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ResidentialPlotFilter = ({ activeTab = 'Rent', onFilterChange, onClose, onTabChange }) => {
  const [currentTab, setCurrentTab] = useState(activeTab || 'Rent');
  const [activeMainSection, setActiveMainSection] = useState('basic');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(null);
  
  const [filters, setFilters] = useState({
    // Basic Details
    listingType: [],
    city: '', locality: '', landmark: '', pincode: '', layoutName: '',
    nearbyConnectivity: '',
    // Price Details
    minPrice: '', maxPrice: '', priceNegotiable: '', loanRequired: '', maintenanceCharges: '',
    pricePerSqft: '', preferredPricePerSqft: '',
    minRent: '', maxRent: '', securityDeposit: '', maintenanceIncluded: '', rentNegotiable: '',
    minLeaseAmount: '', maxLeaseAmount: '', refundableDeposit: '', leaseDuration: '', leaseNegotiable: '',
    minSellPrice: '', maxSellPrice: '', sellPriceNegotiable: '', propertyTax: '',
    // Plot Details
    plotArea: '', plotAreaUnit: 'sqft', plotLength: '', plotWidth: '', facing: '', 
    cornerPlot: '', roadWidth: '', boundaryWall: '', plotShape: '',
    minRoadWidthRequired: '', plotShapePreference: '',
    // Legal & Approval
    dtcpApproved: '', cmdaApproved: '', reraApproved: '', panchayatApproved: '',
    pattaAvailable: '', encumbranceFree: '', loanEligible: '', titleDeedVerified: '',
    rentalAgreementReady: '', leaseAgreementReady: '',
    dtcpApprovedOnly: '', cmdaApprovedOnly: '', reraApprovedOnly: '',
    pattaRequired: '', encumbranceFreePreferred: '', loanEligiblePlotRequired: '',
    // Utilities
    waterConnection: false, borewellAvailable: false, electricityConnection: false,
    drainageConnection: false, streetLights: false, gatedCommunity: '', securityAvailable: false,
    // Suitable For
    suitableForTypes: [],
    // Availability
    immediateAvailability: '', availableFrom: '', minRentalDuration: '',
    readyToRegister: '', immediatePossession: '', underDevelopmentLayout: '', leaseRenewalOption: '',
    // Nearby Access
    nearbyAccess: [],
    // Contact
    contactOwner: false, contactAgent: false, contactBuilder: false, preferredContactTime: ''
  });

  // Options Arrays
  const facingOptions = [
    { value: 'North', label: 'North' },
    { value: 'South', label: 'South' },
    { value: 'East', label: 'East' },
    { value: 'West', label: 'West' }
  ];

  const plotShapeOptions = [
    { value: 'Regular', label: 'Regular' },
    { value: 'Irregular', label: 'Irregular' }
  ];

  const leaseDurationOptions = [
    { value: '1', label: '1 Year' },
    { value: '3', label: '3 Years' },
    { value: '5', label: '5 Years' },
    { value: '5+', label: '5+ Years' }
  ];

  const rentalDurationOptions = [
    { value: '3', label: '3 Months' },
    { value: '6', label: '6 Months' },
    { value: '11', label: '11 Months' },
    { value: '12', label: '12 Months' },
    { value: '24', label: '24 Months' },
    { value: '36', label: '36 Months' }
  ];

  const contactTimeOptions = [
    { value: 'Morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'Afternoon', label: 'Afternoon (12 PM - 4 PM)' },
    { value: 'Evening', label: 'Evening (4 PM - 7 PM)' },
    { value: 'Any', label: 'Any Time' }
  ];

  const suitableForOptions = {
    rent: [
      'Temporary Residential Use', 'Parking Purpose', 'Storage Purpose',
      'Container House Setup', 'Garden / Nursery', 'Small Commercial Temporary Setup'
    ],
    buy: [
      'Individual House Construction', 'Villa Construction', 'Duplex House',
      'Investment Purpose', 'Rental Property Development', 'Small Residential Project'
    ]
  };

  const nearbyOptions = [
    'Bus Stop / Metro', 'School / College', 'Hospital',
    'Shopping Area', 'Highway Access', 'Residential Neighborhood'
  ];

  // mainSections array
  const mainSections = [
    { id: 'basic', label: '📍 Basic & Location', icon: <Home className="w-4 h-4" /> },
    { id: 'price', label: '💰 Price Details', icon: <IndianRupee className="w-4 h-4" /> },
    { id: 'plot', label: '📐 Plot Details', icon: <SquareIcon className="w-4 h-4" /> },
    { id: 'legal', label: '⚖️ Legal & Approval', icon: <Shield className="w-4 h-4" /> },
    { id: 'utilities', label: '💡 Utilities', icon: <Zap className="w-4 h-4" /> },
    { id: 'suitable', label: '🏗️ Suitable For', icon: <Building className="w-4 h-4" /> },
    { id: 'availability', label: '📅 Availability', icon: <Calendar className="w-4 h-4" /> },
    { id: 'nearby', label: '🚌 Nearby Access', icon: <Bus className="w-4 h-4" /> },
    { id: 'contact', label: '📞 Contact', icon: <Phone className="w-4 h-4" /> }
  ];

  const tabs = [
    { id: 'Rent', label: 'Rent', icon: <IndianRupee className="w-3.5 h-3.5" /> },
    { id: 'Buy', label: 'Buy', icon: <DollarSign className="w-3.5 h-3.5" /> },
    { id: 'Sell', label: 'Sell', icon: <TrendUpIcon className="w-3.5 h-3.5" /> },
    { id: 'Lease', label: 'Lease', icon: <FileText className="w-3.5 h-3.5" /> }
  ];

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
    if (onTabChange) onTabChange(tabId);
  };

  const handleInputChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field, checked) => {
    setFilters(prev => ({ ...prev, [field]: checked }));
  };

  const handleRadioChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const applyFilters = () => {
    const filtersToSend = { ...filters, purpose: currentTab, propertyType: 'Residential Plot' };
    if (onFilterChange) onFilterChange(filtersToSend);
    if (onClose) onClose();
  };

  const clearAllFilters = () => {
    setFilters({
      listingType: [],
      city: '', locality: '', landmark: '', pincode: '', layoutName: '',
      nearbyConnectivity: '',
      minPrice: '', maxPrice: '', priceNegotiable: '', loanRequired: '', maintenanceCharges: '',
      pricePerSqft: '', preferredPricePerSqft: '',
      minRent: '', maxRent: '', securityDeposit: '', maintenanceIncluded: '', rentNegotiable: '',
      minLeaseAmount: '', maxLeaseAmount: '', refundableDeposit: '', leaseDuration: '', leaseNegotiable: '',
      minSellPrice: '', maxSellPrice: '', sellPriceNegotiable: '', propertyTax: '',
      plotArea: '', plotAreaUnit: 'sqft', plotLength: '', plotWidth: '', facing: '', 
      cornerPlot: '', roadWidth: '', boundaryWall: '', plotShape: '',
      minRoadWidthRequired: '', plotShapePreference: '',
      dtcpApproved: '', cmdaApproved: '', reraApproved: '', panchayatApproved: '',
      pattaAvailable: '', encumbranceFree: '', loanEligible: '', titleDeedVerified: '',
      rentalAgreementReady: '', leaseAgreementReady: '',
      dtcpApprovedOnly: '', cmdaApprovedOnly: '', reraApprovedOnly: '',
      pattaRequired: '', encumbranceFreePreferred: '', loanEligiblePlotRequired: '',
      waterConnection: false, borewellAvailable: false, electricityConnection: false,
      drainageConnection: false, streetLights: false, gatedCommunity: '', securityAvailable: false,
      suitableForTypes: [],
      immediateAvailability: '', availableFrom: '', minRentalDuration: '',
      readyToRegister: '', immediatePossession: '', underDevelopmentLayout: '', leaseRenewalOption: '',
      nearbyAccess: [],
      contactOwner: false, contactAgent: false, contactBuilder: false, preferredContactTime: ''
    });
  };

  // Section Navigation Component
  const SectionNav = () => (
    <div className="flex flex-wrap gap-1 p-2 bg-teal-50/80 rounded-xl sticky top-0 z-20 border border-teal-200">
      {mainSections.map((section) => (
        <button
          key={section.id}
          onClick={() => setActiveMainSection(section.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
            activeMainSection === section.id
              ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md'
              : 'text-teal-700 hover:bg-teal-100'
          }`}
        >
          {section.icon}
          <span className="hidden sm:inline">{section.label}</span>
        </button>
      ))}
    </div>
  );

  // Render Basic & Location Section
  const renderBasicSection = () => (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
        <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Home className="w-4 h-4" /> Basic Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-teal-800 font-medium block mb-1">Property Type</label>
            <input type="text" value="Residential Plot" disabled className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 bg-gray-50 text-sm text-gray-600" />
          </div>
          <div>
            <label className="text-sm text-teal-800 font-medium block mb-1">Purpose</label>
            <input type="text" value={currentTab} disabled className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 bg-gray-50 text-sm text-gray-600" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-teal-800 font-medium block mb-1">Listing Type</label>
            <div className="flex gap-4">
              {['Owner', 'Agent', 'Builder'].map(type => (
                <label key={type} className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" checked={filters.listingType.includes(type)} onChange={(e) => {
                    const newList = e.target.checked ? [...filters.listingType, type] : filters.listingType.filter(t => t !== type);
                    handleInputChange('listingType', newList);
                  }} className="w-4 h-4 rounded border-2 border-teal-300 checked:bg-teal-600 checked:border-teal-600 accent-teal-600" />
                  <span className="text-sm text-teal-700 group-hover:text-teal-600">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
        <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><MapPin className="w-4 h-4" /> Location Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" placeholder="City" className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm focus:outline-none focus:border-teal-500" value={filters.city} onChange={(e) => handleInputChange('city', e.target.value)} />
          <input type="text" placeholder="Area / Locality" className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm focus:outline-none focus:border-teal-500" value={filters.locality} onChange={(e) => handleInputChange('locality', e.target.value)} />
          <input type="text" placeholder="Landmark" className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm focus:outline-none focus:border-teal-500" value={filters.landmark} onChange={(e) => handleInputChange('landmark', e.target.value)} />
          <input type="text" placeholder="PIN Code" className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm focus:outline-none focus:border-teal-500" value={filters.pincode} onChange={(e) => handleInputChange('pincode', e.target.value)} />
          <input type="text" placeholder="Layout Name" className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm focus:outline-none focus:border-teal-500" value={filters.layoutName} onChange={(e) => handleInputChange('layoutName', e.target.value)} />
          <input type="text" placeholder="Nearby Connectivity" className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm focus:outline-none focus:border-teal-500" value={filters.nearbyConnectivity} onChange={(e) => handleInputChange('nearbyConnectivity', e.target.value)} />
        </div>
      </div>
    </div>
  );

  // Render Price Section
  const renderPriceSection = () => {
    if (currentTab === 'Rent') {
      return (
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><IndianRupee className="w-4 h-4" /> Rent Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="grid grid-cols-2 gap-2">
              <input type="number" placeholder="Min Rent ₹" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.minRent} onChange={(e) => handleInputChange('minRent', e.target.value)} />
              <input type="number" placeholder="Max Rent ₹" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.maxRent} onChange={(e) => handleInputChange('maxRent', e.target.value)} />
            </div>
            <input type="number" placeholder="Security Deposit" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.securityDeposit} onChange={(e) => handleInputChange('securityDeposit', e.target.value)} />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2"><input type="radio" name="maintenanceIncluded" value="Yes" checked={filters.maintenanceIncluded === 'Yes'} onChange={(e) => handleRadioChange('maintenanceIncluded', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Maintenance Included</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="rentNegotiable" value="Yes" checked={filters.rentNegotiable === 'Yes'} onChange={(e) => handleRadioChange('rentNegotiable', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Rent Negotiable</span></label>
            </div>
          </div>
        </div>
      );
    } else if (currentTab === 'Buy') {
      return (
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><DollarSign className="w-4 h-4" /> Budget Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="grid grid-cols-2 gap-2">
              <input type="number" placeholder="Min Budget ₹" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.minPrice} onChange={(e) => handleInputChange('minPrice', e.target.value)} />
              <input type="number" placeholder="Max Budget ₹" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.maxPrice} onChange={(e) => handleInputChange('maxPrice', e.target.value)} />
            </div>
            <input type="number" placeholder="Preferred Price Per Sq.ft" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.preferredPricePerSqft} onChange={(e) => handleInputChange('preferredPricePerSqft', e.target.value)} />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2"><input type="radio" name="loanRequired" value="Yes" checked={filters.loanRequired === 'Yes'} onChange={(e) => handleRadioChange('loanRequired', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Loan Required</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="priceNegotiable" value="Yes" checked={filters.priceNegotiable === 'Yes'} onChange={(e) => handleRadioChange('priceNegotiable', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Price Negotiable</span></label>
            </div>
          </div>
        </div>
      );
    } else if (currentTab === 'Sell') {
      return (
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Price Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="grid grid-cols-2 gap-2">
              <input type="number" placeholder="Min Price ₹" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.minSellPrice} onChange={(e) => handleInputChange('minSellPrice', e.target.value)} />
              <input type="number" placeholder="Max Price ₹" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.maxSellPrice} onChange={(e) => handleInputChange('maxSellPrice', e.target.value)} />
            </div>
            <input type="number" placeholder="Price Per Sq.ft" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.pricePerSqft} onChange={(e) => handleInputChange('pricePerSqft', e.target.value)} />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2"><input type="radio" name="sellPriceNegotiable" value="Yes" checked={filters.sellPriceNegotiable === 'Yes'} onChange={(e) => handleRadioChange('sellPriceNegotiable', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Price Negotiable</span></label>
            </div>
            <input type="text" placeholder="Maintenance Charges" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.maintenanceCharges} onChange={(e) => handleInputChange('maintenanceCharges', e.target.value)} />
            <input type="text" placeholder="Property Tax" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.propertyTax} onChange={(e) => handleInputChange('propertyTax', e.target.value)} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><FileText className="w-4 h-4" /> Lease Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="grid grid-cols-2 gap-2">
              <input type="number" placeholder="Min Lease ₹" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.minLeaseAmount} onChange={(e) => handleInputChange('minLeaseAmount', e.target.value)} />
              <input type="number" placeholder="Max Lease ₹" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.maxLeaseAmount} onChange={(e) => handleInputChange('maxLeaseAmount', e.target.value)} />
            </div>
            <input type="number" placeholder="Refundable Deposit" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.refundableDeposit} onChange={(e) => handleInputChange('refundableDeposit', e.target.value)} />
            <CustomSelect label="Lease Duration" options={leaseDurationOptions} value={filters.leaseDuration} onChange={(val) => handleInputChange('leaseDuration', val)} placeholder="Select Duration" />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2"><input type="radio" name="maintenanceIncludedLease" value="Yes" checked={filters.maintenanceIncluded === 'Yes'} onChange={(e) => handleRadioChange('maintenanceIncluded', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Maintenance Included</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="leaseNegotiable" value="Yes" checked={filters.leaseNegotiable === 'Yes'} onChange={(e) => handleRadioChange('leaseNegotiable', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Lease Negotiable</span></label>
            </div>
          </div>
        </div>
      );
    }
  };

  // Render Plot Details Section
  const renderPlotSection = () => (
    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
      <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><SquareIcon className="w-4 h-4" /> Plot Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex gap-2 items-center">
          <input type="text" placeholder="Plot Area" className="flex-1 px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.plotArea} onChange={(e) => handleInputChange('plotArea', e.target.value)} />
          <PlotAreaUnitSelect value={filters.plotAreaUnit} onChange={(val) => handleInputChange('plotAreaUnit', val)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input type="text" placeholder="Length (ft)" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.plotLength} onChange={(e) => handleInputChange('plotLength', e.target.value)} />
          <input type="text" placeholder="Width (ft)" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.plotWidth} onChange={(e) => handleInputChange('plotWidth', e.target.value)} />
        </div>
        <CustomSelect label="Facing" options={facingOptions} value={filters.facing} onChange={(val) => handleInputChange('facing', val)} placeholder="Select Facing" />
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2"><input type="radio" name="cornerPlot" value="Yes" checked={filters.cornerPlot === 'Yes'} onChange={(e) => handleRadioChange('cornerPlot', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Corner Plot</span></label>
          <label className="flex items-center gap-2"><input type="radio" name="boundaryWall" value="Yes" checked={filters.boundaryWall === 'Yes'} onChange={(e) => handleRadioChange('boundaryWall', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Boundary Wall</span></label>
        </div>
        <input type="text" placeholder="Road Width (ft)" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.roadWidth} onChange={(e) => handleInputChange('roadWidth', e.target.value)} />
        <CustomSelect label="Plot Shape" options={plotShapeOptions} value={filters.plotShape} onChange={(val) => handleInputChange('plotShape', val)} placeholder="Select Shape" />
        {currentTab === 'Buy' && (
          <>
            <input type="text" placeholder="Minimum Road Width Required (ft)" className="px-3 py-2 rounded-lg border-2 border-teal-300 bg-white text-sm" value={filters.minRoadWidthRequired} onChange={(e) => handleInputChange('minRoadWidthRequired', e.target.value)} />
            <CustomSelect label="Plot Shape Preference" options={plotShapeOptions} value={filters.plotShapePreference} onChange={(val) => handleInputChange('plotShapePreference', val)} placeholder="Shape Preference" />
          </>
        )}
      </div>
    </div>
  );

  // Render Legal & Approval Section
  const renderLegalSection = () => (
    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
      <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> Legal & Approval Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {(currentTab === 'Rent' || currentTab === 'Lease') ? (
          <>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="dtcpApproved" value="Yes" checked={filters.dtcpApproved === 'Yes'} onChange={(e) => handleRadioChange('dtcpApproved', e.target.value)} className="accent-teal-600" /> <span className="text-sm">DTCP Approved</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="cmdaApproved" value="Yes" checked={filters.cmdaApproved === 'Yes'} onChange={(e) => handleRadioChange('cmdaApproved', e.target.value)} className="accent-teal-600" /> <span className="text-sm">CMDA Approved</span></label>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="reraApproved" value="Yes" checked={filters.reraApproved === 'Yes'} onChange={(e) => handleRadioChange('reraApproved', e.target.value)} className="accent-teal-600" /> <span className="text-sm">RERA Approved</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="panchayatApproved" value="Yes" checked={filters.panchayatApproved === 'Yes'} onChange={(e) => handleRadioChange('panchayatApproved', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Panchayat Approved</span></label>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="pattaAvailable" value="Yes" checked={filters.pattaAvailable === 'Yes'} onChange={(e) => handleRadioChange('pattaAvailable', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Patta Available</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="encumbranceFree" value="Yes" checked={filters.encumbranceFree === 'Yes'} onChange={(e) => handleRadioChange('encumbranceFree', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Encumbrance Free</span></label>
            </div>
            {currentTab === 'Rent' && (
              <div>
                <label className="flex items-center gap-2"><input type="radio" name="rentalAgreementReady" value="Yes" checked={filters.rentalAgreementReady === 'Yes'} onChange={(e) => handleRadioChange('rentalAgreementReady', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Rental Agreement Ready</span></label>
              </div>
            )}
            {currentTab === 'Lease' && (
              <div>
                <label className="flex items-center gap-2"><input type="radio" name="leaseAgreementReady" value="Yes" checked={filters.leaseAgreementReady === 'Yes'} onChange={(e) => handleRadioChange('leaseAgreementReady', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Lease Agreement Ready</span></label>
              </div>
            )}
          </>
        ) : currentTab === 'Sell' ? (
          <>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="dtcpApproved" value="Yes" checked={filters.dtcpApproved === 'Yes'} onChange={(e) => handleRadioChange('dtcpApproved', e.target.value)} className="accent-teal-600" /> <span className="text-sm">DTCP Approved</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="cmdaApproved" value="Yes" checked={filters.cmdaApproved === 'Yes'} onChange={(e) => handleRadioChange('cmdaApproved', e.target.value)} className="accent-teal-600" /> <span className="text-sm">CMDA Approved</span></label>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="reraApproved" value="Yes" checked={filters.reraApproved === 'Yes'} onChange={(e) => handleRadioChange('reraApproved', e.target.value)} className="accent-teal-600" /> <span className="text-sm">RERA Approved</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="panchayatApproved" value="Yes" checked={filters.panchayatApproved === 'Yes'} onChange={(e) => handleRadioChange('panchayatApproved', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Panchayat Approved</span></label>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="pattaAvailable" value="Yes" checked={filters.pattaAvailable === 'Yes'} onChange={(e) => handleRadioChange('pattaAvailable', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Patta Available</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="encumbranceFree" value="Yes" checked={filters.encumbranceFree === 'Yes'} onChange={(e) => handleRadioChange('encumbranceFree', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Encumbrance Free</span></label>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="loanEligible" value="Yes" checked={filters.loanEligible === 'Yes'} onChange={(e) => handleRadioChange('loanEligible', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Loan Eligible</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="titleDeedVerified" value="Yes" checked={filters.titleDeedVerified === 'Yes'} onChange={(e) => handleRadioChange('titleDeedVerified', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Title Deed Verified</span></label>
            </div>
          </>
        ) : currentTab === 'Buy' ? (
          <>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="dtcpApprovedOnly" value="Yes" checked={filters.dtcpApprovedOnly === 'Yes'} onChange={(e) => handleRadioChange('dtcpApprovedOnly', e.target.value)} className="accent-teal-600" /> <span className="text-sm">DTCP Approved Only</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="cmdaApprovedOnly" value="Yes" checked={filters.cmdaApprovedOnly === 'Yes'} onChange={(e) => handleRadioChange('cmdaApprovedOnly', e.target.value)} className="accent-teal-600" /> <span className="text-sm">CMDA Approved Only</span></label>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="reraApprovedOnly" value="Yes" checked={filters.reraApprovedOnly === 'Yes'} onChange={(e) => handleRadioChange('reraApprovedOnly', e.target.value)} className="accent-teal-600" /> <span className="text-sm">RERA Approved Only</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="panchayatApproved" value="Yes" checked={filters.panchayatApproved === 'Yes'} onChange={(e) => handleRadioChange('panchayatApproved', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Panchayat Approved</span></label>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="pattaRequired" value="Yes" checked={filters.pattaRequired === 'Yes'} onChange={(e) => handleRadioChange('pattaRequired', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Patta Required</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="encumbranceFreePreferred" value="Yes" checked={filters.encumbranceFreePreferred === 'Yes'} onChange={(e) => handleRadioChange('encumbranceFreePreferred', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Encumbrance Free Preferred</span></label>
            </div>
            <div>
              <label className="flex items-center gap-2"><input type="radio" name="loanEligiblePlotRequired" value="Yes" checked={filters.loanEligiblePlotRequired === 'Yes'} onChange={(e) => handleRadioChange('loanEligiblePlotRequired', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Loan Eligible Plot Required</span></label>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );

  // Render Utilities Section
  const renderUtilitiesSection = () => (
    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
      <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Zap className="w-4 h-4" /> Utilities & Amenities</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <label className="flex items-center gap-2"><input type="checkbox" checked={filters.waterConnection} onChange={(e) => handleCheckboxChange('waterConnection', e.target.checked)} className="accent-teal-600" /> <span className="text-sm">Water Connection</span></label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={filters.borewellAvailable} onChange={(e) => handleCheckboxChange('borewellAvailable', e.target.checked)} className="accent-teal-600" /> <span className="text-sm">Borewell</span></label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={filters.electricityConnection} onChange={(e) => handleCheckboxChange('electricityConnection', e.target.checked)} className="accent-teal-600" /> <span className="text-sm">Electricity</span></label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={filters.drainageConnection} onChange={(e) => handleCheckboxChange('drainageConnection', e.target.checked)} className="accent-teal-600" /> <span className="text-sm">Drainage</span></label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={filters.streetLights} onChange={(e) => handleCheckboxChange('streetLights', e.target.checked)} className="accent-teal-600" /> <span className="text-sm">Street Lights</span></label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={filters.securityAvailable} onChange={(e) => handleCheckboxChange('securityAvailable', e.target.checked)} className="accent-teal-600" /> <span className="text-sm">Security</span></label>
      </div>
      <div className="mt-3">
        <label className="text-sm text-teal-800 font-medium block mb-1">Gated Community</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2"><input type="radio" name="gatedCommunity" value="Yes" checked={filters.gatedCommunity === 'Yes'} onChange={(e) => handleRadioChange('gatedCommunity', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Yes</span></label>
          <label className="flex items-center gap-2"><input type="radio" name="gatedCommunity" value="No" checked={filters.gatedCommunity === 'No'} onChange={(e) => handleRadioChange('gatedCommunity', e.target.value)} className="accent-teal-600" /> <span className="text-sm">No</span></label>
        </div>
      </div>
    </div>
  );

  // Render Suitable For Section
  const renderSuitableSection = () => {
    const options = (currentTab === 'Rent' || currentTab === 'Lease') ? suitableForOptions.rent : suitableForOptions.buy;
    return (
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
        <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Building className="w-4 h-4" /> Suitable For</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {options.map(option => (
            <label key={option} className="flex items-center gap-2">
              <input type="checkbox" checked={filters.suitableForTypes.includes(option)} onChange={() => handleArrayToggle('suitableForTypes', option)} className="accent-teal-600" />
              <span className="text-sm text-teal-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  // Render Availability Section
  const renderAvailabilitySection = () => {
    if (currentTab === 'Rent') {
      return (
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Calendar className="w-4 h-4" /> Availability</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2"><input type="radio" name="immediateAvailability" value="Yes" checked={filters.immediateAvailability === 'Yes'} onChange={(e) => handleRadioChange('immediateAvailability', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Immediate Availability</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="immediateAvailability" value="No" checked={filters.immediateAvailability === 'No'} onChange={(e) => handleRadioChange('immediateAvailability', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Available From</span></label>
            </div>
            {filters.immediateAvailability === 'No' && (
              <CustomDatePicker label="Available From Date" value={filters.availableFrom} onChange={(val) => handleInputChange('availableFrom', val)} />
            )}
            <CustomSelect label="Minimum Rental Duration" options={rentalDurationOptions} value={filters.minRentalDuration} onChange={(val) => handleInputChange('minRentalDuration', val)} placeholder="Select Duration" />
          </div>
        </div>
      );
    } else if (currentTab === 'Lease') {
      return (
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Calendar className="w-4 h-4" /> Availability</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2"><input type="radio" name="immediateAvailability" value="Yes" checked={filters.immediateAvailability === 'Yes'} onChange={(e) => handleRadioChange('immediateAvailability', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Immediate Availability</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="immediateAvailability" value="No" checked={filters.immediateAvailability === 'No'} onChange={(e) => handleRadioChange('immediateAvailability', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Available From</span></label>
            </div>
            {filters.immediateAvailability === 'No' && (
              <CustomDatePicker label="Available From Date" value={filters.availableFrom} onChange={(val) => handleInputChange('availableFrom', val)} />
            )}
            <div>
              <label className="flex items-center gap-2"><input type="radio" name="leaseRenewalOption" value="Yes" checked={filters.leaseRenewalOption === 'Yes'} onChange={(e) => handleRadioChange('leaseRenewalOption', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Lease Renewal Option Available</span></label>
            </div>
          </div>
        </div>
      );
    } else if (currentTab === 'Sell') {
      return (
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Calendar className="w-4 h-4" /> Availability</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="readyToRegister" value="Yes" checked={filters.readyToRegister === 'Yes'} onChange={(e) => handleRadioChange('readyToRegister', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Ready to Register</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="immediatePossession" value="Yes" checked={filters.immediatePossession === 'Yes'} onChange={(e) => handleRadioChange('immediatePossession', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Immediate Possession</span></label>
            </div>
            <div>
              <label className="flex items-center gap-2"><input type="radio" name="underDevelopmentLayout" value="Yes" checked={filters.underDevelopmentLayout === 'Yes'} onChange={(e) => handleRadioChange('underDevelopmentLayout', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Under Development Layout</span></label>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Calendar className="w-4 h-4" /> Availability</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center gap-2"><input type="radio" name="readyToRegister" value="Yes" checked={filters.readyToRegister === 'Yes'} onChange={(e) => handleRadioChange('readyToRegister', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Ready to Register</span></label>
              <label className="flex items-center gap-2"><input type="radio" name="immediatePossession" value="Yes" checked={filters.immediatePossession === 'Yes'} onChange={(e) => handleRadioChange('immediatePossession', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Immediate Possession</span></label>
            </div>
            <div>
              <label className="flex items-center gap-2"><input type="radio" name="underDevelopmentLayout" value="Yes" checked={filters.underDevelopmentLayout === 'Yes'} onChange={(e) => handleRadioChange('underDevelopmentLayout', e.target.value)} className="accent-teal-600" /> <span className="text-sm">Under Development Layout Acceptable</span></label>
            </div>
          </div>
        </div>
      );
    }
  };

  // Render Nearby Access Section
  const renderNearbySection = () => (
    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
      <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Bus className="w-4 h-4" /> Nearby Access</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {nearbyOptions.map(option => (
          <label key={option} className="flex items-center gap-2">
            <input type="checkbox" checked={filters.nearbyAccess.includes(option)} onChange={() => handleArrayToggle('nearbyAccess', option)} className="accent-teal-600" />
            <span className="text-sm text-teal-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  // Render Contact Section
  const renderContactSection = () => (
    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
      <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2"><Phone className="w-4 h-4" /> Contact Preference</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-4 flex-wrap">
          <label className="flex items-center gap-2"><input type="checkbox" checked={filters.contactOwner} onChange={(e) => handleCheckboxChange('contactOwner', e.target.checked)} className="accent-teal-600" /> <span className="text-sm">Contact Owner</span></label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={filters.contactAgent} onChange={(e) => handleCheckboxChange('contactAgent', e.target.checked)} className="accent-teal-600" /> <span className="text-sm">Contact Agent</span></label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={filters.contactBuilder} onChange={(e) => handleCheckboxChange('contactBuilder', e.target.checked)} className="accent-teal-600" /> <span className="text-sm">Contact Builder</span></label>
        </div>
        <CustomSelect label="Preferred Contact Time" options={contactTimeOptions} value={filters.preferredContactTime} onChange={(val) => handleInputChange('preferredContactTime', val)} placeholder="Select Time" />
      </div>
    </div>
  );

  // Main Render
  return (
    <div className="bg-white rounded-2xl shadow-2xl border-2 border-teal-100 overflow-hidden flex flex-col" style={{ maxHeight: '90vh' }}>
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b-2 border-teal-100">
        <div className="flex justify-between items-center px-4 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-white/20 rounded-lg">
              <style>{`
                @keyframes slowRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .slow-rotate { animation: slowRotate 4s linear infinite; }
                @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
                .animate-bounce { animation: bounce 0.6s ease-in-out infinite; }
              `}</style>
              <SquareIcon className="w-5 h-5 text-white slow-rotate" />
            </div>
            <h3 className="text-white font-semibold text-sm md:text-base">Filter Residential Plot</h3>
          </div>
          {onClose && <button onClick={onClose} className="text-white/80 hover:text-white transition-all" type="button"><X className="w-4 h-4" /></button>}
        </div>
        
        {/* Tab Switcher */}
        <div className="flex border-b-2 border-teal-100 bg-teal-50/50">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => handleTabClick(tab.id)} type="button" className={`flex-1 py-2 text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${currentTab === tab.id ? 'text-teal-700 border-b-2 border-teal-600 bg-white shadow-sm' : 'text-teal-500 hover:text-teal-700 hover:bg-teal-50'}`}>
              {tab.icon}{tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content with Section Navigation */}
      <div className="flex-1 overflow-y-auto">
        {/* Section Navigation */}
        <SectionNav />
        
        {/* Active Section Content */}
        <div className="p-4 space-y-4">
          {activeMainSection === 'basic' && renderBasicSection()}
          {activeMainSection === 'price' && renderPriceSection()}
          {activeMainSection === 'plot' && renderPlotSection()}
          {activeMainSection === 'legal' && renderLegalSection()}
          {activeMainSection === 'utilities' && renderUtilitiesSection()}
          {activeMainSection === 'suitable' && renderSuitableSection()}
          {activeMainSection === 'availability' && renderAvailabilitySection()}
          {activeMainSection === 'nearby' && renderNearbySection()}
          {activeMainSection === 'contact' && renderContactSection()}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="sticky bottom-0 p-3 border-t-2 border-teal-100 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="flex gap-3">
          <button onClick={clearAllFilters} className="flex-1 px-4 py-2 rounded-xl border-2 border-teal-300 text-teal-700 font-semibold text-sm hover:bg-teal-100 transition-all flex items-center justify-center gap-2" type="button">
            <RefreshCw className="w-4 h-4" /> Reset All
          </button>
          <button onClick={applyFilters} className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2" type="button">
            <CheckCircle className="w-4 h-4" /> Apply Filters
          </button>
        </div>
      </div>

      <style jsx>{`
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: #E6FFFA; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #00695C, #26A69A); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default ResidentialPlotFilter;