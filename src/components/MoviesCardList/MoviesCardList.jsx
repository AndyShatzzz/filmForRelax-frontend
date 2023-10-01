import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ renderElement, onMovieClick, onSaveClick }) {
    const location = useLocation();
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__grid">
                    {renderElement.map((item) => (
                        <MoviesCard key={item._id}
                            country={item.country}
                            director={item.director}
                            duration={item.duration}
                            name={item.nameRU}
                            year={item.year}
                            description={item.description}
                            image={item.image}
                            trailerLink={item.trailerLink}
                            thumbnail={item.thumbnail}
                            movieId={item.movieId}
                            nameRU={item.nameRU}
                            nameEN={item.nameEN}
                            _id={item._id}
                            onMovieClick={onMovieClick}
                            onSaveClick={onSaveClick}
                        />
                    ))}
            </div>
            {location.pathname === '/movies' && <div className="movies-card-list__more">
                <p className="movies-card-list__more-text">Ещё</p>
            </div>}
        </section>
    );
}

export default MoviesCardList;