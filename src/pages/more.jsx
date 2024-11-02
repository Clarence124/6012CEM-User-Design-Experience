import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../ProfileContext';
import './more.css';

export default function More() {
  const navigate = useNavigate();
  const { profile } = useProfile();

  return (
    <div className='main-container'>
      <div className='line' />
      <span className='bob-smith1'>{profile.name || 'Bob Smith'}</span>
      <span className='contact-info'>{profile.phone || '+1 121 587 1321'}</span>
      <span className='email'>{profile.email || 'bob.smith@email.com'}</span>
      <button className='frame'>
        <span className='edit-profile'
         onClick={() => navigate('/edit_profile')}
         role='button'
         aria-label='More'
        >Edit Profile 
        </span>
      </button>
      <div className='rectangle1'>
        <div className='rectangle-1v' />
        <div className='flex-row'>
        <div
          className='clarity-home-line2'
          onClick={() => navigate('/')}
          role='button'
          aria-label='Home'
        />
        <div
          className='vector9'
          onClick={() => navigate('/notification')}
          role='button'
          aria-label='Notifications'
        />
        <div 
          className='vector-2'
          onClick={() => navigate('/history')}
          role='button'
          aria-label='History' 
        />
        <div 
          className='vector-3x' 
          onClick={() => navigate('/more')}
          role='button'
          aria-label='More'
        />
        </div>
        <div className='flex-row-fba'>
          <span className='home2'>Home</span>
          <span className='notifications2'>Notifications</span>
          <span className='history2'>History</span>
          <span className='more2'>More</span>
        </div>
      </div>
      <div className='pngkit-black-bar-png' />
      <span className='your-profile'>Your Profile</span>
      <div className='account-logout' />
      <div className='ellipse'>
        {profile.image ? (
          <img src={profile.image} alt="Profile" className="profile-image" />
        ) : (
          <div className="default-placeholder"></div>
        )}
      </div>
      <div className='ellipse-4' />
      <div className='camera' />
    </div>
  );
}
