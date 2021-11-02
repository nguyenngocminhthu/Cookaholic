import React from 'react';
import '../../css/navbar.css';


const Register = () => {
    return (
        <>

            <div className="go">
                <div className="backdrop1"></div>
                <div className="login-wrapper1">
                    <form className="login-html">
                        <div className="login-heading">
                            <h1 className="tab">Register</h1>
                        </div>
                        <div className="login-form">
                            <div className="sign-in-html">
                                <div className="group">
                                    <label htmlFor="user" className="label">Email</label>
                                    <input type="text" id="user" autocomplete="off" className="input" />
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
                                    <input type="submit" className="button" value="Sign Up" />
                                </div>
                                <div className="hr"></div>

                                <div className="sign-up">
                                    <h4>Already have account? <a href="#sign-up">SIGN IN</a></h4>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </>
    );
}

export default Register;