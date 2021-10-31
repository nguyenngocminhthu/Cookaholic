import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../img/x.svg";
import { ReactComponent as MenuIcon } from "../img/menu.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import Search from "./search";
import Modal from 'react-awesome-modal';
import "../css/auth.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [visible, setVisible] = useState(false);
    const openModal = () => setVisible(!visible);
    const closeModal = () => setVisible(false);

    const [signup, setSignUp] = useState(false);
    const openSignUp = () => setSignUp(!signup);
    const closeSignUp = () => setSignUp(false);

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
                width="50%"
                height="90%"
                effect="fadeInUp"
                onClickAway={closeModal}
            >
                <div className="go">
                <div class="backdrop"></div>
                    <div class="login-wrapper">
                        <form class="login-html">
                            <div class="login-heading">
                                <h1 class="tab">Login</h1>
                            </div>
                            <div class="login-form">
                                <div class="sign-in-html">
                                    <div class="group">
                                        <label for="user" class="label">Email</label>
                                        <input type="text" id="user" autocomplete="off" class="input"/>
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Password</label>
                                        <div class="pass-container">
                                            <input type="password" id="pass" class="input"
                                                data-type="password"/>
                                            <span class="show-pass" id="show-pass" onclick="toggle()">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="group">
                                        <input type="checkbox" id="check" class="check" checked/>
                                        <label for="check">
                                            <span class="icon"></span>Keep me Signed in
                                        </label>
                                    </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Sign In"/>
                                    </div>
                                    <div class="hr"></div>
                                    <div class="foot-link">
                                        <a href="#forgot">Forgot Password?</a>
                                    </div>
                                    <div class="sign-up">
                                        <h4>Dont have an Account? <a href="#sign-up">SIGN UP</a></h4>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
            <Modal
                visible={signup}
                width="50%"
                height="90%"
                effect="fadeInUp"
                onClickAway={closeSignUp}
            >
             <div className="go">
                <div class="backdrop1"></div>
                    <div class="login-wrapper1">
                        <form class="login-html">
                            <div class="login-heading">
                                <h1 class="tab">Register</h1>
                            </div>
                            <div class="login-form">
                                <div class="sign-in-html">
                                    <div class="group">
                                        <label for="user" class="label">Email</label>
                                        <input type="text" id="user" autocomplete="off" class="input"/>
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Password</label>
                                        <div class="pass-container">
                                            <input type="password" id="pass" class="input"
                                                data-type="password"/>
                                            <span class="show-pass" id="show-pass" onclick="toggle()">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Sign Up"/>
                                    </div>
                                    <div class="hr"></div>

                                    <div class="sign-up">
                                        <h4>Already have account? <a href="#sign-up">SIGN IN</a></h4>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default Navbar;
