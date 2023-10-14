import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Movies/Preloader/Preloader';
import { BASE_URL } from '../../utils/MainApi';


function MoviesCardList({ renderElement, onMovieClick, onSaveClick, isLoading, error, moreButton, handleLoadMoreMovies, onDeleteMovie, savedMovies }) {
    const location = useLocation();
    return (
        <section className="movies-card-list">
            {isLoading ? <Preloader /> :
                error ? <p className="movies-card-list__error">{error}</p> :
                    <div className="movies-card-list__grid">
                        {location.pathname === '/movies' && renderElement.map((item) => (
                            <MoviesCard key={item.id}
                                country={item.country}
                                director={item.director}
                                duration={item.duration}
                                name={item.nameRU}
                                year={item.year}
                                description={item.description}
                                image={`${BASE_URL}${item.image.url}`}
                                thumbnail={`${BASE_URL}${item.image.formats.thumbnail.url}`}
                                trailerLink={item.trailerLink}
                                nameRU={item.nameRU}
                                nameEN={item.nameEN}
                                id={item.id}
                                onMovieClick={onMovieClick}
                                onSaveClick={onSaveClick}
                                onDeleteMovie={onDeleteMovie}
                                savedMovies={savedMovies}
                            />
                        ))}
                        {location.pathname === '/saved-movies' && renderElement.map((item) => (
                            <MoviesCard key={item.movieId}
                                country={item.country}
                                director={item.director}
                                duration={item.duration}
                                name={item.nameRU}
                                year={item.year}
                                description={item.description}
                                image={item.image}
                                trailerLink={item.trailerLink}
                                nameRU={item.nameRU}
                                nameEN={item.nameEN}
                                id={item.movieId}
                                _id={item._id}
                                onMovieClick={onMovieClick}
                                onSaveClick={onSaveClick}
                                onDeleteMovie={onDeleteMovie}
                            />
                        ))}
                    </div>}
            {moreButton && <button className="movies-card-list__more" onClick={handleLoadMoreMovies}>
                <p className="movies-card-list__more-text">Ещё</p>
            </button>}
        </section>
    );
}

export default MoviesCardList;