import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Notifications from './pages/notification';
import Booking from './pages/booking';
import Reservation from './pages/reservation_info';
import Successful_message from './pages/booking_successful';
import Edit_Booking from './pages/edit_booking';
import History from './pages/history';
import Cancellation from './pages/booking_canceled';
import More from './pages/more';
import Menu from './pages/menu';
import EditProfile from './pages/edit_profile';
import { ProfileProvider } from './ProfileContext'; // Import ProfileProvider

export default function App() {
    return (
        <Router>
            <ProfileProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/notification" element={<Notifications />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/reservation_info" element={<Reservation />} />
                    <Route path="/booking_successful" element={<Successful_message />} />
                    <Route path="/booking_canceled" element={<Cancellation />} />
                    <Route path="/edit_booking" element={<Edit_Booking />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/more" element={<More />} />
                    <Route path="/edit_profile" element={<EditProfile />} />
                </Routes>
            </ProfileProvider>
        </Router>
    );
}
