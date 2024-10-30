import React from 'react';
import { useNavigate } from 'react-router-dom';
import './booking_canceled.css';

export default function Cancellation({ closeModal }) {
    const navigate = useNavigate();

  return (
    <div className='main-container67'>
      <span className='cancel-booking-09'>
        Are You Sure you want to cancel the booking ?
      </span>
      <div className='line39' />
      <span className='no-refund'>Your used points will not be refunded</span>
      <span className='cancel-policy'>Cancellation Policy</span>
      <div className='rectangle-74' />
      <button 
        className='frame-1we'
        onClick={() => closeModal()}
        role='button'
        aria-label='Close'
        >
        Yes
      </button>
      <button 
        className='frame-2i2'
        onClick={() => closeModal()}
        role='button'
        aria-label='Close'
        >
        Go back
      </button>
    </div>
  );
}
