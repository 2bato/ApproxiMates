import React, {createContext, useState} from 'react';

export const UserContext = createContext();


export const User = ({ children }) => {
  const [user, setUser] = useState({});

  const setActiveUser = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, setActiveUser }}>
      {children}
    </UserContext.Provider>
  );
};