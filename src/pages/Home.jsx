// Home.js
import React, { useEffect } from "react";
import Card from "../components/Card";

const Home = ({ searchResults, movies }) => {
  const displayMovies = searchResults.length > 0 ? searchResults : movies;

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="container">
      <h1>Now Playing</h1>
      <div className="cards-container">
        {displayMovies.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
