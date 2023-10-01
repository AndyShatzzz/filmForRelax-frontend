import React from "react";
import './Techs.css';

function Techs() {
    return (
        <section className="techs">
            <div className="techs__wrapper">
                <div className="techs__about">
                    <h2 className="techs__title">Технологии</h2>
                </div>
                <h2 className="techs__subtitle">7 технологий</h2>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, 
                которые применили в дипломном проекте.</p>
                <div className="techs__info">
                    <ul className="techs__tabs">
                        <li className="techs__tabs-text">HTML</li>
                    </ul>
                    <ul className="techs__tabs">
                        <li className="techs__tabs-text">CSS</li>
                    </ul>
                    <ul className="techs__tabs">
                        <li className="techs__tabs-text">JS</li>
                    </ul>
                    <ul className="techs__tabs">
                        <li className="techs__tabs-text">React</li>
                    </ul>
                    <ul className="techs__tabs">
                        <li className="techs__tabs-text">Git</li>
                    </ul>
                    <ul className="techs__tabs">
                        <li className="techs__tabs-text">Express.js</li>
                    </ul>
                    <ul className="techs__tabs">
                        <li className="techs__tabs-text">mongoDB</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Techs;