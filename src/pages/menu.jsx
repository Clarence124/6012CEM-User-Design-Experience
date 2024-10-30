import React, { useState } from 'react';  
import './menu.css';
import lunch from '../assets/images/SeaGrill_Merrick_lunch_menu.png';
import dinner from '../assets/images/SeaGrill_Merrick_dinner_menu.png';
import desserts from '../assets/images/SeaGrill_Merrick_dessert_menu.jpg';

export default function Menu({ onClose }) {
    const [viewingMenu, setViewingMenu] = useState(null);

    const menuImages = {
        lunch: lunch,
        dinner: dinner,
        desserts: desserts,
    };

    const handleViewMenu = (menuType) => {
        setViewingMenu(menuType);
    };

    const handleCloseImage = () => {
        setViewingMenu(null);
    };

    const handleDownloadMenu = (menuType) => {
        const link = document.createElement('a');
        link.href = menuImages[menuType];
        link.download = `${menuType}-menu.png`;
        link.click();
    };

    return (
        <div className='main-container1'>
            {viewingMenu ? (
                <div className='menu-image-container' onClick={handleCloseImage}>
                    <img
                        src={menuImages[viewingMenu]}
                        alt={`${viewingMenu} menu`}
                        className='menu-image'
                    />
                </div>
            ) : (
                <div className='menu-list'>
                    <div className='line-093' />
                    <div className='rectangle70' />
                    <div className='chevron-down_2'  onClick={onClose}/>
                    <div className='villagio-restaurant-bar3'>
                        <span className='SeaGrill2'>Sea Grill</span>
                        <span className='restaurant-bar-1'> of Merrick Park |</span>
                    </div>
                    <span className='menu01'>Menu</span>
                    <div className='asset-x' />
                    <div className='round-lunch-dining'>
                        <div className='vector5' />
                    </div>
                    <div className='frame-p0'>
                        {/* Lunch Menu */}
                        <div className='group'>
                            <div className='lunch-time'>
                                <span className='lunch'>Lunch </span>
                                <span className='weekday-lunch'>(Monday-Friday 11am-4pm)</span>
                            </div>
                            <div className='flex-row-c'>
                                <div className='ri-external-link-line'>
                                    <div className='vector-10' />
                                </div>
                                <span className='download-menu' onClick={() => handleDownloadMenu('lunch')}>Download Menu</span>
                                <span className='view-menu' onClick={() => handleViewMenu('lunch')}>View Menu</span>
                            </div>
                        </div>

                        {/* Dinner Menu */}
                        <div className='group-2'>
                            <span className='dinner-menu'>Dinner Menu</span>
                            <div className='ri-external-link-line-3'>
                                <div className='vector-4i' />
                            </div>
                            
                        </div>

                        {/* Wine, Desserts and Drinks */}
                        <div className='group-6'>
                            <span className='wine-desserts-drinks'>Wine, Desserts and Drinks</span>
                            <div className='external-link-line'>
                                <div className='vector-7s' />
                            </div>
                            <span className='download-menu-8' onClick={() => handleDownloadMenu('desserts')}>Download Menu</span>
                            <span className='view-menu-9' onClick={() => handleViewMenu('desserts')}>View Menu</span>
                        </div>
                    </div>
                    <div className='dinner-dining'>
                        <div className='vector-ai' />
                    </div>
                    <span className='view-menu-b8' onClick={() => handleDownloadMenu('dinner')}>Download Menu</span>
                            <span className='view-menu-b' onClick={() => handleViewMenu('dinner')}>View Menu</span>
                    <div className='drink'>
                        <div className='vector-cd' />
                    </div>
                </div>
            )}
        </div>
    );
}
