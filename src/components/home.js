import React from 'react';
import '../css/home.css';
import { NavLink } from "react-router-dom";
import egg from "../img/egg.png"


const Home = () => {
    return (
        <>
            <div className="hero-image fadein">
                <div className="head"><marquee direction="right"> FB: https://www.facebook.com/Cookaholic - Hotline : 19001009 </marquee></div>
                <div className="hero-text">
                    <h1 className="fadein">WELCOME TO COOKAHOLIC</h1>
                    <h3 className="text fadein">Find and share Cooking Recipe</h3>
                    <NavLink className="btnStart fadein" to="/main">GET STARTED  <i className="fa fa-arrow-right" aria-hidden="true"></i></NavLink>
                </div>

                <img className="egg" src={egg} alt="egg" />

            </div>
        </>
    );
}

export default Home;