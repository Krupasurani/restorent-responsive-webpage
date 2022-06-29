import React from "react";
import "./Award.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { style } from "@mui/system";




const Award =()=>{
    return(
        <div >
        <Grid container  sx={{ bgcolor:'black' ,width: '100%', minHeight: '59rem' }}>
            <div className="Awardf">
            <img className="Ablack" src={require('../images/BG.png')}  ></img>
             <img className="f3" src={require('../images/Awards.png')}></img>
             <div className="fod">
             <img className="foodf" src={require('../images/Mask.png')}></img>
             <img className="g2f" src={require('../images/G-w.png')}></img>
             </div>
             
              </div>
             </Grid>
             </div>

    );
};

export default Award;