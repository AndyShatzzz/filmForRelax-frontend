import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';


function Movies({ renderElement, loggedIn, onMovieClick, onSaveClick, onCheckboxClick, isCheckboxActive }) {
  return (
    <section className="movies">
      <Header 
        loggedIn={loggedIn}  
      />
      <SearchForm 
        onCheckboxClick={onCheckboxClick}
        isCheckboxActive={isCheckboxActive}
      />
      <MoviesCardList 
        renderElement={renderElement}
        onMovieClick={onMovieClick}
        onSaveClick={onSaveClick}
        
      />
      <Footer />
       
    </section>
  );
}

export default Movies;