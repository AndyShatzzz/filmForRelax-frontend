import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Profile.css';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Profile({ loggedIn }) {
const name = 'Andy';

    const formEdit = useFormAndValidation();

    return (
        <>
        <section className="profile">
            <Header 
                loggedIn={loggedIn}
            />
                <div className="profile__container">
                    <h1 className="profile__title">Привет, {name}!</h1>
                    <form className="profile__form" 
                        name="formEdit" 
                        value={formEdit.values} 
                        onChange={formEdit.handleChange} 
                        noValidate
                    >
                        <label className="profile__form-input">
                            <input className="profile__input" 
                                placeholder="Имя"
                                type="text"
                                name="name"
                                minLength={3} maxLength={40}  
                            />
                            <p className="profile__input-info">Andy</p>
                            <span className="profile__input-error">{formEdit.errors.name}</span>
                        </label>
                        <label className="profile__form-input">
                            <input className="profile__input" 
                                placeholder="Email" 
                                type="email"
                                name="email"
                            />
                            <p className="profile__input-info">pochta@yandex.ru</p>
                            <span className="profile__input-error">{formEdit.errors.email}</span>
                        </label>
                        <button type="submit" className="profile__button-edit">Редактировать</button>
                    </form>
                    <Link to={'/signin'} className="profile__button-exit">Выйти из аккаунта</Link>
                </div>
            </section>

        </>
    );
}

export default Profile;