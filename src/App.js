import React, { useState, useRef } from "react";
import "./styles/app.scss";

// components
import Nav from "./Components/Nav";
import Player from "./Components/Player";
import Song from "./Components/Song";
import Library from "./Components/Library";

// song data
import data from "./util";

// context
import { useTheme } from "./contexts/context";

const App = () => {
  // Reference hook : used to select a element in react
  const audioRef = useRef(null);

  // them context
  const { darkTheme } = useTheme();

  // state to initialise songs
  const [songs, setSongs] = useState(data());

  // state to keep track of current song
  const [currentSong, setCurrentSong] = useState(songs[0]);

  // state to keep track if the song is playing or not (play/pause)
  const [isPlaying, setIsPlaying] = useState(false);

  // State to store current song info
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // state to keep track of song direction
  const [songDirection, setSongDirection] = useState("left");

  // state to store library status (open/closed)
  const [libraryStatus, setLibraryStatus] = useState(false);

  // updates the time of the player
  const timeUpdateHandler = (event) => {
    setSongInfo({
      ...songInfo,
      currentTime: event.target.currentTime,
      duration: event.target.duration,
    });
  };

  // function to play next song when song ends
  const songEndHandler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    currentIndex === songs.length - 1 ? (currentIndex = 0) : currentIndex++;
    setCurrentSong(songs[currentIndex]);
    setTimeout(() => {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }, 10);
  };

  return (
    <div
      className={`${darkTheme ? "App dark-theme" : "App"} ${
        libraryStatus ? "shift-to-right" : ""
      }`}
    >
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} songDirection={songDirection} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongDirection={setSongDirection}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default App;
