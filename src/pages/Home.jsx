// Home.js
import React, { useEffect } from "react";
import Card from "../components/Card";

const Home = ({ searchResults, movies }) => {
  const displayMovies = searchResults.length > 0 ? searchResults : movies;

  useEffect(() => {
    document.title = "IMDB | Home";
  }, []);

  return (
    <div className="container">
      <h2>Now Playing</h2>
      <main>
        <div className="cards">
          {displayMovies.map((movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
