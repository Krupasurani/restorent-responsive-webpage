import React from "react";
import "./History.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { style } from "@mui/system";




const History =()=>{
    return(
         
        <div >
              <Grid container  sx={{ bgcolor:'black' ,width: '100%', minHeight: '49rem' }}>
      
            <div className="historybg">
          <img className="bgf" src={require('../images/malik.png')}  style={{width:'100%'}}></img>
          <img className="gf" src={require('../images/G.png')}  ></img>
          <img className="knivef" src={require('../images/knive.png')}  ></img>
         
          
         
            
        
          <div className="aboutit">
            <div className="tif" sx={{color:'white'}}>About Us</div>
            <div className="parf" sx={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</div>
            <Button className="btn2" sx={{bgcolor:'#DCCA87', color:'black'}}variant="contained">Know more</Button>
         </div>
    
       
           
       
  
          <div className="ourhistoryf">
            <div className="tif2" sx={{color:'white'}}>Our history</div>
            <div className="parf2" sx={{color:'white'}}>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</div>
            <Button className="btn3" sx={{bgcolor:'#DCCA87', color:'black'}}variant="contained">Know more</Button>
         </div>
        
          
          
          </div>
         </Grid>
        
    
        
        </div>
    );
};
export default History;
