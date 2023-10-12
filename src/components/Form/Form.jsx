import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import './Form.css';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Form({ emailInput, passwordInput, buttonSubmit, formText, buttonToggle, greeting, onSubmit, error }) {
    const location = useLocation();

    const form = useFormAndValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit({
            name: form.values.name,
            email: form.values.email,
            password: form.values.password,
        })
    }

    return (
        <>
            <section className="form">
                <Header
                    greeting={greeting}
                />
                <div className="form__container">
                    <form className="form__form" 
                        name="form" 
                        value={form.values} 
                        onChange={form.handleChange} 
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        {location.pathname === '/signup' && 
                            <label className="form__form-input">
                                <p className="form__input-info">Имя</p>
                                <input 
                                    className={`form__input ${form.errors.name ? 'form__input_type_error' : ''}`} 
                                    name="name" placeholder="Имя" 
                                    type="text"
                                    pattern='[a-zA-Zа-яА-ЯЁё \-]+$'
                                    required />
                                {form.errors.name && <span className="form__input-error">{form.errors.name} Данное поле должно
                            содержать только латиницу, кириллицу, пробел или дефис.</span>}
                            </label>}
                        <label className="form__form-input">
                            <p className="form__input-info">{emailInput}</p>
                            <input type="email" 
                                className={`form__input ${form.errors.email ? 'form__input_type_error' : ''}`}
                                placeholder="E-mail" 
                                name="email" 
                                id="email" 
                                required />
                            <span className="form__input-error">{form.errors.email}</span>
                        </label>
                        <label className="form__form-input">
                            <p className="form__input-info">{passwordInput}</p>
                            <input type="password" 
                                className={`form__input ${form.errors.password ? 'form__input_type_error' : ''}`}
                                placeholder="Пароль" 
                                name="password" 
                                id="password" 
                                minLength={6} maxLength={40} 
                                required />
                            <span className="form__input-error">{form.errors.password}</span>
                        </label>
                        {error && <span className="form__error">{error}</span>}
                        {location.pathname === '/signin' && (<button type="submit" className={`form__button-submit-innactive form__button-submit-innactive_type_margin ${form.isValid && 'form__button-submit'}`}>{buttonSubmit}</button>)}
                        {location.pathname === '/signup' && (<button type="submit" className={`form__button-submit-innactive ${form.isValid && 'form__button-submit'}`}>
                            {buttonSubmit}</button>)}
                    </form>
                    <p className="form__text">{formText}
                        {location.pathname === '/signin' && (<Link className="form__toggle" to={'/signup'}>{buttonToggle}</Link>)}
                        {location.pathname === '/signup' && (<Link className="form__toggle" to={'/signin'}>{buttonToggle}</Link>)}

                    </p>
                </div>
            </section>

        </>
    );
}

export default Form;