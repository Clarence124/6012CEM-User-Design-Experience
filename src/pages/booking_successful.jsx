import React from 'react';
import { useNavigate } from 'react-router-dom';
import './booking_successful.css';

export default function Successful_message({ onClose }) {
    const navigate = useNavigate(); 

    const handleContainerClick = () => {
        navigate('/reservation_info'); 
    };

  return (
    <div className='main-container46' onClick={onClose}>
      <div className='rectangle-q10' />
      <div className='frame-193' />
      <div className='table-booked-successfully-2'>
        <span className='table-booked-1'>Table Booked </span>
        <span className='successfully'>Successfully</span>
      </div>
      <div className='line-w12' />
      <span className='bob-smith-7z'>Bob Smith</span>
      <span className='contact-info-08'>+1 6546 654 542</span>
      <span className='email-28'>bob.smith@gmail.com</span>
      <div className='line-2op' />
      <div className='group61'>
        <div className='material-symbols-date-range'>
          <div className='vector-ccv' />
        </div>
        <span className='december-pm'>17 December 2022 | 12:15 PM</span>
      </div>
      <div className='group-363'>
        <div className='person-multiple-21'>
          <div className='vector-41' />
        </div>
        <span className='guests34'>2 Guests</span>
      </div>
      <div className='line-508' />
      <span className='table-reserved-12'>
        Your table is reserved! Since you reserved your table with Dine in
        Florida, your will automatically receive 2% off your bill when you pay
      </span>
    </div>
  );
}
