import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/404.css';
import { ReactComponent as Error } from "../img/404/404.svg";
import { FiHome } from "react-icons/fi";

const NotFound = () => {
    return (
        <div>

            <div class="notfound">

                <Error />

            </div>
            <NavLink className="backHome" to="/">Return Home {<FiHome />}</NavLink>

        </div>
    );
}

export default NotFound;