import MovieModel from "./MovieModel";

function MoviesGrid({ movies }) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieModel
          key={movie.id}
          title={movie.title}
          id={movie.id}
          posterPath={movie.poster_path}
        />
      ))}
    </div>
  );
}

export default MoviesGrid;
