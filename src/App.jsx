// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PopularPage from './pages/PopularPage';
import { API_KEY } from './utils/db';
import MovieDetailsPage from './pages/MovieDetailsPage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';



function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies when component mounts
    async function fetchMovies() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }
    fetchMovies();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route exact path="/" element={<Home searchResults={searchResults} movies={movies} />} />
          <Route path="/popular" element={<PopularPage movies={movies} searchResults={searchResults} />} />
          <Route path="/top-rated" element={<TopRatedPage movies={movies} searchResults={searchResults} />} />
          <Route path="/upcoming" element={<UpcomingPage movies={movies} searchResults={searchResults} />} />
          <Route path="/movies/:id" element={<MovieDetailsPage movies={movies} />} />
          <Route path="/popular/movies/:id" element={<MovieDetailsPage />} />
          <Route path="/top-rated/movies/:id" element={<MovieDetailsPage />} />
          <Route path="/upcoming/movies/:id" element={<MovieDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
