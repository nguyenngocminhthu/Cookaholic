import React from "react";
import Home from "../components/home";
import Main from '../components/main';
import About from '../components/about';
import Menu from '../components/Menu';
import { Switch } from "react-router-dom";
import Navbar from '../components/Navbar'
import AppRoute from '../components/AppRoute';

const HomeRoute = () => {
    return (
        <Switch>
            <AppRoute path="/" exact component={Home} />
            <AppRoute path="/main" component={Main} navBar={Navbar} />
            <AppRoute path="/about" component={About} navBar={Navbar} />
            <AppRoute path="/menu" component={Menu} navBar={Navbar} />

        </Switch>
    );
}

export default HomeRoute;