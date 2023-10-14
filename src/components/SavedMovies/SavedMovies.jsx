import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import './SavedMovies.css';
import * as message from '../../constants/message';
import * as constants from '../../constants/constants';

function SavedMovies({ renderElement,
  loggedIn,
  onRemoveMovie,
  onCheckboxClick,
  onDeleteMovie,
  error,
  setError,
  setFilterSavedMovies,
  savedMovies,
}) {

  const [filterMovieText, setFilterMovieText] = React.useState('');
  const [isCheckboxActive, setIsCheckboxActive] = React.useState(false);

  function handleSetFilterMovieText(value) {
    setFilterMovieText(value);
  }

  function filterMovies(data, checkbox) {
    let filterData = [...data];

    if (checkbox) {
      filterData = filterData.filter(movie => movie.duration <= constants.MOVIE_SHORT_FILM_DURATION);
    }

    if (filterMovieText) {
      filterData = filterData.filter((movie) => movie.nameRU.toLowerCase().includes(filterMovieText.toLowerCase())
        || movie.nameEN.toLowerCase().includes(filterMovieText.toLowerCase()))
    }
    return filterData;
  }

  function searchCheckbox(isActive) {
    const filterData = filterMovies(savedMovies, isActive);
    if (filterData.length > 0) {
      setFilterSavedMovies(filterData);
    }
    if (filterData.length > 0 && filterData.length < savedMovies.length) {
      setFilterSavedMovies(filterData);
    }
    if (filterData.length === 0) {
      setFilterSavedMovies([])
      setError(message.NOT_FOUND)
    } else {
      setError(null)
    }
    localStorage.setItem('Checkbox', isActive);
  }

  function searchSavedMoviesSubmit(evt) {
    evt.preventDefault();
    setError(null);

    const filterData = filterMovies(savedMovies, isCheckboxActive);
    if (!filterMovieText && !isCheckboxActive) {
      setFilterSavedMovies(savedMovies);
    }

    if (filterData.length > 0 && filterData.length < savedMovies.length) {
      setFilterSavedMovies(filterData);
    }
    if (filterData.length === 0) {
      setFilterSavedMovies([]);
      setError(message.NOT_FOUND)
    } else {
      setError(null)
    }
  };

  return (
    <section className="saved-movies">
      <Header
        loggedIn={loggedIn}
        setError={setError}
      />
      <SearchForm
        onCheckboxClick={onCheckboxClick}
        isCheckboxActive={isCheckboxActive}
        handleSetFilterMovieText={handleSetFilterMovieText}
        setIsCheckboxActive={setIsCheckboxActive}
        searchSubmit={searchSavedMoviesSubmit}
        searchCheckbox={searchCheckbox}
      />
      <MoviesCardList
        renderElement={renderElement}
        onRemoveMovie={onRemoveMovie}
        onDeleteMovie={onDeleteMovie}
        error={error}
      />
      <div className="saved-movies__divider"></div>
      <Footer />

    </section>
  );
}

export default SavedMovies;