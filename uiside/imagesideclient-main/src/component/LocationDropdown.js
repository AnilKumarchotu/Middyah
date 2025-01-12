import React, { useEffect, useState } from 'react';
import '../component/css/LocationDropdown.css'; // Import your CSS file for LocationDropdown styling

const LocationDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    
    // You can perform actions based on the selected country here
    console.log('Selected Country:', e.target.value);
  };
useEffect(()=>{
  localStorage.setItem("location",selectedCountry)
},[selectedCountry])
  const countries = [
    'Select a country',
    'India',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    // Add more countries as needed
  ];

  return (
    <div className="location-dropdown-container">
      <label htmlFor="country" className="dropdown-label">
        
      </label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange} className="dropdown-select">
        {countries.map((country, index) => (
          <option key={index} value={index}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationDropdown;
