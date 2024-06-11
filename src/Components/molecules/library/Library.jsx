import React from "react";

import { useTheme } from "../../../contexts/context";
// components
import { LibrarySong } from "../../atoms";
// styles
import styles from "./Library.module.scss";

const Library = (props) => {
  const {
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
    audioRef,
    isPlaying,
    libraryStatus,
  } = props;

  // context
  const { currentTheme } = useTheme();

  return (
    <div
      className={`${styles.Library} ${styles[currentTheme]} ${
        libraryStatus ? styles.LibraryActive : ""
      }`}
    >
      <h2>Library</h2>
      <div className={styles.LibrarySongs}>
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
