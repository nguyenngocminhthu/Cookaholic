import React from 'react';
import '../css/home.css';
import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>WELCOME TO COOKAHOLIC</h1>
                    <h3 className="text">Find and share Cooking Recipe</h3>
                    <NavLink className="btnStart" to="/main">GET STARTED</NavLink>
                </div>
            </div>
        </>
    );
}

export default Home;