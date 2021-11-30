import Home from "../Common/View/Home";
import Main from '../Common/View/Main';
import About from '../Common/View/About';
import Menu from '../Common/View/Menu';
import Admin from '../Common/View/Admin/Admin';
import Login from "../Common/View/Authentication/Login";
import Profile from "../Common/View/Profile/Profile";
import AddRecipes from "../Common/View/AddRecipes/AddRecipes";
import NotFound from "../Common/components/404"
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { ComponentTransition, AnimationTypes } from "react-component-transition";
import Auth from "../Common/components/Authentication";

const HomeRoute = () => {
    const location = useLocation();
    return (
        <ComponentTransition
            enterAnimation={AnimationTypes.slideRight.enter}
            exitAnimation={AnimationTypes.slideLeft.exit}
        >
            <Switch key={location.key} location={location}>

                <Route path="/" exact component={Auth(Home, false, false)} />
                <Route path="/main" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/menu" component={Menu} />
                <Route path="/signin" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/admin" component={Admin} />
                <Route path="/addrecipes" component={AddRecipes} />
                <Route path="/404" component={NotFound} />

            </Switch>
        </ComponentTransition>

    );
}

export default HomeRoute;