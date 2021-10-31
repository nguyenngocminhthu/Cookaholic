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
                width="90%"
                height="90%"
                effect="fadeInUp"
                onClickAway={closeModal}
            >
                <div>
                    <div className="close-detail">
                        <a href="javascript:void(0);" onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></a>
                    </div>

                    <div>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div>
                                <input type="checkbox" id="customCheck1" />
                                <label htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>

            </Modal>
            <Modal
                visible={signup}
                width="90%"
                height="90%"
                effect="fadeInUp"
                onClickAway={closeSignUp}
            >
                <div>
                    <div className="close-detail">
                        <a href="javascript:void(0);" onClick={closeSignUp}><i className="fa fa-times" aria-hidden="true"></i></a>
                    </div>

                    <div>
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div>
                                <input type="checkbox" id="customCheck1" />
                                <label htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default Navbar;
