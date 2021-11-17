import React from 'react';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./Profile.css"
import Avt from "../../img/egg.png"
import Feed from "../../components/Feed"
import Sidebar from "../../components/Sidebar"
import BG from "../../img/Bgprofile.png"
import AVT from "../../img/Avt.jpg"


const Profile = () => {
    return (
        <>
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
            
            <Feed/>
            </div>
        </div>
        </>
    );
}


export default Profile;