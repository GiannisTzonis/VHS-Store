import React from "react";
import { useState } from "react";
import { movies } from "./App";

let result = [];
export function componentDidMount() {
  const { movies, result } = state;

  result = movies.map((movies) => movies.vote_average.substr(3));
  setState({ result });

  const sortAscending = () => {
    const { result } = state;
    result.sort((a, b) => a - b);
    setState({ result });
  };

  const sortDescending = () => {
    const { result } = state;
    result.sort((a, b) => a - b).reverse();
    setState({ result });
  };
}

// function sortAverage(props) {
//   const result = []
//   const average = props.vote_average

//   result = movies.map(v => v.vote_average.substr(3))
//   this.setState( { result })

//   return (
//     a
//   );
// }

export default componentDidMount;
