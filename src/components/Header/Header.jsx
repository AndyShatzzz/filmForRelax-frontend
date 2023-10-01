import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import headerLogo from "../../images/headerLogo.png";
import './Header.css';

function Header({ loggedIn, greeting }) {

    const location = useLocation();

    return (
        <header className="header">
            <div className={`header__content ${(location.pathname === '/signup' || location.pathname === '/signin')
                && 'header__content_type_columns'}`}>
                <Link to={'/'} className="header__link-main">
                    <img className="header__image"
                        src={headerLogo}
                        alt="Логотип буквы С"
                    />
                </Link>
                
                {(location.pathname === '/signup' || location.pathname === '/signin')
                    && <p className="header__greeting">{greeting}</p>}
                {loggedIn && <Navigation
                    loggedIn={loggedIn}
                />}
                
                {!loggedIn && location.pathname !== '/signin' && location.pathname !== '/signup' && (
                    <div className="header__link-container">
                        <Link to={'/signup'} className='header__link' >Регистрация</Link>
                        <Link className='header__link header__link_type_signin' to={'/signin'}>
                            <div className="header__signin-container">
                                <p className='header__link header__link_type_signin'>Войти</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;