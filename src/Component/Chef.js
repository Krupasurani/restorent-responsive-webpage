import React from "react";
import "./Chef.css"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { style } from "@mui/system";




const Chef =()=>{
    return(
        <div >
             <Grid container className="bg4" sx={{ bgcolor:'black' ,width: '100%', minHeight: '59rem' }}>
                 <div className="chefp">
                 <img className="blacf" src={require('../images/malik.png')}  style={{width:'100%'}}></img>
                  <img className="chf" src={require('../images/chef.png')}></img>
                  <div className="tec">
                    <div className="chefword">Chef’s Word</div>
                    <div className="whatwe"> What we believe in </div>
                    <div className="parl">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</div>
                    <div className="fa">
                        <div className="kevin">Kevin Luo</div>
                        <div className="luo">Chef & Founder</div>
                    </div>
                    <div className="signa">
                        <img className="signa" src={require('../images/Kevinl.png')}></img>
                    </div>
                  </div>
                </div>
             </Grid>
        
        </div>

    );
};

export default Chef;