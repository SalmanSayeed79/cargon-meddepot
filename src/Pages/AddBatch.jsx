import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import CountUp from "react-countup";
import { Box, Typography, Grid, Paper, Divider, Select, MenuItem, TextField,Button, ButtonGroup } from "@mui/material";
import OrderTable from "../Components/OrderTable";
import ProductCard from '../Components/Products/ProductCard';
import { productsList } from '../Components/Products/ProductsList';
import { Add } from '@mui/icons-material';
import BatchTable from '../Components/Batches/BatchTable';
import CreateBatchModal from '../Components/Batches/CreateBatchModal';
export default function AddBatch() {
  const [createBatchModalOpen,setCreateBatchModalOpen]=useState(false)

  const handleModalOpen=()=>{
    setCreateBatchModalOpen(!createBatchModalOpen)
  }

  return (
    <Paper sx={{minHeight:"100vh",width:"100vw"}}>
        <Navbar/>
        <Grid container> 
          <Grid item xs={2}>
            <Sidebar active={6}/>
          </Grid>
          <Divider />
          <Grid item xs={10} md={10}>
          <CreateBatchModal open={createBatchModalOpen} setOpen={handleModalOpen}/>
          <Box >
            <Typography
              variant="h3"
              color="primary"
              sx={{
                marginTop: "1rem",
                fontSize: { xs: "36px", md: "56px" },
                textAlign: "left",
              }}
            >
              Create New Batch
            </Typography>
            <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"flex-start",marginTop:"2rem"}}>
              <ButtonGroup variant="contained">
                <Button><Add/></Button>
                <Button onClick={handleModalOpen}><Typography>Create new batch</Typography></Button>
              </ButtonGroup>
           
            </Box>
            <Box sx={{margin:"2vh 0"}}>
              <Typography variant="h4">Recent Batches</Typography>
              <BatchTable/>
            </Box>
            
              
            
          </Box>
        </Grid>
            
          </Grid>
     
       
    </Paper>
  )
}

