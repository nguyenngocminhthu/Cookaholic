import Home from "../Common/View/Home";
import Main from '../Common/View/Main';
import About from '../Common/View/About';
import Policy from '../Common/View/Policy';
import Admin from '../Common/View/Admin/Admin';
import Login from "../Common/View/Authentication/Login";
import Profile from "../Common/View/Profile/Profile";
import AddRecipes from "../Common/View/AddRecipes/AddRecipes";
import PagePost from "../Common/View/PagePost/PagePost"
import NotFound from "../Common/components/404"
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { ComponentTransition, AnimationTypes } from "react-component-transition";



const HomeRoute = () => {
    const location = useLocation();
    return (
        <ComponentTransition
            enterAnimation={AnimationTypes.slideRight.enter}
            exitAnimation={AnimationTypes.slideLeft.exit}
        >
            <Switch key={location.key} location={location}>

                <Route path="/" exact component={Home} />
                <Route path="/main" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/menu" component={Policy} />
                <Route path="/signin" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/admin" component={Admin} />
                <Route path="/addrecipes" component={AddRecipes} />
                <Route path="/404" component={NotFound} />
                <Route path="/post" component={PagePost} />
                

            </Switch>
        </ComponentTransition>

    );
}

export default HomeRoute;