import React from "react";
import { useTheme } from "../contexts/context";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus,
}) => {
  // context
  const { darkTheme } = useTheme();
  return (
    <div
      className={`library ${darkTheme ? "dark-theme" : ""} ${
        libraryStatus ? "library-active" : ""
      }`}
    >
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            allSongs={songs}
            setAllSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
