import React, { useState } from 'react';
import './reservation_info.css';
import Successful_message from './booking_successful';
import countryData from "../../countryData.json";

export default function Reservation({ selectedDate, selectedOrangeSlot, selectedPeople, showTimeSlots, onClose }) {
    
    const [selectedCountry, setSelectedCountry] = useState({
        flag: '🇺🇸', // Default flag for the US
        code: '+1',  // Default code for the US
    });

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryChange = (event) => {
        const selectedCode = event.target.value;
        const country = countryData.find(country => country.code === selectedCode);
        if (country) {
          setSelectedCountry({
            flag: country.flag,
            code: country.code,
          });
        }
    };

    const handlePhoneInputChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 11); // Allow only numbers, limit to 11 digits
        const formattedPhone = input.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3'); // Format as 800 2738 9700
        setPhoneNumber(formattedPhone);
    };

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleShowSuccess = () => {
      setShowSuccessModal(true);
    };
  
    const handleCloseSuccess = () => {
      setShowSuccessModal(false);
    };

  return (
    <div className='main-container30'>
      <div className='frame-00'>
        <div 
          className='mdi-chevron-down-99' 
          onClick={onClose}
        />
        <span className='go-back'>Go Back</span>
      </div>
      <div className='line-mm' />
      <span className='full-name-88'>Full name</span>
      <div className='rectangle-pp'>
        <input className='group-input-u89' placeholder='Bob Smith'  />
      </div>
      <span className='phone-number-yy'>Phone number</span>
      <div className='rectangle-19'>
        <div className='flag-for-us-outlying-islands'>{selectedCountry.flag}</div>
        <select className='div-group' onChange={handleCountryChange}>
          {countryData.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <span className='text-5'>{selectedCountry.code}</span>
        <input
          className='group-input-u8'
          value={phoneNumber}
          onChange={handlePhoneInputChange}
          placeholder='800 2738 9700' // Hint for phone number input
        />
      </div>
      <div className='div-email-address'>
        <span className='span-email-address'>Email Address </span>
        <span className='span-optional'>(Optional)</span>
      </div>
      <div className='div-rectangle'>
        <input className='group-input-2' placeholder='Bob.smith@gmail.com' />
      </div>
      <div className='line-31' />
      <button className='frame-4'onClick={handleShowSuccess}>
        <span className='reserve-now'>Reserve Now</span>
      </button>

      {showSuccessModal && (
        <div className='modal12'>
          <Successful_message onClose={handleCloseSuccess} />
        </div>
      )}

      <span className='date-time-l0q'>{selectedDate?.toLocaleDateString()} | {selectedOrangeSlot}</span>
      <div className='vector-qq' />
      <span className='guest-lk'>{selectedPeople} Guest{selectedPeople > 1 ? 's' : ''}</span>
      <div className='vector-58' />
      <span className='indoor-asf'>{showTimeSlots === 'In' ? 'Indoor' : 'Outdoor'}</span>
      <div className='vector-66' />
    </div>
  );
}
