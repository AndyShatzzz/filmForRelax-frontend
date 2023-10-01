import React from "react";
import './AboutProject.css'

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <div className="about-project__wrapper">
                <div className="about-project__about">
                    <h2 className="about-project__title">О проекте</h2>
                </div>
                <div className="about-project__description">
                    <div className="about-project__info">
                        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about-project__info">
                        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about-project__grid">
                    <div className="about-project__period about-project__period_type_green">
                        <p className="about-project__week">1 неделя</p>
                    </div>
                    <div className="about-project__period">
                        <p className="about-project__week about-project__week_type_white">4 недели</p>
                    </div>
                    <div className="about-project__period-description">
                        <p className="about-project__week-text">Back-end</p>
                    </div>
                    <div className="about-project__period-description">
                        <p className="about-project__week-text">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;