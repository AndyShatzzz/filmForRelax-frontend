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
    trailerLink, 
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    _id, 
    onSaveClick,
}) {
    const location = useLocation();
    const [isClicked, setIsClicked] = React.useState(false);

    function handleSaveMovieClick() {
        onSaveClick({
            country, 
            director, 
            duration, 
            name, 
            year, 
            description, 
            image, 
            trailerLink, 
            thumbnail,
            movieId,
            nameRU,
            nameEN,
            _id 
        }) 
        setIsClicked(true);
    }

    return(
        <div className="movies-card">
            <div className="movies-card__head">
                <h2 className="movies-card__title">{name}</h2>
                <p className="movies-card__duration">{duration}</p>
            </div>
            <img className="movies-card__image" src={image} alt={name} />
            {location.pathname === '/movies' && 
                (isClicked ? 
                <button className='movies-card__button_type_active'>
                    <img className="movies-card__button-img"
                        src={savedIcon}
                        alt="Иконка сохраненного фильма" 
                    />
                </button> 
                :
                <button className='movies-card__button' onClick={handleSaveMovieClick}>Сохранить</button>)
                
            }
            {location.pathname === '/saved-movies' && <button className="movies-card__button">
                <img className="movies-card__delete-icon" 
                    src={deleteIcon}
                    alt="Иконка удаления"
                />
            </button>}
        </div>
    );
}

export default MoviesCard;