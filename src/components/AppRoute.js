import { Route } from "react-router-dom";
import React from "react";

const AppRoute = ({ component, ...routeProps }) => {
    return (
        <Route {...routeProps} render={(props) => {
            console.log(routeProps)
            return (
                <>
                    {routeProps.navBar ? React.createElement(routeProps.navBar) : null}
                    {React.createElement(component, props)}
                </>
            );
        }} />
    );
};

export default AppRoute;