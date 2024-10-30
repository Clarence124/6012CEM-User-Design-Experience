import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './edit_profile.css';
import { useProfile } from '../ProfileContext';;
import countryData from "../../countryData.json";

export default function EditProfile() {

    const navigate = useNavigate();
    const { profile, updateProfile } = useProfile(); 

    
    const [selectedCountry, setSelectedCountry] = useState({
        flag: 'us', // Default flag for the US
        code: '+1',  // Default code for the US
    });

    const [phoneNumber, setPhoneNumber] = useState(profile.phone || '');
    const [profileImage, setProfileImage] = useState(profile.image || null);
    const [name, setName] = useState(profile.name || '');
    const [email, setEmail] = useState(profile.email || '');

    
    const handleConfirm = () => {
        updateProfile({
          name,
          email,
          phone: `${selectedCountry.code} ${phoneNumber}`,
          image: profileImage,
        });
        navigate('/more');
      };

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

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setProfileImage(imageUrl);
        }
    };

    const triggerImageUpload = () => {
        document.getElementById('profileImageInput').click(); 
    };

    
  return (
    <div className='main-container893'>
      <span className='your-profile-29'>Your Profile</span>
      <div className='line-kla' />
      <span className='full-name-1uw'>Full name</span>
      <div className='rectangle-3y'>
      <input
          className='group-input_hsj1'
          placeholder='Bob Smith'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <span className='phone-number-hwj'>Phone number</span>
      <div className='rectangle-173'>
        <div className='emojione-flag-for-us-outlying-islands-12'>{selectedCountry.flag}</div>
        <select className='group190' onChange={handleCountryChange}>
          {countryData.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <span className='text-59'>{selectedCountry.code}</span>
        <input
          className='group-input_hsj'
          value={phoneNumber}
          onChange={handlePhoneInputChange}
          placeholder='121 587 1321' // Hint for phone number input
        />
      </div>
      <div className='email-address-optional_1'>
        <span className='email-address-h3'>Email Address </span>
        <span className='optional-18'>(Optional)</span>
      </div>
      <div className='rectangle-203'>
      <input
          className='group-input-337'
          placeholder='bob.smith@gmail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className='frame73u'onClick={handleConfirm}> 
        <span className='confirm-hqb'>Confirm</span>
      </button>
      <div className='rectangle-423'>
        <div className='rectangle-533e' />
        <div className='flex-row-3ef'>
          <div 
            className='clarity-home-line-3jq' 
            onClick={() => navigate('/home')}
            role='button'
            aria-label='Home'
          />
          <div 
            className='vector-h3b' 
            onClick={() => navigate('/history')}
            role='button'
            aria-label='History'
          />
          <div 
            className='vector-600' 
            onClick={() => navigate('/notification')}
            role='button'
            aria-label='Notification'
          />
          <div 
            className='vector-700' 
            onClick={() => navigate('/more')}
            role='button'
            aria-label='More'    
          />
        </div>
        <div className='flex-row-dedq'>
          <span className='home-32'>Home</span>
          <span className='notifications-32'>Notifications</span>
          <span className='history-32'>History</span>
          <span className='more-32'>More</span>
        </div>
      </div>
      <div className='pngkit-black-bar-21' />

      {/* Profile Image Section */}
      <div className='ellipse_uqj'>
        {profileImage ? (
          <img src={image} alt='Profile' className='profile-image-preview' />
        ) : (
          <div className='default-placeholder'>Upload Image</div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        type='file'
        id='profileImageInput'
        style={{ display: 'none' }}
        accept='image/*'
        onChange={handleImageChange}
      />

      {/* Image Upload Trigger */}
      <div className='group-8' onClick={triggerImageUpload}>
        <span className='upload-text'>Change Profile Image</span>
      </div>
    </div>
  );
}
