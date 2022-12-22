import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  // state to  keep track of theme
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <nav>
      <h1>Waves</h1>
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
