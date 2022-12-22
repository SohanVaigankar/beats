import React from "react";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  // context
  const { darkTheme, setDarkTheme } = useTheme();

  return (
    <nav>
      <h1>BEATS</h1>
      <div className="nav-right">
        <FontAwesomeIcon
          className={`theme-icon`}
          style={{ color: `${darkTheme ? "#e3b316" : "#333"}` }}
          icon={darkTheme ? faSun : faMoon}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setDarkTheme(!darkTheme);
          }}
        />
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
