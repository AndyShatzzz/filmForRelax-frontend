import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import headerLogoWord from "../../images/headerLogoWord.svg";
import './Header.css';

function Header({ loggedIn, greeting, setError }) {

    const location = useLocation();

    return (
        <header className="header">
            <div className={`header__content ${(location.pathname === '/signup' || location.pathname === '/signin')
                && 'header__content_type_columns'}`}>
                <Link to={'/'} className="header__link-main">
                    <img className="header__image"
                        src={headerLogoWord}
                        alt="Логотип буквы С"
                    />
                </Link>

                {(location.pathname === '/signup' || location.pathname === '/signin')
                    && <h1 className="header__greeting">{greeting}</h1>}
                {loggedIn && <Navigation
                    setError={setError}
                />}

                {!loggedIn && location.pathname !== '/signin' && location.pathname !== '/signup' && (
                    <div className="header__link-container">
                        <Link to={'/signup'} className='header__link'>Регистрация</Link>
                        <Link className='header__signin-container' to={'/signin'}>
                            <p className='header__link header__link-signin'>Войти</p>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;