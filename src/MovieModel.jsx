import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieModel = ({ title, poster_path }) => {
  return (
    <div className="box">
      <button type="button">Add</button>
      <h1>{title}</h1>
      <img src={API_IMG + poster_path}></img>
    </div>
  );
};

export default MovieModel;
