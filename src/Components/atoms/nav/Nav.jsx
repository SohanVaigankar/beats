import React from "react";

// styles
import styles from "./Nav.module.scss";

// icons
import { FaMusic, FaMoon, FaSun } from "react-icons/fa6";
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
        {currentTheme === "Light" ? (
          <FaMoon
            className={`${styles.ThemeIcon} ${styles[currentTheme]}`}
            onClick={handleThemeToggle}
          />
        ) : (
          <FaSun
            className={`${styles.ThemeIcon} ${styles[currentTheme]}`}
            onClick={handleThemeToggle}
          />
        )}
        <button onClick={handleLibraryToggle}>
          Library <FaMusic />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
