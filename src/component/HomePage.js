import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function searchMovies() {
      try {
        const { data } = await axios.get(`https://api.tvmaze.com/shows`);
        setMovies(data);
        console.log(data);
      } catch (error) {
        setLoading(false);
        console.log(error.message, loading);
      }
    }
    searchMovies();
    // eslint-disable-next-line
  }, []);

  const addToFavourite = () => {};

  return (
    <div>
      {movies.length > 0 && (
        <MovieList movies={movies} addToFavourite={addToFavourite} />
      )}
    </div>
  );
}
