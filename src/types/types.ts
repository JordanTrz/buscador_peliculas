import { Dispatch, ReactNode } from "react";

export enum MovieActionTypes {
  SET_MOVIES = "set_movies",
  SEARCH_MOVIE = "search_movie",
  SET_GENRES = "set_genres",
  ADD_GENRE_FILTER = "add_genre_filter",
  REMOVE_GENRE_FILTER = "remove_genre_filter",
  CLEAN_FILTERS = "clean_genre_filter"
}

export type TMovie = {
  id: number;
  title: string;
  description: string;
  genre: string;
  img: string;
}

export type TGenre = {
  id?: number;
  name: string;
}

export type TMovieAction = 
  | SetMoviesAction
  | SearchMovieAction
  | SetGenresAction
  | AddGenreFilterAction
  | RemoveGenreFilterAction
  | CleanFilters;

export type TMovieState = {
  movies: TMovie[];
  input: string;
  filteredMovies: TMovie[];
  genres: string[];
  selectedGenres: string[]
}

export interface IChildren {
  children: ReactNode;
}

export interface IType {
  type: string;
}

export interface IContext<T1, T2> {
  state: T1;
  dispatch: Dispatch<T2>;
}

export interface IKeyValuePromise<T> {
  key: string;
  value: Promise<T>;
}

export interface SetMoviesAction {
  type: MovieActionTypes.SET_MOVIES;
  movies: TMovie[];
}

export interface SearchMovieAction {
  type: MovieActionTypes.SEARCH_MOVIE;
  input: string;
}

export interface SetGenresAction {
  type: MovieActionTypes.SET_GENRES;
  genres: string[];
}

export interface AddGenreFilterAction {
  type: MovieActionTypes.ADD_GENRE_FILTER;
  selectedGenre: string;
}

export interface RemoveGenreFilterAction {
  type: MovieActionTypes.REMOVE_GENRE_FILTER;
  selectedGenre: string;
}

export interface CleanFilters {
  type: MovieActionTypes.CLEAN_FILTERS;
}