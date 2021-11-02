import React from 'react';
import '../../css/navbar.css';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginAction } from "../../../redux/actions/Auth/authActions";
import Validate from "./Validate";

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const login = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const isValidData = Validate(username, password);
        if (!isValidData) return;
        const res = await dispatch(loginAction(isValidData));
        if (res) {
            history.goBack();
            return;
        }
    };

    return (
        <>

            <div className="go">
                <div className="backdrop"></div>
                <div className="login-wrapper">
                    <form className="login-html">
                        <div className="login-heading">
                            <h1 className="tab">Login</h1>
                        </div>
                        <form className="login-form" onSubmit={login}>
                            <div className="sign-in-html">
                                <div className="group">
                                    <label htmlFor="user" className="label">Email</label>
                                    <input type="text" id="user" autoComplete="off" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <div className="pass-container">
                                        <input type="password" id="pass" className="input"
                                            data-type="password" />
                                        <span className="show-pass" id="show-pass" onClick="toggle()">
                                        </span>
                                    </div>
                                </div>
                                <div className="group">
                                    <input type="checkbox" id="check" className="check" checked />
                                    <label htmlFor="check">
                                        <span className="icon"></span>Keep me Signed in
                                    </label>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign In" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-link">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                                <div className="sign-up">
                                    <h4>Dont have an Account? <a href="#sign-up">SIGN UP</a></h4>
                                </div>
                            </div>
                        </form>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Login;