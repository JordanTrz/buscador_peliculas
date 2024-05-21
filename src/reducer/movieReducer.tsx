import { sanitizeString } from "../utils/utils";
import { TMovie, TMovieAction, TMovieState, MovieActionTypes } from "../types/types";

export const movieReducer = (state: TMovieState, action: TMovieAction): TMovieState  => {
  switch(action.type){
    case MovieActionTypes.SET_MOVIES: {
      return {
        ...state,
        movies: action.movies,
        filteredMovies: action.movies,
      };
    }
    case MovieActionTypes.SEARCH_MOVIE: {
      const searchInput = sanitizeString(action.input!);
      const filteredMovies = handleSearch(searchInput, state.movies, state.selectedGenres);

      return {
        ...state,
        filteredMovies,
        input: action.input
      };
    }
    case MovieActionTypes.SET_GENRES: {
      return {
        ...state,
        genres: action.genres
      };
    }
    case MovieActionTypes.ADD_GENRE_FILTER: {
      const selectedGenres = action.selectedGenre === "0" ? [] : [action.selectedGenre];
      const filteredMovies = handleSearch(state.input, state.movies, selectedGenres);
      return {
        ...state,
        selectedGenres,
        filteredMovies,
      };
    }
    case MovieActionTypes.REMOVE_GENRE_FILTER: {
      const updatedGenres = state.selectedGenres?.filter((o: string) => o !== action.selectedGenre);
      return {
        ...state,
        selectedGenres: updatedGenres
      };
    }
    case MovieActionTypes.CLEAN_FILTERS: {
      return {
        ...state,
        selectedGenres: [],
        input: ""
      };
    }
  }
};

function handleSearch(searchInput: string, movies: TMovie[], selectedGenres: string[]): TMovie[]{
  if (searchInput.trim() === "" && selectedGenres.length === 0){
    return [];
  }
  return movies.filter((movie: TMovie) => {
    const matchesText = sanitizeString(movie.title).includes(searchInput) || sanitizeString(movie.description).includes(searchInput);
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(movie.genre);
    return matchesText && matchesGenre;
  });
}