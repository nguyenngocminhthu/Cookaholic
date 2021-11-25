import React from 'react'
import Grid from '@mui/material/Grid';
import "../css/header.css"
import ImgHero from "../img/img-hero.svg"


const Header = () => {

    return (
        <div>
            <div className="jumbotron">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div className="MGleft">
                            <h1>Receipe Contest</h1>
                            <p>Receipe contests are like our big, constantly-in-progress dinner party—and you're invited.</p>
                            <a>how they work?</a>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <img className="img-header" src={ImgHero} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default Header;
