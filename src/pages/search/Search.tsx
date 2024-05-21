import { useContext } from 'react';
import './search.scss';
import Movie from '../../components/movie/Movie';
import { MovieContext } from '../../context/movieContext';

const Search = () => {
  const { state } = useContext(MovieContext);

  return (
    <div className='search_container'>
      {state.filteredMovies?.length > 0 ?
        <div className='container_list'>
          {state.filteredMovies?.map((movie) => (
            <Movie key={movie.id} movie={movie}/>
          ))}
        </div> :
        <div className='message'>
          <div className="message_container">
            <h2>{`The search <<${state.input || state.selectedGenres.join(", ")}>> returned no matches.`}</h2>
            <span>Suggestion:</span>
            <ul>
              <li>Try other keywords</li>
              <li>Are you looking for another type of genre?</li>
              <li>Try the title of a movie or series, or a name of the cast or address</li>
              <li>Try a genre, like comedy, romance, sports or drama</li>
            </ul>
          </div>
        </div>
      }
    </div>
  );
};

export default Search;