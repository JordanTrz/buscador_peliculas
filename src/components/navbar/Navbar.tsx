import "./navbar.scss";
import { ChangeEvent, useCallback, useContext, useEffect, useState } from "react";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import { MovieContext } from "../../context/movieContext";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../utils/utils";
import { MovieActionTypes } from "../../types/types";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [inputText, setInputText] = useState("");
  const { state, dispatch } = useContext(MovieContext);
  const navigate = useNavigate();

  const debouncedSearch = useCallback(
    debounce((type, payload) => {
      dispatch({ type, ...payload });
    }, 300),
    []
  );

  function handleInputChange(e: ChangeEvent<HTMLInputElement>){
    setInputText(e.target.value);
    debouncedSearch(MovieActionTypes.SEARCH_MOVIE, {input: e.target.value});
  }

  function handleGenreChange(e: ChangeEvent<HTMLSelectElement>){
    debouncedSearch(MovieActionTypes.ADD_GENRE_FILTER, { selectedGenre: e.target.value });
  }

  function handleImgClick(){
    dispatch({ type: MovieActionTypes.CLEAN_FILTERS });
    setInputText("");
    navigate("/");
  }

  useEffect(() => {
    if (state.input.length || state.selectedGenres.length){
      navigate("/search");
    } else {
      navigate("/");
    }
  }, [state.input, state.selectedGenres]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" onClick={handleImgClick}/>
          <span>Movies</span>
        </div>
        <div className="righ">
          <div className="search_input">
            <input type="text" className="input_text" value={inputText} onChange={handleInputChange} maxLength={30}/>
            <FaSearch className="icon input_icon" size={18}/>
          </div>
          <FaBell className="icon" size={18} />
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="icon"/>
          <div className="profile">
            <FaCaretDown className="icon" size={18}/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
      {state.genres.length > 0 &&
        <div className={isScrolled ? "category scrolled" : "category"}>
          <span>Genre</span>
          {state.genres.length > 0 &&
            <select id="genre" name="genre" onChange={handleGenreChange}>
              <option value={0}>All</option>
              {state.genres.map(genre => (
                <option key={genre}>{genre}</option>
              ))}
            </select>
          }
        </div>
      }
    </div>
  );
};

export default Navbar;