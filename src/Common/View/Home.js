import React from 'react';
import '../css/home.css';
import { NavLink } from "react-router-dom";
import egg from "../img/egg.png"
import Header from '../components/Header';


const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="hero-image fadein">

                <div className="hero-text">
                    <h1 className="fadein">WELCOME TO COOKAHOLIC</h1>
                    <h3 className="text fadein">Find and share Cooking Recipe</h3>
                    <NavLink className="btnStart fadein" to="/main">GET STARTED  <i className="fa fa-arrow-right" aria-hidden="true"></i></NavLink>
                </div>



            </div>
        </div>
    );
}

export default Home;