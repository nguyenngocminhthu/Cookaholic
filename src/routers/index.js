import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeRoute from "./HomeRoute";

const Routers = () => {
    return (
        <Router>
            <HomeRoute />
        </Router>
    );
};

export default Routers;
