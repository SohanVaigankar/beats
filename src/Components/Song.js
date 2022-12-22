import React from "react";

const Song = (props) => {
  return (
    <div
      key={props.currentSong.name}
      className={`song-container`}
      style={
        props.songDirection === "left"
          ? {
              transform: "translate(-20%)",
              animation: "nextSong 0.5s ease forwards",
            }
          : {
              transform: "translate(20%)",
              animation: "nextSong 0.5s ease forwards",
            }
      }
    >
      <img
        src={props.currentSong.cover}
        alt={`cover of the song ${props.currentSong.name} by ${props.currentSong.artist}`}
      />
      <h2>{props.currentSong.name}</h2>
      <h3>{props.currentSong.artist}</h3>
    </div>
  );
};

export default Song;
