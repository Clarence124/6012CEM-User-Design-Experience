import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import './booking.css';
import Menu from './menu';
import Reservation from './reservation_info';
import image1 from '../assets/images/Merrick_park_1.jpg'; 
import image2 from '../assets/images/Merrick_park_2.jpg';
import image3 from '../assets/images/Merrick_park_3.jpg';


export default function Booking() {
  const navigate = useNavigate();

  const [showMenuModal, setShowMenuModal] = useState(false);

  const handleShowMenu = () => {
    setShowMenuModal(!showMenuModal);
  };

  const [showReservationModal, setShowReservationModal] = useState(false);

  const handleShowReservation = (slot) => {
    setSelectedTimeSlot(slot); 
    setShowReservationModal(true); 
  };

  const handleCloseReservation = () => {
    setShowReservationModal(false);
    setSelectedTimeSlot('');
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  const [isTimePickerOpen, setTimePickerOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  
  const getTimeString = () => selectedHour && selectedMinute && selectedSession 
  ? `${selectedHour}:${selectedMinute} ${selectedSession}`
  : 'Time';
  
  const [errorMessage, setErrorMessage] = useState('');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3]; 

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const [people, setPeople] = useState(0);

  const [inOutSelection, setInOutSelection] = useState('');
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showFindSlots, setShowFindSlots] = useState(true);
  const [selectedOrangeSlot, setSelectedOrangeSlot] = useState(null);
  const timeSlots = ["11:15am", "11:30am", "11:45am", "12:00pm", "12:15pm", "12:30pm", "12:45pm", "13:00pm"];

  const [isExpanded, setIsExpanded] = useState(false);
  const restaurantDescription = `Seagrill Restaurant and bar has one mission: 
    to provide guests with a fine and fresh seafood experience. Featuring seasonal 
    and sustainable seafood that is flown in fresh daily, our chef-driven menu proves 
    that no matter when you’re dining, seafood can be truly exceptional.`;

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const handleFindSlots = () => {
    console.log("Selected Date:", selectedDate);
    console.log("Selected Hour:", selectedHour);
    console.log("Selected Minute:", selectedMinute);
    console.log("Selected Session:", selectedSession);
    console.log("People:", people);
    
    if (!selectedDate || !selectedHour || !selectedMinute || !selectedSession || people === 0) {
      setErrorMessage('Please select Date, Time, and People');
    } else {
      setErrorMessage('');
      setShowTimeSlots(true);
      setShowFindSlots(false); 
    }
  };

  const handleInOutChange = (e) => {
    setInOutSelection(e.target.value);
    setShowFindSlots(false);
  };

  const handleSlotClick = (slot) => {
    console.log("Clicked Slot:", slot); 
    if (['11:15am', '12:00pm', '12:15pm', '12:45pm'].includes(slot)) {
      setSelectedOrangeSlot(slot);
      console.log("Selected Orange Slot:", selectedOrangeSlot);
      setShowReservationModal(true);
    }
  };

  return (
    <div className='main-container'>
      <div className='flex-row-ccq'>
        <div 
          className='mdi-chevron-down' 
          onClick={() => navigate('/home')}
          role='button'
          aria-label='Back to homepage' 
        />
        <span className='sea-grill-north-miami'>
          Sea Grill of Merrick Park
        </span>
      </div>
      <div className='line8' />
      
      {/* Slideshow implementation */}
      <div className='rectangle-8-a'>
        <div className='rectangle-1-c'>
          <div className='slideshow'>
            <div className='chevron mdi-chevron-double-left' onClick={previousImage} />
            <img
              src={images[currentImageIndex]}
              alt='Restaurant'
              className='slideshow-image'
            />
            <div className='chevron mdi-chevron-double-right' onClick={nextImage} />
          </div>
        </div>
      </div>  

      <span className='get-direction'>Get Direction</span>
      <div className='flex-row-c'>
        <span className='ne-rd-std'>
          3913 NE 163rd St <br />
          North Miami Beach, FL 33160 
        </span>
        <div className='vector-0s' />
        <div className='vector-81' />
      </div>
      
      <div className='flex-row-b'>
        <div className='vector-9' />
        <div className='time-range1'>
          <span className='time'>10:30</span>
          <span className='time-separator'> AM - </span>
          <span className='time-a'>11:00 </span>
          <span className='time-separator-b'>PM</span>
        </div>
      </div>
      
      <div className='flex-row-fe' onClick={handleShowMenu}>
        <div className='image' />
        <span className='show-menu'>Show Menu</span>
      </div>

      {showMenuModal && (
        <div className='menu-modal'>
          <Menu onClose={() => setShowMenuModal(false)} />
        </div>
      )}

      <span className='description'>Description</span>
      
      <div className='seagrill-restaurant'>
        <span className='seagrill-restaurant-c'>
          {isExpanded ? restaurantDescription : `${restaurantDescription.substring(0, 100)}...`}
        </span>
        <span className='read-more' onClick={toggleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      </div>

      <div className='flex-row-cb'>
        {/* Date Picker */}
        <button className='frame_2a' onClick={() => setDatePickerOpen(!isDatePickerOpen)}>
          <div className='date-range'>
            <div className='vector-e' />
          </div>
          <span className='date'>
            {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
          </span>
          <div className='chevron-down'>
            <div className='vector-f' />
          </div>
        </button>

        {isDatePickerOpen && (
          <div className='datepicker-container'>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setDatePickerOpen(false); 
              }}
              inline
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        )}

      <div className='time-picker-container'>
          {/* Time Picker Button */}
          <button className='frame-10' onClick={() => setTimePickerOpen(!isTimePickerOpen)}>
            <div className='baseline-access-time' />
            <span className='time-11'>{getTimeString() || 'Time'}</span>
            <div className='chevron-down-12'>
              <div className='vector-13c' />
            </div>
          </button>

          {isTimePickerOpen && (
          <div className='timepicker-dropdowns'>
                {/* Hour Dropdown */}
                <select
                  className='timepicker-dropdown'
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(e.target.value)}
                > 
                  <option value='' disabled>Select Hour</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>

                <select
                  className='timepicker-dropdown'
                  value={selectedMinute}
                  onChange={(e) => setSelectedMinute(e.target.value)}
                >
                  <option value='' disabled>Select Minute</option>
                  {[...Array(60)].map((_, i) => (
                    <option key={i} value={String(i).padStart(2, '0')}>
                      {String(i).padStart(2, '0')}
                    </option>
                  ))}
                </select>

                {/* AM/PM Dropdown */}
                <select
                  className='timepicker-dropdown'
                  value={selectedSession}
                  onChange={(e) => setSelectedSession(e.target.value)}
                >
                  <option value='' disabled>Select Session</option>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
            </div>
            )}
        </div>

        {/* People Dropdown */}
        <button className='frame-14'>
          <div className='person-multiple-1'>
            <div className='vector-15' />
          </div>
          <select
            className='people'
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          >
            <option value={0} disabled>Select People</option>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </button>
      </div>

      {/* Show In/Out selection after clicking 'Find Slots' */}
      {showTimeSlots && (
        <div className="flex-row-bccd">
          <label className="radio-label">
            <input
              type="radio"
              value="In"
              name="inOut"
              checked={inOutSelection === 'In'}
              onChange={handleInOutChange}
              className="hidden-radio"
            />
            <span className="text-in">In</span>
            <div className={inOutSelection === 'In' ? 'group-ih selected' : 'group-ih'} />
          </label>
          
          <label className="radio-label-19 out-label">
            <input
              type="radio"
              value="Out"
              name="inOut"
              checked={inOutSelection === 'Out'}
              onChange={handleInOutChange}
              className="hidden-radio"
            />
            <span className="text-out">Out</span>
            <div className={inOutSelection === 'Out' ? 'group-ih selected1' : 'group-ih1'} />
          </label>
        </div>
      )}


      <button className='frame-18a' onClick={handleFindSlots}  disabled={!showFindSlots}>
        <span className='find-slots'>Find Slots</span>
      </button>

      {!selectedDate || !selectedHour || !selectedMinute || !selectedSession || people === 0 ? (
        <span className="span-select-date-time">Please Select Date, Time and People</span>
      ) : null}

      {/* Render time selection only if inOutSelection is true */}
      {inOutSelection && (
        <div>
          <span className="select-time">Select a time you like</span>
          
          <div className="flex-row-cc">
            {timeSlots.slice(0, 4).map((slot, index) => (
              <button 
                key={index}  
                className={`button-frame-${index + 1} ${['11:15am', '12:00pm'].includes(slot) ? 'orange-slot' : 'grey-slot'}`}
                disabled={['11:15am', '12:00pm'].includes(slot) ? selectedOrangeSlot && selectedOrangeSlot !== slot : true}
                onClick={() => handleSlotClick(slot)}
              >
                <span className={`time-${slot.replace(':', '-')}`}>{slot}</span>
              </button>
            ))}
          </div>

          <div className="flex-row-f-21">
            {timeSlots.slice(4, 8).map((slot, index) => (
              <button 
                key={index} 
                className={`button-frame-${index + 5} ${['12:15pm', '12:45pm'].includes(slot) ? 'orange-slot' : 'grey-slot'}`}
                disabled={['12:15pm', '12:45pm'].includes(slot) ? selectedOrangeSlot && selectedOrangeSlot !== slot : true}
                onClick={() => handleSlotClick(slot)}
              >
                <span className={`time-${slot.replace(':', '-')}`}>{slot}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {showReservationModal && (
        <div className='reservation-modal'>
          <Reservation
            selectedDate={selectedDate}
            selectedOrangeSlot={selectedOrangeSlot}
            selectedPeople={people}
            showTimeSlots={inOutSelection}
            onClose={handleCloseReservation}
          />
        </div>
      )}


      {/* Error message rendering */}
      {errorMessage && <div className='error-message'>{errorMessage}</div>}

      <div className='black-bar-png' />
      <div className='home-banner-img' />
    </div>
  );
}
