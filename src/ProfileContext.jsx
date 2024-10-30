import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: 'Bob Smith',
    email: 'bob.smith@gmail.com',
    phone: '+1 121 587 1321',
    image: null,
  });

  const updateProfile = (updatedProfile) => {
    setProfile(prevProfile => ({ ...prevProfile, ...updatedProfile }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
