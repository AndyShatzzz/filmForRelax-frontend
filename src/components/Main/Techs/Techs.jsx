import React from "react";
import './Techs.css';

function Techs() {
    return (
        <section className="techs">
            <div className="techs__wrapper">
                <div className="techs__about">
                    <h2 className="techs__title">Технологии</h2>
                </div>
                <h3 className="techs__subtitle">7 технологий</h3>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, 
                которые применили в дипломном проекте.</p>
                <ul className="techs__info">
                        <li className="techs__info-text">HTML</li>
                        <li className="techs__info-text">CSS</li>
                        <li className="techs__info-text">JS</li>
                        <li className="techs__info-text">React</li>
                        <li className="techs__info-text">Git</li>
                        <li className="techs__info-text">Express.js</li>
                        <li className="techs__info-text">mongoDB</li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;