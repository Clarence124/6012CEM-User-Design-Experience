import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='main-container'>
      <div className='pngkit-black-bar' />
      <div className='rectangle-1a'>
        <div className='welcome-message'>
          <span className='welcome-text'>Welcome to</span>
          <span className='space'> </span>
          <span className='dine-in'>Dine-in</span>
          <span className='florida'>Florida</span>
        </div>
        <div className='ellipse-z' />
        <div 
          className='line1' 
          onClick={() => navigate('/more')}
          role='button'
          aria-label='Go to more to edit profile'
        />
      </div>
      <div className='home-banner-img1a'>
        <div className='our-restaurants'>
          <span className='our-text'>Our</span>
          <span className='space-1'> </span>
          <span className='restaurants-text'>Restaurants</span>
        </div>
        <div className='line-2' />
        <div className='flex-row-fd'>
          <div 
            className='rectangle-3q'
            onClick={() => navigate('/booking')}
            role='button'
            aria-label='Go to booking page for Sea Grill of Merrick Park' 
          >
            <div className='frame-1a'>
              <div className='image_q' />
            </div>
            <span className='sea-grill-a'>Sea Grill of Merrick Park</span>
            <span className='address'>
              4250 Salzedo Street, <br />
              Suite 1425Coral Gables, FL 33146
            </span>
            <div className='time'>
              <span className='time-text'>11:30</span>
              <span className='time-range1a'> AM - </span>
              <span className='time-text-4'>11:00 </span>
              <span className='time-text-5'>PM</span>
            </div>
            <div className='flex-row-z'>
              <button className='button'>
                <span className='span'>11:15</span>
              </button>
              <button className='button-6'>
                <span className='span-7'>11:30</span>
              </button>
              <button className='button-8'>
                <span className='span-9'>12:00</span>
              </button>
            </div>
          </div>
          <div className='rectangle-ab'>
            <div className='frame-b' />
            <span className='sea-grill-north-miami-1'>
              Sea Grill North Miami Beach
            </span>
            <span className='address-c'>
              3913 NE 163rd St <br />
              North Miami Beach, FL 33160
            </span>
            <div className='time-d'>
              <span className='span-e'>11:30</span>
              <span className='time-range-f'> AM - </span>
              <span className='span-10'>11:00 </span>
              <span className='pm'>PM</span>
            </div>
            <div className='flex-row-z'>
              <button className='frame-11'>
                <span className='span-12'>10:00</span>
              </button>
              <button className='frame-13'>
                <span className='span-14'>11:15</span>
              </button>
              <button className='frame-15'>
                <span className='span-16'>11:55</span>
              </button>
            </div>
          </div>
        </div>
        <div className='flex-row-17'>
          <div className='rectangle-18'>
            <div className='frame-19'>
              <div className='image-1a' />
            </div>
            <span className='villagio-restaurant-bar1'>
              Villagio Restaurant and Bar
            </span>
            <span className='address-1b'>
              344 Plaza Real, Suite 1433
              <br />
              Boca Raton, FL 33432-3937
            </span>
            <div className='time-range-1c'>
              <span className='time-1d'>11:30</span>
              <span className='time-range-1e'> AM - </span>
              <span className='time-1f'>11:00 </span>
              <span className='time-20'>PM</span>
            </div>
            <div className='flex-row-z'>
              <button className='frame-21'>
                <span className='time-22'>9:15</span>
              </button>
              <button className='frame-23'>
                <span className='time-24'>10:00</span>
              </button>
              <button className='frame-25'>
                <span className='time-26'>11:15</span>
              </button>
            </div>
          </div>
          <div className='rectangle-27'>
            <div className='frame-28' />
            <span className='restaurant-info'>Mystic Lotus Cuisine</span>
            <span className='address-29'>
              1760 Sawgrass Mills Circle
              <br />
              Sunrise, FL 33323-3912
            </span>
            <div className='time-range-2a'>
              <span className='time-2b'>11:30</span>
              <span className='time-range-2c'> AM - </span>
              <span className='time-2d'>11:00 </span>
              <span className='time-2e'>PM</span>
            </div>
            <div className='flex-row-z'>
              <button className='frame-2f'>
                <span className='time-30'>11:00</span>
              </button>
              <button className='frame-31'>
                <span className='time-32'>12:30</span>
              </button>
              <button className='frame-33'>
                <span className='time-34'>1:30</span>
              </button>
            </div>
          </div>
        </div>
        <div className='flex-row-35'>
          <div className='rectangle-36'>
            <div className='frame-37'>
              <div className='image-38' />
            </div>
            <span className='runaway-spark-tastes'>
              Runaway Spark Tastes + Taps
            </span>
            <span className='san-lorenzo-avenue'>
              360 San Lorenzo Avenue, Suite 1430 <br />
              Coral Gables, FL 33146-1865
            </span>
            <div className='time-39b'>
              <span className='time-3a'>11:30</span>
              <span className='time-3b'> AM - </span>
              <span className='time-3c'>11:00 </span>
              <span className='time-3d'>PM</span>
            </div>
            <div className='flex-row-z'>
              <button className='frame-3e'>
                <span className='time-3f'>11:15</span>
              </button>
              <button className='frame-40'>
                <span className='time-41'>12:45</span>
              </button>
              <button className='frame-42'>
                <span className='time-43'>1:45</span>
              </button>
            </div>
          </div>
          <div className='rectangle-44'>
            <div className='frame-45' />
            <span className='carpaccio-american-dream'>
              Carpaccio American Dream
            </span>
            <span className='american-dream-way'>
              1 American Dream Way. <br />
              #F225East Rutherford, NJ 07073
            </span>
            <div className='time-46'>
              <span className='time-47'>11:30</span>
              <span className='time-48'> AM - </span>
              <span className='time-49'>11:00 </span>
              <span className='time-4a'>PM</span>
            </div>
            <div className='flex-row-z'>
              <button className='frame-button'>
                <span className='span-colon'>10:20</span>
              </button>
              <button className='frame-button-4b'>
                <span className='span-colon-4c'>11:25</span>
              </button>
              <button className='frame-button-4d'>
                <span className='span-colon-4e'>2:10</span>
              </button>
            </div>
          </div>
        </div>
        <div className='rectangle-4fa'>
          <div className='save-bill'>
            <span className='auto-save'>Automatically save </span>
            <span className='percent'>2%</span>
            <span className='auto-save-50'>
              
              on your bill if you reserve your Table With
            </span>
            <span className='percent-51'>DINE IN FLORIDA</span>
          </div>
        </div>
      </div>
      <div className='rectangle-52'>
        <div className='rectangle-53' />
        <div className='flex-row-ed'>
        <div
          className='clarity-home-line1'
          onClick={() => navigate('/')}
          role='button'
          aria-label='Home'
        />
        <div
          className='vector-2a'
          onClick={() => navigate('/notification')}
          role='button'
          aria-label='Notifications'
        />
        <div
          className='vector-54'
          onClick={() => navigate('/history')}
          role='button'
          aria-label='History'
        />
        <div
          className='vector-55a'
          onClick={() => navigate('/more')}
          role='button'
          aria-label='More'
        />
        </div>
         <div className='flex-row-da'>
          <span className='home1'>Home</span>
          <span className='notifications1'>Notifications</span>
          <span className='history1' >History</span>
          <span className='more1'>More</span>
        </div>
      </div>
    </div>
  );
}
