import "./movie.scss";
import { FaThumbsUp, FaThumbsDown, FaPlay, FaPlus } from "react-icons/fa";
import { TMovie } from "../../types/types";

interface Props {
  movie: TMovie
}

const Movie = ({ movie }: Props) => {
  return (
    <div className="movie_container">
      <div className="movie">
        <img src={movie.img} alt={movie.title}/>
        <span>{movie.genre}</span>
        <h3>{movie.title}</h3>
      </div>
      <div className="item_info">
        <div className="info_top">
          <img src={movie.img} alt={movie.title} />
          <span>{movie.genre}</span>
          <h3>{movie.title}</h3>
          <div className="icons">
            <FaPlay className="icon" />
            <FaPlus className="icon" />
            <FaThumbsUp className="icon" />
            <FaThumbsDown className="icon" />
          </div>
        </div>
        <div className="info_bottom">
          <p className="desc">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;