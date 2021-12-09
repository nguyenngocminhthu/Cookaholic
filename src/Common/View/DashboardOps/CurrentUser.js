import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllUserAction } from "../../../redux/actions/User/user.action"
import GroupIcon from '@mui/icons-material/Group';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  borderRadius: '10%',
  padding: theme.spacing(4, 0),
  color: theme.palette.error.darker,
  backgroundColor: '#CAFAEF'
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
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------


export default function CurrentUser() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.listUser) || []

  const TOTAL = users.length;
  useEffect(() => {
    dispatch(getAllUserAction())

  }, [])
  useEffect(() => {

  }, [users])

  return (
    <RootStyle>
      <IconWrapperStyle>
        <GroupIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72, fontWeight: 900 }}>
        Current Users
      </Typography>
    </RootStyle>
  );
}