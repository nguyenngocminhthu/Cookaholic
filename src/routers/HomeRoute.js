import Home from "../Common/View/Home";
import Main from '../Common/View/Main';
import About from '../Common/View/About';
import Menu from '../Common/View/Menu';
import Admin from '../Common/View/Admin/Admin';
import Login from "../Common/View/Authentication/Login";
import Profile from "../Common/View/Profile/Profile";
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { ComponentTransition, AnimationTypes } from "react-component-transition";


const HomeRoute = () => {
    const location = useLocation();
    return (
        <ComponentTransition
            enterAnimation={AnimationTypes.slideUp.enter}
            exitAnimation={AnimationTypes.slideDown.exit}
        >
            <Switch key={location.key} location={location}>

                <Route path="/" exact component={Home} />
                <Route path="/main" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/menu" component={Menu} />
                <Route path="/signin" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/admin" component={Admin} />

            </Switch>
        </ComponentTransition>

    );
}

export default HomeRoute;