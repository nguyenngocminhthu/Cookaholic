import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeRoute from "./HomeRoute";
import Navbar from '../Common/components/Navbar'
import Header from '../Common/components/Header'
import '../index.css'
const Routers = () => {
    return (
        <Router>
            <Navbar />
            <Header/>
            <HomeRoute />
        </Router>
    );
};

export default Routers;
