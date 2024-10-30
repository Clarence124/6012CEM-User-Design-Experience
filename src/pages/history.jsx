import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './history.css';
import Edit_Booking from './edit_booking';
import Cancellation from './booking_canceled';

export default function History({ initialBookingData = {} }) {
  const navigate = useNavigate();

  const defaultDate = '2022-12-17T12:15:00Z';
  const defaultTime = '12:15pm';
  
  const [bookingData, setBookingData] = useState({
    date: initialBookingData.date || defaultDate,
    time: initialBookingData.time || defaultTime,
    ...initialBookingData, 
  });
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const closeModal = () => {
    setShowCancelModal(false);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleBookingUpdate = (updatedBooking) => {
    setBookingData(updatedBooking);
    closeEditModal();
  };

  const formattedDate = new Date(bookingData.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='main-container'>
      <span className='history-1'>History</span>
      <div className='line2' />
      <div className='flex-row-ed'>
        <span className='sea-grill-of-merrick-park12'>
          Sea Grill of Merrick Park
        </span>
        <span className='hrs-ago1'>now</span>
      </div>
      <div className='flex-row-bd'>
        <span className='reserved'>Reserved</span>
        <span className='cancel-booking'onClick={() => setShowCancelModal(true)}>Cancel Booking</span>
      </div>

      {showCancelModal && (
        <div className='modal-overlay'>
          <Cancellation closeModal={closeModal} />
        </div>
      )}

      <div className='flex-row-a'>
        <span className='date-time'>
            {formattedDate} | {bookingData.time}
        </span>
        <div className='vector-z' />
        <span className='edit-booking' onClick={() => setShowEditModal(true)}>Edit Booking</span>
      </div>

      {showEditModal && (
        <div className='modal-overlay1'>
          <Edit_Booking 
            bookingData={bookingData} 
            onBookingUpdate={handleBookingUpdate} 
            closeModal={closeEditModal}  
          />
        </div>
      )}

      <div className='flex-row-becd'>
        <div className='vector-3z' />
        <span className='placement_3'>Indoor</span>
        <div className='vector-4z' />
        <span className='guest_name_2'>Bob Smith</span>
        <div className='vector-5z' />
        <span className='guests1'>1 Guest</span>
      </div>
      <div className='line-6' />
      <div className='flex-row-cbe'>
        <span className='span-sea-grill'>Sea Grill of Merrick Park</span>
        <span className='span-days-ago'>2 Days ago</span>
      </div>
      <span className='span-cancelled'>Cancelled</span>
      <span 
        className='span-rebook1'
        onClick={() => navigate('/booking')}
        role='button'
        aria-label='Back to booking page to rebook' 
      >
      Rebook
      </span>
      <div className='flex-row-db'>
        <div className='vector-7' />
        <span className='date-time-8'>17 December 2022 | 12:15 PM</span>
      </div>
      <div className='flex-row-cf'>
        <div className='vector-a' />
        <span className='guest_name'>John Doe</span>
        <div className='vector-b' />
        <span className='guests'>2 Guests</span>
        <div className='vector-c' />
        <span className='placement'>Indoor</span>
      </div>
      <div className='line-d' />
      <div className='flex-row'>
        <span className='sea-grill-merrick-park2'>
          Sea Grill of Merrick Park
        </span>
        <span className='days-ago'>10 Days ago</span>
      </div>
      <span className='completed'>Completed</span>
      <div className='flex-row-feed'>
        <div className='vector-e' />
        <span className='date-time-f'>12 December 2022 | 12:15 PM</span>
      </div>
      <div className='flex-row-a-10'>
        <button className='indoor' />
        <span className='guests-11'>2 Guests</span>
        <button className='bob-smith' />
        <span className='guests_name_11'>Bob Smith</span>
        <div className='vector-12' />
        <span className='placement-1'>Indoor</span>
        <div className='vector-13' />
        <div className='vector-14' />
      </div>
      <div className='line-15' />
      <div className='rectangle-z'>
        <div className='rectangle-16' />
        <div className='flex-row-dc'>
          <div
            className='clarity-home-line-z'
            onClick={() => navigate('/home')}
            role='button'
            aria-label='Home'
          />
          <div 
            className='vector-17' 
            onClick={() => navigate('/notification')}
            role='button'
            aria-label='Notifications'
          />
          <div 
            className='vector-18' 
            onClick={() => navigate('/history')}
            role='button'
            aria-label='History'
          />
          <div 
            className='vector-19' 
            onClick={() => navigate('/more')}
            role='button'
            aria-label='More'
          />
        </div>
        <div className='flex-row-b'>
          <span className='home3'>Home</span>
          <span className='notifications3'>Notifications</span>
          <span className='history3'>History</span>
          <span className='more3'>More</span>
        </div>
      </div>
      <div className='pngkit-black-bar-png' />
    </div>
  );
}
