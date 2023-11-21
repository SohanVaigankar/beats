import { createContext, useContext, useState } from "react";

const initialData = {};

export const SongContext = createContext(initialData);

export const SongContextProvider = ({ children }) => {
  const [song, setSong] = useState(null);

  return (
    <SongContextProvider value={{ song, setSong }}>
      {children}
    </SongContextProvider>
  );
};

export const useSong = () => {
  return useContext(SongContext);
};
