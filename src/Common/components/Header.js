import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../css/header.css"
import ImgHero from "../img/img-hero.svg"

export const Header = () => {
    return (
       <div className="jumbotron">
           <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div ClassName="MGleft">
                        <h1>Receipe Contest</h1>
                        <p>Receipe contests are like our big, constantly-in-progress dinner party—and you're invited.</p>
                        <a>how they work?</a>
                    </div>  
                </Grid>
                <Grid item xs={8}>
                   <img src={ImgHero}/>
                </Grid>
            </Grid>
       </div>
    );
}
export default Header;
