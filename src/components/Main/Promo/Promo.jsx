import React from "react";
import promoImageWww from '../../../images/promoImageWww.svg';
import './Promo.css';

function Promo() {
    return(
        <section className="promo">
            <div className="promo__info">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            </div>
            <img className="promo__image" 
                src={promoImageWww}
                alt="Картинка, которая отображает много WWW"
            />
        </section>
    );
}

export default Promo;