import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../img/x.svg";
import { ReactComponent as MenuIcon } from "../img/menu.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import Search from "./search";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="nav">
            <div className="logo-nav">
                <div className="logo-container">
                    <NavLink to="/main">
                        <Logo className="logo" />
                    </NavLink>
                </div>

                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <NavLink className="aStyle" to="/main">
                            HOME
                        </NavLink>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <NavLink className="aStyle" to="/about">
                            ABOUT
                        </NavLink>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <NavLink className="aStyle" to="/about">
                            CONTACT
                        </NavLink>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <NavLink className="aStyle" to="/about">
                            BLOG
                        </NavLink>
                    </li>

                    <Search />

                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <NavLink className="aStyle" to="/about">
                            SIGN IN
                        </NavLink>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <NavLink className="aStyle" to="/about">
                            SIGN UP
                        </NavLink>
                    </li>
                </ul>
            </div>
            <ul className="signin-up">
                <li className="sign-in" onClick={closeMobileMenu}>
                    <NavLink className="aStyle" to="/about">
                        SIGN IN
                    </NavLink>
                </li>
                <li onClick={closeMobileMenu}>
                    <NavLink className="aStyle" to="/about">
                        SIGN UP
                    </NavLink>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default Navbar;
