import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeRoute from "./HomeRoute";
import Navbar from '../Common/components/Navbar'

const Routers = () => {
    return (
        <Router>
            <Navbar />
            <HomeRoute />
        </Router>
    );
};

export default Routers;
