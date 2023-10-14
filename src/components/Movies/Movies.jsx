import React from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';


function Movies({
  renderElement,
  loggedIn,
  onSaveClick,
  onCheckboxClick,
  isCheckboxActive,
  setIsCheckboxActive,
  handleSetFilterMovieText,
  searchSubmit,
  isLoading,
  error,
  moreButton,
  handleLoadMoreMovies,
  savedMovies,
  onDeleteMovie,
  filterSavedMovies,
  setError,
  searchCheckbox
}) {

  return (
    <section className="movies">
      <Header
        loggedIn={loggedIn}
        setError={setError}
      />
      <SearchForm
        onCheckboxClick={onCheckboxClick}
        isCheckboxActive={isCheckboxActive}
        setIsCheckboxActive={setIsCheckboxActive}
        handleSetFilterMovieText={handleSetFilterMovieText}
        searchSubmit={searchSubmit}
        searchCheckbox={searchCheckbox}
        isLoading={isLoading}
      />
      <MoviesCardList
        renderElement={renderElement}
        onSaveClick={onSaveClick}
        isLoading={isLoading}
        error={error}
        moreButton={moreButton}
        handleLoadMoreMovies={handleLoadMoreMovies}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        filterSavedMovies={filterSavedMovies}
      />
      <Footer />

    </section>
  );
}

export default Movies;