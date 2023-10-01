import React from "react";
import portfolioSrc from '../../../images/portfolioSrc.png';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__wrapper">
                <h2 className="portfolio__title">Портфолио</h2>
                <a className="portfolio__link" href="https://andyshatzzz.github.io/how-to-learn/" target="blank">
                    <div className="portfolio__info">
                        <p className="portfolio__text">Статичный сайт</p>
                        <img className="portfolio__image"
                            src={portfolioSrc}
                            alt="Картинка стрелочки"
                        />
                    </div>
                </a>
                <a className="portfolio__link" href="https://andyshatzzz.github.io/russian-travel/" target="blank">
                    <div className="portfolio__info">
                        <p className="portfolio__text">Адаптивный сайт</p>
                        <img className="portfolio__image"
                            src={portfolioSrc}
                            alt="Картинка стрелочки"
                        />
                    </div>
                </a>
                <a className="portfolio__link" href="https://andyshatzzz.github.io/mesto/" target="blank">
                    <div className="portfolio__info">
                        <p className="portfolio__text">Одностраничное приложение</p>
                        <img className="portfolio__image"
                            src={portfolioSrc}
                            alt="Картинка стрелочки"
                        />
                    </div>
                </a>
            </div >
        </section>
    );
}

export default Portfolio;