import React from "react";
import "./Gallery.css";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { style } from "@mui/system";




const Gallery=()=>{
    return(
        <div >
        <Grid container  sx={{ bgcolor:'black' ,width: '100%', minHeight: '20rem' }}></Grid>
        
        <div className="galery">
            <div className="pgalery">
                <div className="insta">Instagram</div>
                <div className="pgf">Photo Gallery</div>
                <div className="pa">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</div>
                <Button className="btn6" sx={{bgcolor:'#DCCA87', color:'black' }}variant="contained">View more</Button>
            </div>
            <div className="photogro">
              <img className="fo1" src={require('../images/fl1.png')}></img>
              <img className="fo2" src={require('../images/fl2.png')}></img>
              <img className="fo21" src={require('../images/fl22.png')}></img>
             <img className="fo3" src={require('../images/fl3.png')}></img>
               <img className="fo4" src={require('../images/fl4.png')}></img>
              </div>
        </div>
        
        </div>
    )
}
export default Gallery;