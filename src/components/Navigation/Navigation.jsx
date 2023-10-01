import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import headerIcon from "../../images/headerIcon.svg";
import navigationMenu from '../../images/navigationMenu.png';
import closeIcon from '../../images/closeIcon.svg';
import './Navigation.css';

function Navigation({ loggedIn }) {

    const location = useLocation();
    const [isNavBarOpen, setIsNavBarOpen] = React.useState(false);

    function toggleNavBarOpen() {
        setIsNavBarOpen(!isNavBarOpen);
    }

    return (
        <nav className="navigation">
            <div className={`navigation__overlay ${isNavBarOpen ? 'navigation__overlay_open' : ''}`} 
                onClick={toggleNavBarOpen}></div>
            <button className="navigation__button" type="button" onClick={toggleNavBarOpen}>
                    <img className="navigation__menu" src={navigationMenu} alt="Кнопка открытия меню" />
            </button>
            <div className={`navigation__container ${isNavBarOpen ? 'navigation__container_type_popup' : ''}`}>
            <button className="navigation__button navigation__button_type_close" type="button" onClick={toggleNavBarOpen}>
                    <img className="navigation__menu navigation__menu_type_close" src={closeIcon} alt="Кнопка закрытия меню" />
            </button>
                <div className="navigation__nav-bar">
                    <NavLink className={isNavBarOpen ?  (({isActive}) => isActive ?  "navigation__active" : "navigation__link") : "navigation__link_type_inactive" } to={'/'}>
                        Главная
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ?  "navigation__active" : "navigation__link" } to={'/movies'}>
                        Фильмы
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? "navigation__active" : "navigation__link" } to={'/saved-movies'}>
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <div className="navigation__profile">
                    <NavLink className={({isActive}) => isActive ? "navigation__active" : "navigation__link" }
                        to={'/profile'}>
                        Аккаунт
                    <div className={`navigation__wrapper-icon 
                    ${(location.pathname === '/profile' || location.pathname === '/movies' || 
                    location.pathname === '/saved-movies') && 'navigation__wrapper-icon_type_profile'}`}>
                        <img className="navigation__icon"
                            src={headerIcon}
                            alt="Иконка профиля"
                        />
                    </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;