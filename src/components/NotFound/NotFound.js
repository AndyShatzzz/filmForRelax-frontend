import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css';

function NotFound() {

    const navigate = useNavigate();

    function goBack(evt) {
        evt.preventDefault();
        navigate(-1);
    }
    
    return (
        <section className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__subtitle">Страница не найдена</p>
                <button onClick={goBack} className="not-found__link">Назад</button>
            </div>
        </section>
    );
}

export default NotFound;