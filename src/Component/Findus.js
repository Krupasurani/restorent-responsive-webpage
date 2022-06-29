import React from "react";
import "./Find.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { style } from "@mui/system";




const Findus =()=>{
    return(
        <div >
             <Grid container className="bg7" sx={{ bgcolor:'black' ,width: '100%', minHeight: '59rem' }}>
                 <div className="findf">
                 <img className="blacf1" src={require('../images/malik.png')}  style={{width:'100%'}}></img>
                  <img className="sharbat" src={require('../images/glass.png')}></img>
                  <div className="likhavat">
                    <div className="contactword">Contact</div>
                    <div className="findme"> Find us</div>
                    <div className="longf">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</div>
                    <div className="fa2">
                        <div className="openf">Opening Hours</div>
                        <div className="date1">Mon - Fri: 10:00 am - 02:00 am </div>
                        <div className="date2">Sat - Sun: 10:00 am - 03:00 am</div>
                    </div>
                   
                  </div>
                </div>
             </Grid>
        
        </div>

    );
};

export default Findus;