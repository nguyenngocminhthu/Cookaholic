import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import "./Profile.css"
import NotFound from '../../components/404'
import {
    findUserByIdAction,
} from "../../../redux/actions/User/user.action";
import { findRecipeByUserAction, deletePostAction } from "../../../redux/actions/Recipe/recipe.action"
import { getFavoriteAction, deleteFaAction } from "../../../redux/actions/RecipeSave/recipeSaveAction"

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BG from "../../img/Bgprofile.png"
import AVT from "../../img/Avt.jpg"
import Information from "./Information"
import Security from "./Security";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const ITEM_HEIGHT = 48;

const Profile = (props) => {

    const dispatch = useDispatch();

    const [value, setValue] = useState(0);
    const [popupItem, setPopupItem] = useState({});
    const [popupItemFa, setPopupItemFa] = useState({});
    const handleChange = (event, newValue) => {
        setValue(newValue);

    };

    const myPost = useSelector((state) => state.recipe.listRecipe) || [];
    console.log("log at => Profile => myPost: ", myPost)

    const [deleteSuccess, setDeleteSuccess] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            await dispatch(findRecipeByUserAction(props.match.params.idUser, { status: 0 }));
            console.log("Recipeparam: ", props.match.params.idUser)
        };

        fetchPost();
    }, [deleteSuccess]);

    const faPost = useSelector((state) => state.recipesave.listRecipeSave) || []

    useEffect(() => {
        dispatch(getFavoriteAction(user._id))
        console.log("log at ==> FavoritePost.js => user._id: ", user._id);
    }, [])
    useEffect(() => {

        console.log("log at ==> FavoritePost.js => faPost: ", faPost);
    }, [faPost])

    const deletePost = async (value) => {

        await dispatch(deletePostAction(value))
        console.log("log at => Profile => delete => value: ", value);

    }

    const handleDelete = (data) => {

        deletePost(data);

        console.log("log at => Profile => delete: ", data)
        setDeleteSuccess(deleteSuccess ? false : true)
        handleClose();

    }
    const [deleteFaSuccess, setDeleteFaSuccess] = useState(false);
    const deleteFa = async (value) => {
        await dispatch(deleteFaAction(value))
    }

    const handleDeleteFa = (data) => {
        deleteFa(data);
        setDeleteFaSuccess(deleteFaSuccess ? false : true)
        handleCloseFa();

    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event, index) => {
        setPopupItem(myPost[index])

        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [popupFa, setPopupFa] = useState(null);
    const openFa = Boolean(popupFa);

    const handleClickFa = (event, index) => {
        setPopupItemFa(faPost[index])

        setPopupFa(event.currentTarget);
    };
    const handleCloseFa = () => {
        setPopupFa(null);
    };

    const user = useSelector((state) => state.user.profile);
    console.log("log at => Profile => user: ", user)

    useEffect(() => {
        const fetchUser = async () => {
            await dispatch(findUserByIdAction(props.match.params.idUser));
            console.log("Userparam: ", props.match.params.idUser)
        };

        fetchUser();
    }, []);

    const roles = useSelector((state) => state.auth.user.roles) || []
    console.log("log at ==> Header.js ==> roles: ", roles)
    return roles.find((role) => role === "ROLE_GUEST") ?
        (<NotFound />) : (
            <div className="pro">
                <div className="profile">
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab label="PROFILE" {...a11yProps(0)} />
                            <Tab label="INFORMATION" {...a11yProps(1)} />

                            <Tab label="FAVORITE LIST" {...a11yProps(2)} />

                            <Tab label="SECURITY" {...a11yProps(3)} />

                        </Tabs>
                        <TabPanel className="profileRight" value={value} index={0}>
                            <div >
                                <div className="profileRightTop">
                                    <div className="profileCover">
                                        <img
                                            className="profileCoverImg"
                                            src={BG}
                                            alt=""
                                        />
                                        <img
                                            className="profileUserImg"
                                            src={user.avt}
                                            alt={value.username}
                                        />
                                        <div className="Name"> {user.username} </div>
                                    </div>
                                </div>

                                <ImageList sx={{ width: "100%", height: 400, marginTop: "50px", textAlign: "left" }}>

                                    {myPost.map((value, index) => (
                                        <ImageListItem key={index}>
                                            <img
                                                src={`${value.image}?w=248&fit=crop&auto=format`}
                                                srcSet={`${value.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                alt={value.name}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar
                                                title={value.name}
                                                subtitle={user.username}
                                                actionIcon={
                                                    <div>
                                                        <IconButton
                                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                            aria-label={`info about ${value.name}`}
                                                            id="long-button"
                                                            aria-controls="long-menu"
                                                            aria-expanded={open ? 'true' : undefined}
                                                            aria-haspopup="true"
                                                            onClick={(e) => handleClick(e, index, value._id)}
                                                        >
                                                            <InfoIcon />
                                                        </IconButton>
                                                    </div>
                                                }
                                            />
                                        </ImageListItem>
                                    ))}
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        <MenuItem disableRipple>
                                            <VisibilityIcon style={{ marginRight: "10px" }} />
                                            <NavLink
                                                className="popDetail"
                                                to={`/pagepost/${popupItem._id}`}>
                                                Detail
                                            </NavLink>

                                        </MenuItem>
                                        <MenuItem onClick={handleClose} disableRipple>
                                            <NavLink
                                                to={`/editpost/${popupItem._id}`}>
                                                <EditIcon style={{ marginRight: "10px" }} />
                                                Edit
                                            </NavLink>

                                        </MenuItem>
                                        <MenuItem onClick={() => handleDelete(popupItem._id)} disableRipple>
                                            <DeleteIcon style={{ marginRight: "10px" }} />
                                            Delete
                                        </MenuItem>

                                    </Menu>
                                </ImageList>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Information user={user} />
                        </TabPanel>
                        <TabPanel className="profileRight" value={value} index={2}>
                            <ImageList sx={{ width: "100%", height: 400, marginTop: "50px", textAlign: "left" }}>

                                {faPost.map((vl, idx) => (
                                    <ImageListItem key={idx}>
                                        <img
                                            src={`${vl.recipe.image}?w=248&fit=crop&auto=format`}
                                            srcSet={`${vl.recipe.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={vl.recipe.name}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={vl.recipe.name}
                                            subtitle={vl.recipe.username}
                                            actionIcon={
                                                <div>
                                                    <IconButton
                                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                        aria-label={`info about ${vl.recipe.name}`}
                                                        id="long-button"
                                                        aria-controls="long-menu"
                                                        aria-expanded={openFa ? 'true' : undefined}
                                                        aria-haspopup="true"
                                                        onClick={(e) => handleClickFa(e, idx, vl._id)}
                                                    >
                                                        <InfoIcon />
                                                    </IconButton>
                                                </div>
                                            }
                                        />
                                    </ImageListItem>
                                ))}
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={popupFa}
                                    open={openFa}
                                    onClose={handleCloseFa}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '20ch',
                                        },
                                    }}
                                >
                                    <MenuItem disableRipple>
                                        <VisibilityIcon style={{ marginRight: "10px" }} />
                                        <NavLink
                                            className="popDetail"
                                            to={`/pagepost/${popupItemFa._id}`}>
                                            Detail
                                        </NavLink>

                                    </MenuItem>

                                    <MenuItem onClick={() => handleDeleteFa(popupItemFa._id)} disableRipple>
                                        <DeleteIcon style={{ marginRight: "10px" }} />
                                        Delete
                                    </MenuItem>

                                </Menu>
                            </ImageList>
                        </TabPanel>

                        <TabPanel value={value} index={3}>
                            <Security user={user} />
                        </TabPanel>

                    </Box>

                </div>
            </div>
        );
}


export default Profile;