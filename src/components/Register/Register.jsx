import React from "react";
import './Register.css';
import Form from "../Form/Form";

function Register({ onSubmit, error, isLoading }) {
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
                isLoading={isLoading}
            />
        </>
    );
}

export default Register;