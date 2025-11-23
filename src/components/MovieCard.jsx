// src/components/MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />

      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      <Link to={`/movie/${movie.imdbID}`}>
        <button className="details-btn">View Details</button>
      </Link>
    </div>
  );
};

export default MovieCard;
