import React, { useEffect, useState } from "react";
import "./App.css";
import MovieModel from "./MovieModel";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=b523068f06b70a547946c560d618e2ac";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="container">
      <div className="grid">
        {movies.map((movieReq) => (
          <MovieModel key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </div>
  );
}

export default App;
