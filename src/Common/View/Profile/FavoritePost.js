import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import "./Profile.css"

import { getFavoriteAction } from "../../../redux/actions/RecipeSave/recipeSaveAction"

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import VisibilityIcon from '@mui/icons-material/Visibility';

const FavoritePost = (props) => {
    const ITEM_HEIGHT = 48;
    const { user } = props;
    useEffect(() => {
        console.log("log at => Information ==> user: ", user)
    }, [user])
    useEffect(() => {
        console.log("log at => Information ==> user: ", user)
    }, [])
    const dispatch = useDispatch();

    const [popupItem, setPopupItem] = useState({});

    const faPost = useSelector((state) => state.recipesave.listRecipeSave) || []

    useEffect(() => {
        dispatch(getFavoriteAction(user._id))
        console.log("log at ==> FavoritePost.js => user._id: ", user._id);
    }, [])
    useEffect(() => {

        console.log("log at ==> FavoritePost.js => faPost: ", faPost);
    }, [faPost])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event, index) => {
        setPopupItem(faPost[index])

        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
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
                            subtitle={vl.username}
                            actionIcon={
                                <div>
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${vl.recipe.name}`}
                                        id="long-button"
                                        aria-controls="long-menu"
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={(e) => handleClick(e, idx, vl._id)}
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
                        <EditIcon style={{ marginRight: "10px" }} />
                        Edit
                    </MenuItem>
                    <MenuItem disableRipple>
                        <DeleteIcon style={{ marginRight: "10px" }} />
                        Delete
                    </MenuItem>

                </Menu>
            </ImageList>
        </>
    )

}
export default FavoritePost;