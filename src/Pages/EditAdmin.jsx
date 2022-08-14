import React from 'react'
import {Box,Typography,Grid, Divider} from "@mui/material"
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
export default function EditAdmin() {
  return (
    <Box sx={{height:"100vh",width:"100vw"}}>
        <Navbar/>
        <Grid container> 
          <Grid item xs={2}>
            <Sidebar active={1}/>
          </Grid>
          <Divider />
          <Grid item xs={10}>
            <Box sx={{marginTop:{xs:"7vh",md:"6.5vh"}}}> 
              <Typography>Edit Admin Details</Typography>
            </Box>
            
          </Grid>
        </Grid>
       
    </Box>
  )
}
