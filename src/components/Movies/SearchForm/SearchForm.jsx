import React from "react";
import { useLocation } from 'react-router-dom';
import './SearchForm.css'
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";

function SearchForm({ isCheckboxActive, setIsCheckboxActive, handleSetFilterMovieText, searchSubmit, searchCheckbox, isLoading }) {
    const location = useLocation();
    const form = useFormAndValidation();

    const [searchText, setSearchText] = React.useState('');

    function handleSearchTextChange(evt) {
        setSearchText(evt.target.value);
        handleSetFilterMovieText(evt.target.value);
        if (location.pathname === '/movies') {
            localStorage.setItem('FilterMovieText', evt.target.value);
        }
    }

    React.useEffect(() => {
        if (location.pathname === '/movies' && localStorage.getItem('FilterMovieText')) {
            setSearchText(localStorage.getItem('FilterMovieText'))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText, localStorage.getItem('FilterMovieText')])

    function handleCheckboxChange(evt) {
        setIsCheckboxActive(evt.target.checked);
        searchCheckbox(evt.target.checked);
        if (location.pathname === '/movies') {
            localStorage.setItem('Checkbox', evt.target.checked);
        }
        if (location.pathname === '/saved-movies') {
            setIsCheckboxActive(evt.target.checked);
        }
    }

    return (
        <section className="search-form">
            <form className={`search-form__container ${isLoading && 'search-form__container_type_inactive'}`}
                name="search-form"
                value={form.values}
                onChange={form.handleChange}
                onSubmit={searchSubmit}
            >
                <div className="search-form__wrapper">
                    <input className="search-form__input"
                        name="moviesSearch"
                        placeholder="Фильм"
                        type="search"
                        value={searchText}
                        onChange={handleSearchTextChange}
                        disabled={isLoading} />
                    <button className="search-form__button" type="submit">Поиск</button>
                </div>
                <div className="search-form__wrapper-toggle">
                    <label className="search-form__toggle">
                        <input className="search-form__toggle-checkbox"
                            type="checkbox"
                            name="checkbox"
                            checked={isCheckboxActive}
                            onChange={handleCheckboxChange}
                            disabled={isLoading}
                        />
                        <span className={`search-form__toggle-background 
                        ${isCheckboxActive ? 'search-form__toggle-background_type_active' : ''}`}></span>
                    </label>
                    <p className="search-form__toggle-text">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}

export default SearchForm