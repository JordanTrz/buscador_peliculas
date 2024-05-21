import { createContext, useReducer } from "react";
import { movieReducer } from "../reducer/movieReducer";
import { TMovieAction, TMovieState, IChildren, IContext } from "../types/types";

const initialState: TMovieState = { 
  movies: [],
  input: "",
  filteredMovies: [],
  genres: [],
  selectedGenres: []
};

export const MovieContext = createContext<IContext<TMovieState, TMovieAction>>({
  state: initialState,
  dispatch: () => null
});

export const MovieContextProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};