import React, { useEffect, useState } from "react";
// context
import { useTheme } from "../../../contexts/context";

// styles
import styles from "./Player.module.scss";

// icons
import { FaVolumeXmark, FaVolumeLow, FaVolumeHigh } from "react-icons/fa6";
import {
  // TbArrowsShuffle,
  // TbRepeat,
  // TbRepeatOff,
  // TbRepeatOnce,
  TbChevronLeft,
  TbChevronRight,
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
} from "react-icons/tb";

const Player = (props) => {
  const {
    isPlaying,
    setIsPlaying,
    audioRef,
    songInfo,
    setSongInfo,
    currentSong,
    setCurrentSong,
    songs,
    setSongs,
    setSongDirection,
  } = props;

  const { currentTheme } = useTheme();

  // state to keep track of voulme
  const [volume, setVolume] = useState(10);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  useEffect(() => {
    mute ? setVolume(0) : setVolume(30);
  }, [mute]);

  const activeLibraryHandler = async (newSong) => {
    const songsWithUpdatedInfo = songs.map((song) => {
      return song.id === newSong.id
        ? { ...song, active: true }
        : { ...song, active: false };
    });

    await setSongs(songsWithUpdatedInfo);
  };

  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Drag event handler : playing music from specific time
  const dragEventHandler = (event) => {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  };

  // function  to format the playback time of song
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // function for skipping to the next song or previous song
  const skipSongHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "previous") {
      currentIndex === 0 ? (currentIndex = songs.length - 1) : currentIndex--;
      setSongDirection("left");
    } else {
      currentIndex === songs.length - 1 ? (currentIndex = 0) : currentIndex++;
      setSongDirection("right");
    }
    await setCurrentSong(songs[currentIndex]);
    activeLibraryHandler(songs[currentIndex]);
    (await isPlaying) ? audioRef.current.play() : audioRef.current.pause();
  };

  return (
    <div className={`${styles.Player} ${styles[currentTheme]}`}>
      <div className={styles.TimeControl}>
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragEventHandler}
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className={styles.PlayControl}>
        <TbChevronLeft
          className="skip-back"
          onClick={() => skipSongHandler("previous")}
        />
        {isPlaying ? (
          <TbPlayerPauseFilled className="play" onClick={playSongHandler} />
        ) : (
          <TbPlayerPlayFilled className="play" onClick={playSongHandler} />
        )}
        <TbChevronRight
          className="skip-forward"
          onClick={() => skipSongHandler("next")}
        />
      </div>
      <div className={styles.VolumeControl}>
        {volume < 1 || mute ? (
          <FaVolumeXmark
            className={styles.VolumeIcon}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMute(!mute);
            }}
          />
        ) : volume < 50 ? (
          <FaVolumeLow
            className={styles.VolumeIcon}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMute(!mute);
            }}
          />
        ) : (
          <FaVolumeHigh
            className={styles.VolumeIcon}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMute(!mute);
            }}
          />
        )}

        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();
            mute && volume > 1 ? setMute(false) : setVolume(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Player;
