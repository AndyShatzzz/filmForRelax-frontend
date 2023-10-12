import React from "react";
import photo from '../../../images/photo.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__wrapper">
                <div className="about-me__about">
                    <h2 className="about-me__title">Студент</h2>
                </div>
                <div className="about-me__info">
                    <div className="about-me__description">
                        <h3 className="about-me__subtitle">Андрей</h3>
                        <p className="about-me__job">Фронтенд-разработчик, 27 лет</p>
                        <p className="about-me__job-information">Я родился и живу в Липецке, закончил бакалавриат в РАНХиГС по специальности 
                        "Юриспруденция", а также ЛГТУ магистратуру по направлению, как бы странно не звучало, "Юриспруденция". 
                        Из хобби: армрестлинг и страйкбол. Пока не женат. На данный момент официально 
                        безработный. Есть кошечка Муся.</p>
                        <a className="about-me__github" 
                            href="https://github.com/AndyShatzzz"
                            target="blank">
                            Github
                        </a>
                    </div>
                    <img className="about-me__photo" 
                        src={photo}
                        alt="Фото студента Andy Shatzzz"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;