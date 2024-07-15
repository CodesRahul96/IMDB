// Header.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    navigate("/");
    onSearch(searchQuery);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"><h2>IMDB</h2></Link>
        </div>

        <ul>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/top-rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li>
            <div className="search_container">
              <input
                type="text"
                name="search movie"
                placeholder="Search Movie"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button type="submit" onClick={handleSearchButtonClick}>
                Search
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
