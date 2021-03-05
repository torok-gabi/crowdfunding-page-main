import React from 'react';
import hamburger from "./icon-hamburger.svg";
import close from "./icon-close-menu.svg";
import logo from "./logo.svg";
import bgMobile from "./image-hero-mobile.jpg";
import bgDesktop from "./image-hero-desktop.jpg";
import "./header.scss";

const Header = ({sidebar, clickHandler}) => {
    
    return (
        <header className="header">
            <img className="mobile-img" src={bgMobile} alt="office img"/>
            <img className="desktop-img" src={bgDesktop} alt="office img"/>
            <div className="menu">
                <img src={logo} alt="logo img"/>
                <div className={sidebar ? "hamburger active visually-hidden-focusable" : "hamburger"}>
                    <span className="hamburger-icon" onClick={clickHandler}><img src={hamburger} alt="hamburger icon"/></span>
                </div>
                <div className={sidebar ? "close active visually-hidden-focusable" : "close"}>
                    <span className="close-icon" onClick={clickHandler}><img src={close} alt="menu close icon"/></span>
                </div>
            </div>
            <div className={sidebar ? "nav-menu active" : "nav-menu"}>            
                <ul className="nav-list">
                    <li className="border"><a href="" className="nav-item">About</a></li>
                    <li className="border"><a href="" className="nav-item">Discover</a></li>
                    <li className="border"><a href="" className="nav-item">Get Started</a></li>
                </ul>    
            </div>
        </header>
    )
}

export default Header
