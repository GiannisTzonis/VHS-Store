import { useEffect, useMemo, useState } from "react";
import { Spinner } from "react-bootstrap";
import apiRoutes from "../constants/apiRoutes";
import MainContent from "./MainContent";

function MainContainer() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState(null);

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const searchMovie = async (query) => {
    setLoading(true);

    try {
      const url = `${apiRoutes.searchUrl}=${query}`;

      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.log(Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch(apiRoutes.baseUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const sortedMovies = useMemo(() => {
    if (sort === "asc") {
      return [...movies].sort((a, b) => a.vote_average - b.vote_average);
    }
    if (sort === "desc") {
      return [...movies].sort((a, b) => b.vote_average - a.vote_average);
    }
    return movies;
  }, [movies, sort]);

  return loading ? (
    <Spinner animation="border" />
  ) : (
    <MainContent
      movies={sortedMovies}
      searchMovie={searchMovie}
      handleSort={handleSort}
    />
  );
}

export default MainContainer;
