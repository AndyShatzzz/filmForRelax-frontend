import React from "react";
import './Register.css';
import Form from "../Form/Form";

function Register({ onSubmit, error }) {
    return (
        <>
        <Form 
            emailInput={'E-mail'}
            passwordInput={'Пароль'}
            buttonSubmit={'Зарегистрироваться'}
            formText={'Уже зарегистрированы?'}
            buttonToggle={'Войти'}
            greeting={'Добро пожаловать!'}
            onSubmit={onSubmit}
            error={error}
        />
        </>
    );
}

export default Register;