import { createContext, useContext, useState } from "react";

const initialData = {};

export const SongContext = createContext(initialData);

export const SongContextProvider = ({ children }) => {
  const [song, setSong] = useState(null);

  return (
    <SongContext.Provider value={{ song, setSong }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSong = () => {
  return useContext(SongContext);
};
