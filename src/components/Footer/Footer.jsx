import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__info">
                    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                </div>
                <div className="footer__description">
                    <p className="footer__year-text">&#169; 2023</p>
                    <ul className="footer__nav">
                        <li className="footer__nav-list">
                            <a className="footer__nav-text"
                                href="https://practicum.yandex.ru"
                                target="blank"
                            >Яндекс.Практикум</a>
                        </li>
                        <li className="footer__nav-list">
                            <a className="footer__nav-text"
                                href="https://github.com"
                                target="blank"
                            >Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;