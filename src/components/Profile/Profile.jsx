import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Profile.css';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Profile({ loggedIn, currentUser, handleSignOut, patchUserSubmit, patchError, setError, patchMessage }) {

    const formEdit = useFormAndValidation();

    const [isChangedName, setIsChangedName] = React.useState(false);
    const [isChangedEmail, setIsChangedEmail] = React.useState(false);

    React.useEffect(() => {
        setIsChangedName(currentUser.name !== formEdit.values.name);
        setIsChangedEmail(currentUser.email !== formEdit.values.email);

    }, [currentUser.name, currentUser.email, formEdit.values.name, formEdit.values.email])

    function handlePatchUserSubmit(evt) {
        evt.preventDefault();
        if (formEdit.values.name === '')
            patchUserSubmit({
                email: formEdit.values.email
            })
        if (formEdit.values.email === '') {
            patchUserSubmit({
                name: formEdit.values.name
            })
        }
        if(formEdit.values.email !== '' && formEdit.values.name !== '') {
            patchUserSubmit({
                name: formEdit.values.name,
                email: formEdit.values.email
            })
        }
        formEdit.setValues({ name: '', email: '' });
        evt.target.reset();
    }

    return (
        <>
            <section className="profile">
                <Header
                    loggedIn={loggedIn}
                    setError={setError}
                />
                <div className="profile__container">
                    <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                    <form className="profile__form"
                        name="formEdit"
                        value={formEdit.values}
                        onChange={formEdit.handleChange}
                        onSubmit={handlePatchUserSubmit}
                        noValidate
                    >
                        <label className="profile__form-input">
                            <input className="profile__input"
                                placeholder="Имя"
                                type="text"
                                name="name"
                                pattern='[a-zA-Zа-яА-ЯЁё \-]+$'
                            />
                            <p className="profile__input-info">{currentUser.name}</p>
                            {formEdit.errors.name && <span className="profile__input-error">{formEdit.errors.name} Данное поле должно
                                содержать только латиницу, кириллицу, пробел или дефис.</span>}
                        </label>
                        <label className="profile__form-input">
                            <input className="profile__input"
                                placeholder="Email"
                                type="email"
                                name="email"
                            />
                            <p className="profile__input-info">{currentUser.email}</p>
                            <span className="profile__input-error">{formEdit.errors.email}</span>
                        </label>
                        <span className="profile__error">{patchError}</span>
                        <span className="profile__patch-message">{patchMessage}</span>
                        <button type="submit" className={`profile__button-edit_type_inactive 
                        ${(formEdit.values.name || formEdit.values.email) && isChangedName && isChangedEmail
                            && formEdit.isValid && 'profile__button-edit'}`}>
                            Редактировать
                        </button>
                    </form>
                    <Link to={'/'} className="profile__button-exit" onClick={handleSignOut}>Выйти из аккаунта</Link>
                </div>
            </section>

        </>
    );
}

export default Profile;