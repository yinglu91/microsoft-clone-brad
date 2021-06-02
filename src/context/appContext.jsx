import React, { createContext, useState, useMemo } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (context === undefined) {
    throw new Error(`useAppContext must be used within a AppProvider`);
  }

  return context;
};

const AppProvider = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((preIsMenuOpen) => !preIsMenuOpen);
  };

  const value = useMemo(() => ({ isMenuOpen, toggleMenu }), [isMenuOpen]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
