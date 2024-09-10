import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { ReactNode, useState, useEffect } from "react";
/* 
things to be added:
- away to store country and capital new values so when the user opens it again
 it should show the same value as the saved one -- it also should be shown in the Countries.tsx
*/

export interface MyPlace {
  country: string ;
  capital: string;
  setCapital: (newCapital: string) => void;
  setCountry: (newCountry: string) => void;
}

export const MyContext = React.createContext<MyPlace>({
  country: '',
  capital: '',
  setCountry: function (newCountry: string): void {
    throw new Error("Function not implemented.");
  },
  setCapital: function (newCapital: string): void {
    throw new Error("Function not implemented.");
  },
});
interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  //global context states
  const [country, setCountry] = useState<string >('Saudi Arabia');
  const [capital, setCapital] = useState<string >('Riyadh');
  

  return (
    <MyContext.Provider value={{ country, setCountry, capital, setCapital }}>
      {children}
    </MyContext.Provider>
  );
};
