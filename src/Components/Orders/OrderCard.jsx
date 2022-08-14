import { AddAPhoto, ArrowForward, AssignmentInd, ExpandMore, Group, LineAxisOutlined, Man, Pending, SwipeRight } from '@mui/icons-material';
import { Paper,Select,Stepper,Step,StepLabel,Accordion,Divider,AccordionSummary,AccordionDetails,Box, Typography, StepContent, Button, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import OrderHandling from './OrderHandling';
export default function OrderCard({data}) {
  const navigator=useNavigate()
  const [activeStep,setActiveStep]=useState(2)
  const productIdList=[48,36,122]

  const baseURL="https://cargon-postgres.herokuapp.com"
  const orderURL=`${baseURL}/orders`
  const totalOrderURL=`${baseURL}/orderCount`
  const todayOrderURL=`${baseURL}/orderCount`
  const filledOrderURL=`${baseURL}/orderCount`

  useEffect(()=>{
    
  },[])
  return (
    <Accordion sx={{width:"100%",minHeight:"12vh",margin:"1vh 0"}} elevation={3}>
      <AccordionSummary>
        <Box sx={{width:"50%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:"1vw",marginBottom:"2vh"}}>
          <Typography variant="h6">Order # {data.order_id}</Typography>
          <Typography variant="p"><Moment format="D MMM YYYY , HH:MM" withTitle>{Date.now()}</Moment></Typography>
          <Typography color="success.main">Esitmated Delivery on <Moment format="D MMM" withTitle>{Date.now()}</Moment></Typography>
        </Box>
        <Box sx={{width:"50%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",marginLeft:"1vw",marginBottom:"2vh"}}>
          <Button onClick={()=>navigator(`/order/${data.order_id}`)} variant="contained" ><Typography variant="h6">Get Details</Typography></Button>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Divider />
          <Box sx={{padding :"2vh 1vw",width:"50%"}}>
            <Typography variant="h6" color="primary.main">ACI</Typography>
            <Typography>Price : 200tk</Typography>
            <Typography>Qty : 100</Typography>
          
          </Box>
        <Divider />
        <Box>
          <Typography variant="h6" sx={{margin:"1vh 1vw"}}>Inistantiate Order</Typography>
          <OrderHandling id={52}/>
        </Box>
        <Divider />
        <Box sx={{margin:"1vh 1vw"}}>
          <Typography variant="h6" sx={{margin:"1vh 1vw"}}>Assign Distributor</Typography>
          <Select fullWidth>
              <MenuItem value="karim">karim</MenuItem>
          </Select>
          <Button variant="contained"><Typography variant="h6">Assign</Typography></Button>
        </Box>

        
      </AccordionDetails>
  
    </Accordion>
  )
}
