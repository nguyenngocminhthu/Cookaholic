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
                <Route path="/main" component={Auth(Main)} />
                <Route path="/about" component={Auth(About)} />
                <Route path="/menu" component={Auth(Menu)} />
                <Route path="/signin" component={Auth(Login)} />
                <Route path="/profile" component={Auth(Profile)} />
                <Route path="/admin" component={Auth(Admin, false, true)} />
                <Route path="/addrecipes" component={Auth(AddRecipes)} />
                <Route path="/404" component={NotFound} />
            </Switch>
        </ComponentTransition>

    );
}

export default HomeRoute;