import CartModel from "./CartModel";
import MoviesGrid from "./MoviesGrid";
import SearchBar from "./SearchBar";
import SortMoviesSelect from "./SortMoviesSelect";

function MainContent({ movies, handleSort, searchMovie }) {
  return (
    <div>
      {movies.length > 0 ? (
        <div className="containeru">
          <SearchBar searchMovie={searchMovie} />
          <SortMoviesSelect handleSort={handleSort} />

          <CartModel />

          <MoviesGrid movies={movies} />
        </div>
      ) : (
        <h2>No Movies Found</h2>
      )}
    </div>
  );
}

export default MainContent;
