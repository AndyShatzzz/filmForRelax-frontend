import React from "react";
import './SearchForm.css'

function SearchForm({ onCheckboxClick, isCheckboxActive }) {
    function toggleCheckbox() {
        onCheckboxClick(!isCheckboxActive);
    }

    return (
        <section className="search-form">
            <form className="search-form__container">
                <div className="search-form__wrapper">
                    <input className="search-form__input" name="movies-search" placeholder="Фильм" type="search" required />
                    <button className="search-form__button" type="submit">Поиск</button>
                </div>
                <div className="search-form__wrapper-toggle">
                    <label className="search-form__toggle">
                        <input className="search-form__toggle-checkbox" type="checkbox" />
                        <span className={`search-form__toggle-background 
                        ${isCheckboxActive ? 'search-form__toggle-background_type_active' : ''}`} onClick={toggleCheckbox}></span>
                    </label>
                    <p className="search-form__toggle-text">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}

export default SearchForm