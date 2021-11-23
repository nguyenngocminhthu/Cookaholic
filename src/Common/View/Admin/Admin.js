import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Grid from '@mui/material/Grid';

import './Admin.css';

import Dashboard from './Dashboard';
import User from './User';
import Post from './Post';
import { logoutAction } from "../../../redux/actions/Auth/authActions";

import { FaRegNewspaper, FaRegUser } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";

const Admin = () => {

    //menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    //custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const [showDashboard, setShowDashboard] = useState(true);
    const [showUser, setShowUser] = useState(false);
    const [showPost, setShowPost] = useState(false);
    const showRight = (element) => {
        if (element === "dashboard") {
            setShowDashboard(true);
            setShowUser(false);
            setShowPost(false);
        } else if (element === "user") {
            setShowDashboard(false);
            setShowUser(true);
            setShowPost(false);
        } else if (element === "post") {
            setShowDashboard(false);
            setShowUser(false);
            setShowPost(true);
        }

    }

    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {
        dispatch(logoutAction());
        history.push("/");
        return;
    };


    return (
        <div>
            <Grid container height="100%">
                <Grid item xs={menuCollapse ? 1 : 2}>
                    <div id="header">
                        {/* collapsed props to change menu size using menucollapse state */}
                        <ProSidebar collapsed={menuCollapse}>
                            <SidebarHeader>
                                <div className="logotext">
                                    {/* Icon change using menucollapse state */}
                                    <p>{menuCollapse ? <GiAbstract050 /> : <SiApacheairflow />}</p>
                                </div>
                                <div className="closemenu" onClick={menuIconClick}>
                                    {/* changing menu collapse icon on click */}
                                    {menuCollapse ? (
                                        <FiArrowRightCircle />
                                    ) : (
                                        <FiArrowLeftCircle />
                                    )}
                                </div>
                            </SidebarHeader>
                            <SidebarContent>
                                <Menu iconShape="square">
                                    <MenuItem active={true} icon={<FiHome />} onClick={() => showRight("dashboard")}>
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem icon={<FaRegUser />} onClick={() => showRight("user")}>User</MenuItem>
                                    <MenuItem icon={<FaRegNewspaper />} onClick={() => showRight("post")}>Post</MenuItem>
                                    <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
                                    <MenuItem icon={<BiCog />}>Settings</MenuItem>
                                </Menu>
                            </SidebarContent>
                            <SidebarFooter>
                                <Menu iconShape="square">
                                    <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
                                </Menu>
                            </SidebarFooter>
                        </ProSidebar>
                    </div>
                </Grid>
                <Grid item xs={menuCollapse ? 11 : 10}>
                    {showDashboard && <Dashboard />}

                    {showUser && <User />}

                    {showPost && <Post />}
                </Grid>
            </Grid>
        </div>
    );
}


export default Admin;