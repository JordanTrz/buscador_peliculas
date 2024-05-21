import "./list.scss";
import { useContext, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Movie from "../movie/Movie";
import { TMovie } from "../../types/types";
import { MovieContext } from "../../context/movieContext";

const MOVIE_CARD_WIDTH = 240;

const List = () => {
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  const { state } = useContext(MovieContext);

  const handleClick = (direction: string) => {
    const currentRef = listRef.current;
    if (!currentRef) return;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(prev => prev - 1);
    }
    if (direction === "right" && slideNumber < state.movies.length - 1) {
      setSlideNumber(prev => prev + 1);
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Movies to watch</span>
      <div className="wrapper">
        <FaChevronLeft className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: slideNumber === 0 ? "none" : "" }} />
        <div className="container" ref={listRef} style={{ transform: `translateX(${-slideNumber * MOVIE_CARD_WIDTH}px)` }}>
          {state.movies.length > 0 && state.movies.map((movie: TMovie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <FaChevronRight className="sliderArrow right" onClick={() => handleClick("right")} style={{ display: slideNumber === state.movies.length - 1 ? "none" : "" }}/>
      </div>
    </div>
  );
};

export default List;