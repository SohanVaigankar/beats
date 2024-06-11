import React from "react";

// styles
import styles from "./Nav.module.scss";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../../contexts/context";

const Nav = (props) => {
  const { libraryStatus, setLibraryStatus } = props;

  // context
  const { currentTheme, setCurrentTheme } = useTheme();

  const handleThemeToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentTheme(currentTheme === "Light" ? "Dark" : "Light");
  };

  const handleLibraryToggle = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav className={styles[currentTheme]}>
      <h1>BEATS</h1>
      <div className={styles.NavRight}>
        <FontAwesomeIcon
          className={`${styles.ThemeIcon} ${styles[currentTheme]}`}
          icon={currentTheme === "Light" ? faSun : faMoon}
          onClick={handleThemeToggle}
        />
        <button onClick={handleLibraryToggle}>
          Library <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
