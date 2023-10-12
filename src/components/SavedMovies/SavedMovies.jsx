import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import './SavedMovies.css';

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

      function filterMovies(data, isCheckboxActive) {
        let filterData = [...data];
    
        if (isCheckboxActive) {
          filterData = filterData.filter(movie => movie.duration <= 40);
        }
    
        if (filterMovieText) {
          filterData = filterData.filter((movie) => movie.nameRU.toLowerCase().includes(filterMovieText.toLowerCase())
            || movie.nameEN.toLowerCase().includes(filterMovieText.toLowerCase()))
        }
        return filterData;
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
          setError('Ничего не найдено')
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