import React, { useEffect, useState } from "react";
import Modal from 'react-awesome-modal';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../css/auth.css";
import "../css/navbar.css";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as MenuIcon } from "../img/menu.svg";
import { ReactComponent as CloseMenu } from "../img/x.svg";
import Login from "../View/Authentication/Login";
import Register from "../View/Authentication/Register";
import Search from "./Search";

const Navbar = () => {
    const isLogin = useSelector((state) => state.auth.isLogin)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [visible, setVisible] = useState(false);
    const openModal = () => setVisible(!visible);
    const closeModal = () => setVisible(false);

    const [signup, setSignUp] = useState(false);
    const openSignUp = () => setSignUp(!signup);
    const closeSignUp = () => setSignUp(false);

    useEffect(() => {
        if (isLogin) {
            closeModal();
            closeSignUp();
        }
    }, [isLogin])
    return (
        <div className="nav">
            <div className="logo-nav">
                <div className="logo-container">
                    <NavLink to="/">
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
                        <NavLink className="aStyle" to="/menu">
                            MENU
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

                    <Search />

                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <p className="aStyle" value="Open" onClick={openModal}>
                            SIGN IN
                        </p>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <p className="aStyle" value="Open" onClick={openSignUp}>
                            SIGN UP
                        </p>
                    </li>
                </ul>

            </div>
            <ul className="signin-up">
                <li className="sign-in" onClick={closeMobileMenu}>
                    <p className="aStyle" value="Open" onClick={openModal}>
                        SIGN IN
                    </p>
                </li>
                <li className="sign-up" onClick={closeMobileMenu}>
                    <p className="aStyle" value="Open" onClick={openSignUp}>
                        SIGN UP
                    </p>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
            <Modal
                visible={visible}
                width="60%"
                height="80%"
                effect="fadeInUp"
                onClickAway={closeModal}
            >
                <Login />
            </Modal>
            <Modal
                visible={signup}
                width="60%"
                height="90%"
                effect="fadeInUp"
                onClickAway={closeSignUp}
            >
                <Register />
            </Modal>
        </div>
    );
};

export default Navbar;
