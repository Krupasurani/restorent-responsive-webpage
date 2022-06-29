import React from "react";
import "./Special.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { style } from "@mui/system";




const Special =()=>{
    return(
        
        <div >
        <Grid container  sx={{ bgcolor:'black' ,width: '100%', minHeight: '40rem' }}>
            <div className="tspecial">
                <div className="maintitl">
                  <div className="thefits">Menu that fits you palatte</div>
                  <div className="bigtitl">Today’s Special </div>  
                </div>
           
            
            <img className="winef" src={require('../images/Wine.png')}></img>
            
            
                <img className="jugu" src={require('../images/jug.png')}></img>
                <Button className="btn4" sx={{bgcolor:'#DCCA87', color:'black' }}variant="contained">View more</Button>
           
            <img className="Cocktailsf" src={require('../images/Cocktails.png')}></img>
           
            </div>
            
        </Grid>
        </div>

    );
};

export default Special;