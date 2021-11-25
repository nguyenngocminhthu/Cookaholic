import React from 'react';
import { useSelector } from "react-redux";

import "./Profile.css"
import NotFound from '../../components/404'

import Feed from "../../components/Feed"
import Sidebar from "../../components/Sidebar"
import BG from "../../img/Bgprofile.png"
import AVT from "../../img/Avt.jpg"


const Profile = () => {
    const roles = useSelector((state) => state.auth.user.roles) || []
    console.log("log at ==> Header.js ==> roles: ", roles)
    return roles.find((role) => role === "ROLE_GUEST") ?
        (<NotFound />) : (
            <div className="pro">
                <div className="profile">
                    <Sidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img
                                    className="profileCoverImg"
                                    src={BG}
                                    alt=""
                                />
                                <img
                                    className="profileUserImg"
                                    src={AVT}
                                    alt=""
                                />
                                <div className="Name"> Cô bé bán diêm </div>
                            </div>
                        </div>

                        <Feed />
                    </div>
                </div>
            </div>
        );
}


export default Profile;