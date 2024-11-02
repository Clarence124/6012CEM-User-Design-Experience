import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './notification.css';

export default function Notifications() {
  const navigate = useNavigate();
  
  const notifications = [
    { id: 1, text: 'Your Table is Booked', type: 'confirmed', time: 'now', restaurant: 'Sea Grill of Merrick Park' },
    { id: 2, text: 'Your Table is Booked', type: 'confirmed', time: '2 days ago', restaurant: 'Sea Grill of Merrick Park' },
    { id: 3, text: 'Thank you For Visiting, Please Come Again', type: 'completed', time: '3 days ago', restaurant: 'Sea Grill of Merrick Park' },
    { id: 4, text: 'Your booking has been canceled', type: 'canceled', time: '3 days ago', restaurant: 'Sea Grill of Merrick Park' },
    { id: 5, text: 'Your Table is Booked', type: 'confirmed', time: '10 hrs ago', restaurant: 'Sea Grill of Merrick Park' }
  ];

  const [filter, setFilter] = useState('all');
  
  
  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    return notification.type === filter;
  });

  return (
    <div className='main-container'>
      <span className='notifications'>Notifications</span>
      <div className='line-9' />
      <div className='flex-row-d'>
        <button className='rectangle-9a' onClick={() => setFilter('all')}>All</button>
        <button className='rectangle-1n' onClick={() => setFilter('confirmed')}>Confirmed</button>
      </div>
      <div className='flex-row-e'>
        <button className='rectangle-2' onClick={() => setFilter('completed')}>Completed</button>
        <button className='rectangle-5' onClick={() => setFilter('canceled')}>Canceled</button>
      </div>
      
      {filteredNotifications.map(notification => (
        <div key={notification.id}>
          <div className='flex-row-d-6'>
            <span className='sea-grill-of-merrick-park'>{notification.restaurant}</span>
            <span className='hrs-ago-1'>{notification.time}</span>
          </div>
          <div className='flex-row-f'>
            <span className={`notification-text ${notification.type}`}>
              {notification.text}
            </span>
            <span className='view-details'
              onClick={() => navigate('/history')}
              role='button'
              aria-label='history'>
              View Details 
            </span>
          </div>
          <div className='line-7' />
        </div>
      ))}

      <div className='rectangle-13'>
        <div className='flex-row-e-14'>
          <div className='rectangle-15' />
          <div className='line-16' />
        </div> 
        <div className='flex-row-bed'>
          <div
            className='clarity-home-line'
            onClick={() => navigate('/')}
            role='button'
            aria-label='Home'
          />
          <div
            className='vector_4'
            onClick={() => navigate('/notifications')}
            role='button'
            aria-label='Notifications'
          />
          <div 
            className='vector-17'
            onClick={() => navigate('/history')}
            role='button'
            aria-label='History' 
          />
          <div 
            className='vector-18a'
            onClick={() => navigate('/more')}
            role='button'
            aria-label='More' 
          />
        </div>
        <div className='flex-row-da'>
          <span className='home'>Home</span>
          <span className='notifications-19'>Notifications</span>
          <span className='history'>History</span>
          <span className='more'>More</span>
        </div>
      </div>
      <div className='pngkit-black-bar-png' />
    </div>
  );
}
