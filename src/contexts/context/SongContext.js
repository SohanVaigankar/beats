import { createContext, useContext, useReducer } from "react";
import { songReducer } from "../reducers";

const initialState = {
  currentSong: null,
  currentSongInfo: null,
  isPlaying: false,
  songList: [],
};

export const SongContext = createContext(initialState);

export const SongContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(songReducer, initialState);

  const songState = {
    currentSong: state.currentSong,
    currentSongInfo: state.currentSongInfo,
    isPlaying: state.isPlaying,
    songList: state.songList,
  };

  return (
    <SongContext.Provider value={{ songState, dispatch }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSong = () => {
  return useContext(SongContext);
};
