import React from "react";
import Form from "../Form/Form";
import './Login.css';

function Login() {
    return (
        <>
            <Form 
            emailInput={'E-mail'}
            passwordInput={'Пароль'}
            buttonSubmit={'Войти'}
            formText={'Ещё не зарегистрированы?'}
            buttonToggle={'Регистрация'}
            greeting={'Рады видеть!'}
        />
            

        </>
    );
}

export default Login;