import React, { createContext, useEffect, useState } from 'react';

export type DeviceContextType = {
  isMobile: boolean;
  isTablet: boolean;
};

export const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
  isTablet: false,
});

type DeviceProviderProps = {
    children: React.ReactNode;
};

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  const handleResize = () => {
    const isMobileDevice = window.innerWidth <= 768;
    const isTabletDevice = window.innerWidth <= 1200;
    
    setIsMobile(isMobileDevice);
    setIsTablet(isTabletDevice)
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const LanguageContext = createContext('en');