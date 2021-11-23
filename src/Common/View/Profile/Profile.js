import React from 'react';

import "./Profile.css"

import Feed from "../../components/Feed"
import Sidebar from "../../components/Sidebar"
import BG from "../../img/Bgprofile.png"
import AVT from "../../img/Avt.jpg"


const Profile = () => {
    return (
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