import React from 'react';
import logo from '../../assets/yescapa.svg';

const Nav = () => {
    return (
        <div className="nav">
            <img className="logo" src={logo} alt="yescapa" />
            <a href="blog">
            <button type="button">Blog</button>
            </a>
            <a href="https://www.yescapa.fr/onboarding/step/">
            <button type="button">Déposez votre annonce</button>
            </a>
        </div>
    );
};

export default Nav;