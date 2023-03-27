import CartModel from "./CartModel";
import MoviesGrid from "./MoviesGrid";
import SearchBar from "./SearchBar";
import SortMoviesSelect from "./SortMoviesSelect";
import { refreshPage } from "../methods/refresh";

function MainContent({ movies, handleSort, searchMovie }) {
  return (
    <div className="mainC">
      {movies.length > 0 ? (
        <div className="containeru">
          <div className="searchAndSort">
            <SearchBar searchMovie={searchMovie} />
            <SortMoviesSelect handleSort={handleSort} />
          </div>

          <CartModel />

          <MoviesGrid movies={movies} />
        </div>
      ) : (
        <div className="errorDiv">
          <h2>No Movies Found</h2>
          <button className="refreshButton" onClick={refreshPage}>
            Return
          </button>
          <div className="bg"></div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
