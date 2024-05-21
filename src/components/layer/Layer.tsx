import { useContext, useEffect, useState } from "react";
import "./layer.scss";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { MovieContext } from "../../context/movieContext";

const Layer = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { state } = useContext(MovieContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => prev === state.movies.length - 1 ? 0 : prev + 1 );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [state.movies]);

  return (
    <div className='layer'>
      <div className="slide_image">
        {state.movies.length > 0 && state.movies.map((movie, index) => (
          <div key={movie.id} className={index === currentIndex ? "slide_container active" : "slide_container"}>
            <img
              key={movie.id}
              src={movie.img}
              alt={`Image ${movie.title}`}
              className="image"
            />
            <div className="info">
              <h1>{movie.title}</h1>
              <span className="desc">
                {movie.description}
              </span>
              <div className="buttons">
                <button className="play">
                  <FaPlay />
                  <span>Play</span>
                </button>
                <button className="more">
                  <FaInfoCircle />
                  <span>Info</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layer;