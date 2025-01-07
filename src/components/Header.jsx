import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    navigate("/");
    onSearch(searchQuery);
  };

  return (
    <nav>
      <Link to="/">
        <h2 className="title">IMDB</h2>
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/popular" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>Popular</NavLink>
        </li>
        <li>
          <NavLink to="/top-rated" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>Top Rated</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>Upcoming</NavLink>
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
  );
};

export default Header;