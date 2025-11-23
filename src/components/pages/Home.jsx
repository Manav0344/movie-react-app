
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./../SearchBar";
import MovieList from "./../MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    try {
   
      const API_KEY = "8b3fd919";
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );

      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]); 
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2> 🔥 Trending & Search Movies</h2>
      <SearchBar onSearch={handleSearch} />
      <h3>Movie Results</h3>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
