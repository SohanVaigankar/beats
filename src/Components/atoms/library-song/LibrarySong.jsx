import React from "react";

// styles
import styles from "./LibrarySong.module.scss";

const LibrarySong = (props) => {
  const { song, allSongs, setAllSongs, setCurrentSong, audioRef, isPlaying } =
    props;

  // handling song when clicked on a song from library
  const songSelectHandler = async () => {
    setCurrentSong(song);
    (await isPlaying) ? audioRef.current.play() : audioRef.current.pause();

    const songsWithUpdatedInfo = allSongs.map((eachSong) => {
      return eachSong.id === song.id
        ? { ...eachSong, active: true }
        : { ...eachSong, active: false };
    });

    setAllSongs(songsWithUpdatedInfo);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`${styles.LibrarySongContainer} ${
        song.active ? styles.Selected : ""
      }`}
    >
      <img
        src={song.cover}
        alt={`cover of the song ${song.name} by ${song.artist}`}
      />
      <div className={styles.SongDescription}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
