import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import './SavedMovies.css';

function SavedMovies({ renderElement, loggedIn, onRemoveMovie, onCheckboxClick, isCheckboxActive }) {
    return (
        <section className="saved-movies">
            <Header
                loggedIn={loggedIn}
            />
            <SearchForm 
                onCheckboxClick={onCheckboxClick}
                isCheckboxActive={isCheckboxActive}
            />
            <MoviesCardList
                renderElement={renderElement}
                onRemoveMovie={onRemoveMovie}
                
            />
        </section>
    );
}

export default SavedMovies;