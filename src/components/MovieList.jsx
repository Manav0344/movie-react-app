import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {movies.map((movie, index) => (
        <MovieCard key={movie.imdbID + index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
