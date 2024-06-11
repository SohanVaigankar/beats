// context
import { useTheme } from "../../../contexts/context";
// styles
import styles from "./Song.module.scss";

const Song = (props) => {
  const { songDirection, currentSong } = props;
  const { currentTheme } = useTheme();
  return (
    <div
      className={`${styles.SongContainer} ${styles[currentTheme]}`}
      data-direction={songDirection}
    >
      <img
        src={currentSong.cover}
        alt={`cover of the song ${currentSong.name} by ${currentSong.artist}`}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
