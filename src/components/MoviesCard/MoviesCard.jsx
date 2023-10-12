import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";
import deleteIcon from '../../images/deleteIcon.svg';
import savedIcon from '../../images/savedIcon.svg';

function MoviesCard({ 
    country, 
    director, 
    duration, 
    name, 
    year, 
    description, 
    image, 
    thumbnail,
    trailerLink, 
    nameRU,
    nameEN,
    id,
    _id,
    onSaveClick,
    onDeleteMovie,
    savedMovies
}) {
    const location = useLocation();
    const [savedLike, setSavedLike] = React.useState(false);
    const [savedMovieId, setSavedMovieId] = React.useState(null);

    function handleSaveMovieClick() {
        onSaveClick({
            country, 
            director, 
            duration, 
            name, 
            year, 
            description, 
            image, 
            thumbnail,
            trailerLink,
            nameRU,
            nameEN,
            id 
        })
    }

    React.useEffect(() => {
        if(location.pathname === '/movies') {
            const isMovieSaved = savedMovies.some(savedMovie => savedMovie.movieId === id);
            setSavedLike(isMovieSaved);

            if (isMovieSaved) {
                const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === id);
                setSavedMovieId(savedMovie._id);
              }
        }
    }, [location.pathname, savedMovies, id])

    function deleteMovieFromMain() {
        onDeleteMovie(savedMovieId);
    }

    function deleteMovieSubmit() {
        onDeleteMovie(_id);  
    }

    return(
        <div className="movies-card">
            <div className="movies-card__head">
                <h2 className="movies-card__title">{name}</h2>
                <p className="movies-card__duration">{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</p>
            </div>
            <img className="movies-card__image" src={image} alt={name} />
            {location.pathname === '/movies' && 
                (savedLike ? 
                <button className='movies-card__button_type_active' onClick={deleteMovieFromMain}>
                    <img className="movies-card__button-img"
                        src={savedIcon}
                        alt="Иконка сохраненного фильма"
                    />
                </button> 
                :
                <button className='movies-card__button' onClick={handleSaveMovieClick}>Сохранить</button>)
                
            }
            {location.pathname === '/saved-movies' && <button className="movies-card__button" onClick={deleteMovieSubmit}>
                <img className="movies-card__delete-icon" 
                    src={deleteIcon}
                    alt="Иконка удаления"
                />
            </button>}
        </div>
    );
}

export default MoviesCard;