import React, { createContext, useEffect, useState } from 'react';

export type DeviceContextType = {
  isMobile: boolean;
};

export const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
});

type DeviceProviderProps = {
    children: React.ReactNode;
};

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    const isMobileDevice = window.innerWidth <= 576;
    setIsMobile(isMobileDevice);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const ThemeContext = createContext(false);
export const LanguageContext = createContext('en');