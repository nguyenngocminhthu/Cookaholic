import React, { useEffect, useState } from "react";
import Modal from 'react-awesome-modal';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

import "../css/auth.css";
import "../css/navbar.css";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as MenuIcon } from "../img/menu.svg";
import { ReactComponent as CloseMenu } from "../img/x.svg";
import Login from "../View/Authentication/Login";
import Register from "../View/Authentication/Register";
import Search from "./Search";
import { logoutAction } from "../../redux/actions/Auth/authActions";

const Navbar = () => {
    const isLogin = useSelector((state) => state.auth.isLogin)
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.auth.user) || {};

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [visible, setVisible] = useState(false);
    const openModal = () => setVisible(!visible);
    const closeModal = () => setVisible(false);

    const [signup, setSignUp] = useState(false);
    const openSignUp = () => setSignUp(!signup);
    const closeSignUp = () => setSignUp(false);

    const handleLogout = () => {
        dispatch(logoutAction());
        if (history.location.pathname === "/") {
            history.push("/main");
            return;
        }
        history.goBack()
        return;
    };

    useEffect(() => {
        if (isLogin) {
            closeModal();

        }
    }, [isLogin])

    const isRegister = useSelector((state) => state.auth.isRegister)
    useEffect(() => {
        if (isRegister) {
            closeSignUp();
            openModal();
        }
    }, [isRegister])

    const USER = () => {
        if (isLogin)
            return (
                <ul className="signin-up">
                    <li className="sign-in" onClick={closeMobileMenu}>
                        <NavLink to="/profile" className="aStyle" value="Open">
                            PROFILE
                        </NavLink>
                    </li>
                    <li className="sign-up" onClick={closeMobileMenu}>
                        <p className="aStyle" value="Open" onClick={handleLogout}>
                            LOG OUT
                        </p>
                    </li>
                </ul>
            );
        return (
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


        );
    }

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


                </ul>

            </div>
            <USER />
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
