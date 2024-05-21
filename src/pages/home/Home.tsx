import "./home.scss";
import { useContext, useEffect } from "react";
import List from "../../components/list/List";
import Layer from "../../components/layer/Layer";
import { useGet } from "../../hooks/useGet";
import { getGenresAPI, getMoviesAPI } from "../../api/apis";
import { MovieContext } from "../../context/movieContext";
import { getAllPromisesSettled } from "../../utils/utils";
import { MovieActionTypes, TMovie } from "../../types/types";

const Home = () => {
  const { dispatch } = useContext(MovieContext);

  const [executeGet] = useGet();

  async function manageSearch(){
    const apiMovie: string = getMoviesAPI();
    const apiGenre: string = getGenresAPI();

    const promises = [
      {key: "movies", value: executeGet(apiMovie)},
      {key: "genres", value: executeGet(apiGenre)}
    ];
    const data = await getAllPromisesSettled(promises);
    dispatch({ type: MovieActionTypes.SET_MOVIES, movies: data.movies as TMovie[] });
    dispatch({ type: MovieActionTypes.SET_GENRES, genres: data.genres as string[] });
  }

  useEffect(() => {
    manageSearch();
  }, []);

  return (
    <div className='home'>
      <Layer />
      <List />
    </div>
  );
};

export default Home;