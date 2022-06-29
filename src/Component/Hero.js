import React from "react";
import "./Hero.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';



const Hero =()=>{
    return(
      <div >
      <Grid container  sx={{ bgcolor:'black' , minHeight: '54rem' }}>
      
      <Grid item xs={6} md={4}>
      
    
  
      <div className="textf1">
        <div className="ches">Chase the new Flavour </div>
        <div className="thekey">The key to Fine dining</div>
        <div className= "sittell">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </div>
        <Button className="btn1" sx={{bgcolor:'#DCCA87', color:'black'}}variant="contained">Explore Menu</Button>
      </div>
      </Grid>
        <Grid item xs={6} md={8}>

    
      
        <div className="squaref">
          <div className="ssquaref1" id="ssquaref1"></div>
          <div className="ssquaref2"id="ssquaref2"></div>
          <img className="foodp1" src={require("../images/hp.png")}></img>
        </div>
        </Grid>
        
      
      </Grid>
      
      </div>
     
    );
    
};

export default Hero;