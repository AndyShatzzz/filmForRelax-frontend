import React from "react";
import portfolioSrc from '../../../images/portfolioSrc.svg';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__wrapper">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__info">
                    <li className="portfolio__info-list">
                        <a className="portfolio__link" href="https://andyshatzzz.github.io/how-to-learn/" target="blank">
                            <p className="portfolio__text">Статичный сайт</p>
                            <img className="portfolio__image"
                                src={portfolioSrc}
                                alt="Картинка стрелочки"
                            />
                        </a>
                    </li>
                    <li className="portfolio__info-list">
                        <a className="portfolio__link" href="https://andyshatzzz.github.io/russian-travel/" target="blank">
                            <p className="portfolio__text">Адаптивный сайт</p>
                            <img className="portfolio__image"
                                src={portfolioSrc}
                                alt="Картинка стрелочки"
                            />
                        </a>
                    </li>
                    <li className="portfolio__info-list">
                        <a className="portfolio__link" href="https://andyshatzzz.github.io/mesto/" target="blank">
                            <p className="portfolio__text">Одностраничное приложение</p>
                            <img className="portfolio__image"
                                src={portfolioSrc}
                                alt="Картинка стрелочки"
                            />
                        </a>
                    </li>
                </ul>
            </div >
        </section>
    );
}

export default Portfolio;