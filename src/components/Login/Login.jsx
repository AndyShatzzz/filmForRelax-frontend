import React from "react";
import Form from "../Form/Form";
import './Login.css';

function Login({ onSubmit, error }) {
    return (
        <>
            <Form 
            emailInput={'E-mail'}
            passwordInput={'Пароль'}
            buttonSubmit={'Войти'}
            formText={'Ещё не зарегистрированы?'}
            buttonToggle={'Регистрация'}
            greeting={'Рады видеть!'}
            onSubmit={onSubmit}
            error={error}
        />
            

        </>
    );
}

export default Login;