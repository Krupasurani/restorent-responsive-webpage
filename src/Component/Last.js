import React from "react";
import "./Last.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { style } from "@mui/system";
import TextField from '@mui/material/TextField';





const Last =()=>{
    return(
        <div >
             <Grid container className="bg8" sx={{ bgcolor:'black' ,width: '100%', minHeight: '30rem' }}>
             <div className="findf">
                 <img className="blacf2" src={require('../images/malik.png')}  style={{width:'100%'}}></img>

                 <div className="contentf">
                    <div className="lastt">
                        <div className="news">Newsletter</div>
                        <div className="subscribe">Subscribe To Our Newsletter</div>
                        <div className="miss">And never miss latest updates!</div>
                        <TextField className="textfielf"  id="outlined-basic" label="Email addrees" variant="outlined" />
                      <div className="btn8">Subscribe</div>
                    </div>
                 </div>
                 <img className="la1" src={require('../images/l1.png')}  ></img>
                 <img className="la2" src={require('../images/l2.png')}  ></img>
                 <img className="la3" src={require('../images/l3.png')}  ></img>
                 </div>
             </Grid>
             </div>
    )
};
export default Last;