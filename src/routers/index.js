import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeRoute from "./HomeRoute";
import Navbar from '../Common/components/Navbar'
import '../index.css'

import food1 from '../Common/img/food1.png'
import food2 from '../Common/img/food2.png'
import food3 from '../Common/img/food3.png'
import Loader from "../Common/components/Loader";

const Routers = () => {

    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <HomeRoute />
                <div className="test">
                    <img className="food" src={food1} alt="food1" />
                </div>
                <div className="test1">
                    <img className="food" src={food2} alt="food2" />
                </div>
                <div className="test2">
                    <img className="food" src={food3} alt="food3" />
                </div>
                <Loader />
            </Suspense>
        </Router>

    );
};

export default Routers;
