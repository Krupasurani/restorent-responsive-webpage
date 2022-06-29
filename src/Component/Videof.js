import React from "react";
import "./Videog.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { style } from "@mui/system";




const Videof =()=>{
    return(
        <div >
             <Grid container  sx={{ bgcolor:'black' ,width: '100%', minHeight: '480px' }}>
             <img className="videog" src={require('../images/Video.png')}  style={{width:'100%'}}></img>
               
             </Grid>
             </div>
    )
}
export default Videof;