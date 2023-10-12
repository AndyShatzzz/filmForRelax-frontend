import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
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
            <div className="saved-movies__divider"></div>
            <Footer />

        </section>
    );
}

export default SavedMovies;