import React, { useEffect, useState } from "react";
import "./App.css";
import MovieModel from "./MovieModel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FormControl } from "react-bootstrap";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=b523068f06b70a547946c560d618e2ac";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=b523068f06b70a547946c560d618e2ac&query";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (x) => {
    x.preventDefault();
    console.log("Searching");

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=b523068f06b70a547946c560d618e2ac&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.log(Error);
    }
  };

  const changeHandler = (x) => {
    setQuery(x.target.value);
  };

  return (
    <div className="containeru">
      <form onSubmit={searchMovie}>
        <input
          className="searchBar"
          type="search"
          placeholder="Movie Search"
          name="query"
          value={query}
          onChange={changeHandler}
        />
        <button type="submit">Search</button>
      </form>
      <div className="grid">
        {movies.map((movieReq) => (
          <MovieModel key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </div>
  );
}

export default App;
