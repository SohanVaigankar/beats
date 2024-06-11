import { useState, createContext, useContext } from "react";

export const ThemeContext = createContext("Light");

export const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("Light");
  
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
