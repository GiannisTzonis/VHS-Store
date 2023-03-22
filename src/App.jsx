import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import MovieModel from "./MovieModel";
import CartProvider from "./cartContext";
import CartModel from "./CartModel";
// import CartModel from "./CartModel";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=b523068f06b70a547946c560d618e2ac";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=b523068f06b70a547946c560d618e2ac&query";

// const cart = useContext(CartContext);
// const productsCount = cart.items;

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
      // console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.log(Error);
    }
  };

  const changeHandler = (x) => {
    setQuery(x.target.value);
  };

  return (
    <CartProvider>
      <div>
        {movies.length > 0 ? (
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
              <button className="searchButton" type="submit">
                Search
              </button>
            </form>

            <CartModel></CartModel>

            <div className="grid">
              {movies.map((movieReq) => (
                <MovieModel key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>No Movies Found</h2>
        )}
      </div>
    </CartProvider>
  );
}

export default App;
