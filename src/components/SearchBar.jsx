import { useRef } from "react";

function SearchBar({ searchMovie }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    searchMovie(inputRef.current.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      searchMovie(inputRef.current.value);
    }
  };

  return (
    <div className="searchBox">
      <input
        className="searchBar"
        type="search"
        placeholder="Movie Search"
        name="query"
        ref={inputRef}
        onKeyUp={handleKeyUp}
      />
      <button className="searchButton" type="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
