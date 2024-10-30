import React, { useState } from 'react'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './edit_booking.css';

export default function Edit_Booking({ bookingData = {}, onBookingUpdate, closeModal }) {

  const [selectedDate, setSelectedDate] = useState(bookingData?.date ? new Date(bookingData.date) : new Date('17 December 2022')); 
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [people, setPeople] = useState(bookingData?.people ? bookingData.people : 1);
  
  const [selectedSlot, setSelectedSlot] = useState(bookingData.time || '12:15pm');
  const orangeSlots = ['11:15am', '12:00pm', '12:15pm', '12:45pm'];

  const timeSlots = [
    "11:15am", "11:30am", "11:45am", "12:00pm", 
    "12:15pm", "12:30pm", "12:45pm", "1:00pm"
  ];

  const handleSlotClick = (slot) => {
    if (selectedSlot === slot) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot(slot); 
    }
  };

    const handleConfirm = () => {
        const updatedBooking = {
            date: selectedDate.toISOString().split('T')[0], 
            time: selectedSlot,
            people: people
        };
        console.log('Updated Booking:', updatedBooking);
        onBookingUpdate(updatedBooking);
    };


  return (
    <div className='main-container95a' >
      <span className='edit-booking73'>Edit Booking</span>
      <div className='group-000'>
        <div className='line-bcq' />
        <div className='group-164'>
          <span className='bob-smith-qa'>Bob Smith</span>
          <span className='contact-info-64'>+1 6546 654 542</span>
        </div>
        <div className='line-274' />

        {/* Date Picker */}
        <div className='flex-row-er'>
            <button className='frame-332 ' onClick={() => setDatePickerOpen(!isDatePickerOpen)}>
                <div className='date-range93'>
                    <div className='vector-dds' />
                </div>
                <span className='date-122'>
                    {selectedDate ? selectedDate.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    }) : 'Select Date'}
                </span>
                <div className='chevron-down-223'>
                    <div className='vector-45s' />
                </div>
            </button>

            {isDatePickerOpen && (
            <div className='datepicker-container1'>
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

            <div className='frame-853'>
            <div className='person-multiple-3'>
              <div className='vector-9-2' />
            </div>
            <span className='span-32'></span>
            <select 
              className='people-dropdown'
              value={people}
              onChange={(e) => setPeople(parseInt(e.target.value, 10))}
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1} 
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className='button-frame-32'>
          <span className='find-slots-4'onClick={closeModal}>Find Slots</span>
        </button>

         {/* Time Slot Selection */}
        <span className='select-time-e'>Select a time you like</span>
        <div className='group-bcds'>
          <div className='flex-row-effs'>
            {timeSlots.slice(0, 4).map((slot, index) => (
              <button
                key={index}
                className={`button-frame ${orangeSlots.includes(slot) ? 'orange-slot' : 'grey-slot'} ${selectedSlot === slot ? 'selected-slot' : ''}`}
                onClick={() => handleSlotClick(slot)}
                disabled={selectedSlot && selectedSlot !== slot} 
              >
                <span>{slot}</span>
              </button>
            ))}
          </div>
          <div className='flex-row-ebq'>
            {timeSlots.slice(4).map((slot, index) => (
              <button
                key={index}
                className={`button-frame ${orangeSlots.includes(slot) ? 'orange-slot' : 'grey-slot'} ${selectedSlot === slot ? 'selected-slot' : ''}`}
                onClick={() => handleSlotClick(slot)}
                disabled={selectedSlot && selectedSlot !== slot} // Disable only when another slot is already selected
              >
                <span>{slot}</span>
              </button>
            ))}
          </div>
        </div>

        <button className='frame-button-183'onClick={handleConfirm}>
          <span className='confirm-span-33'>Confirm</span>
        </button>
      </div>
      <div className='rectangle-div1' />
    </div>
  );
}
