import React from "react";
import './NavTab.css';

function NavTab() {
    return (
        <nav className="nav-tab__content">
            <a className="nav-tab__href" href="#about-project">
                <p className="nav-tab__text">Узнать больше</p>
            </a>
        </nav>
    );
}

export default NavTab;