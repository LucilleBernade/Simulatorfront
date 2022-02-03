import React from 'react';
import logo from '../../assets/yescapa.svg';
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <img className="logo" src={logo} alt="yescapa" />
            <div classname="boutton">
            <a href="blog">
            <button type="button">Blog</button>
            </a>
            <a href="https://www.yescapa.fr/onboarding/step/">
            <button type="button">Louez</button>
            </a>
            </div>
        </div>
    );
};

export default Nav;