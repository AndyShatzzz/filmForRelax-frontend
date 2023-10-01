import React from "react";
import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <div className="footer__wrapper">
                <div className="footer__info">
                    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                </div>
                <div className="footer__description">
                    <div className="footer__year">
                        <p className="footer__year-text">&#169; 2023</p>
                    </div>
                    <div className="footer__nav">
                        <a className="footer__nav-text"
                            href="https://practicum.yandex.ru"
                            target="blank"
                        >Яндекс.Практикум</a>
                        <a className="footer__nav-text"
                            href="https://github.com"
                            target="blank"
                        >Github</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;