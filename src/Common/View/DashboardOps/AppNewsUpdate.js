import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Card, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getAllRecipeAction } from "../../../redux/actions/Recipe/recipe.action"

export default function AppNewsUpdate() {

  const dispatch = useDispatch();
  const menus = useSelector((state) => state.recipe.listRecipe) || []

  useEffect(() => {
    dispatch(getAllRecipeAction({ status: 0 }))

  }, [])
  useEffect(() => {

    console.log("log at ==> AppNewsUpdate.js => menus: ", menus);
  }, [menus])

  return (
    <>

      <Card style={{ width: "50vw" }}>
        <Box sx={{ p: 2, textAlign: 'left', fontSize: '24px' }}>
          News Update
        </Box>
        {menus.map((value, index) => {
          return (
            <List key={index} sx={{ width: '100%', maxWidth: 720 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={value.user.avt} src="..." />
                </ListItemAvatar>
                <ListItemText
                  primary={value.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {value.user.username}
                      </Typography>
                      {value.title}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />

            </List>
          )
        }
        )
        }
        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button
            to="#"
            size="small"
            color="inherit"
            component={RouterLink}
            endIcon={<ArrowForwardIcon />}
          >
            View all
          </Button>
        </Box>
      </Card>

    </>
  );
}