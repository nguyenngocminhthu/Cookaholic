import React from "react";
import Home from "../components/Home";
import Main from '../components/Main';
import About from '../components/About';
import Menu from '../components/Menu';
import { Switch, Route } from "react-router-dom";
import { ComponentTransition, AnimationTypes } from "react-component-transition";
import { useLocation } from "react-router-dom";
import Login from "../components/Authentication/Login";

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

            </Switch>
        </ComponentTransition>

    );
}

export default HomeRoute;