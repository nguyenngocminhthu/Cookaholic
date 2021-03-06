import CollectionsIcon from '@mui/icons-material/Collections';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { getAllRecipeAction } from "../../../redux/actions/Recipe/recipe.action"

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  borderRadius: '10%',
  padding: theme.spacing(4, 0),
  color: theme.palette.warning.darker,
  backgroundColor: '#ffe7d9'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------



export default function CollectionPost() {

  const dispatch = useDispatch();
  const menus = useSelector((state) => state.recipe.listRecipe) || []
  console.log("menus.length: ", menus.length);
  const TOTAL = menus.length;
  useEffect(() => {
    dispatch(getAllRecipeAction({ status: 0 }))

  }, [])
  useEffect(() => {

    console.log("log at ==> AppNewsUpdate.js => menus: ", menus);
  }, [menus])

  return (
    <RootStyle>
      <IconWrapperStyle>
        <CollectionsIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72, fontWeight: 900 }}>
        Collection Post
      </Typography>
    </RootStyle>
  );
}