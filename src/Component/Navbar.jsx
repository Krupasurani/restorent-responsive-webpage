import React, { useState } from "react";

import { Grid,AppBar, Toolbar, Typography, Tabs, Tab, Box } from "@mui/material";

import Button from '@mui/material/Button';
import DrawerComp from "./DrawerComp";
import { useTheme } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';


const Navbar = ({links}) =>{
    const theme = useTheme();
    console.log(theme);
    
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);

    const [value, setValue]=useState();
    
    return(
        
       
        <AppBar  sx={{backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 100%)'}}>
         <Toolbar >
            {isMatch ? 
            (<>
            <Grid item md={2}>
             <Box bgcolor='black' p={3} color='white' fontSize='25px' textAlign='center'>GERICHT</Box>
                     </Grid>
                 
                 
               <DrawerComp links={links}/>
            </>)
            :<Grid sx={{placeItems:"center"}}container >
                <Grid item xs={2}>
                <Box fontFamily ='Cormorant Upright' bgcolor='black' fontSize='20px' p={3} color='white' textAlign='center'>GERICHT</Box>
                     </Grid>
                     <Grid item xs={1} />
                <Grid items md={5}>
                 <Tabs   textColor="error" indicatorColor="secondary"    value={0} onChange={(e,val)=> setValue} sx={{color:"white"}}>        
                  {links.map((link,index)=>(<Tab key={index}label={link}/>))}  
                 </Tabs>
                </Grid>
                <Grid item xs={1} />
                <Grid items xs={3}>
                
                    <Box display="flex" >
                    <Typography sx={{color:'white'}}>
                    
                </Typography>
                        <Button variant="text" sx={{color:"white", marginLeft: "auto",backgroundColor:'black'}}>Log in/Registraton</Button>
                    <Button variant="contained" sx={{marginLeft:'1px' ,color: "white",backgroundColor:"black"}}>Book Table</Button>
                    </Box>
                </Grid>
                
            </Grid>}
         </Toolbar>
         </AppBar>
    )
    
}
export default Navbar;