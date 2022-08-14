import { Modal, Paper,Stepper ,InputLabel,StepLabel,Step,Box,Select,MenuItem, Typography,TextField, Button, IconButton} from '@mui/material'
import React,{useEffect, useState} from 'react'
import {Close} from '@mui/icons-material';
import axios from 'axios';

export default function CreateBatchModal(props) {
  
  const [products,setProducts]=useState([])

  const [product_id,setProduct_id]=useState(null)
  const [quantity,setQuantity]=useState(null)
  const [production_date,setProduction_date]=useState(null)
  const [expiry_date,setExpiry_date]=useState(null)


  const baseURL="https://cargon-postgres.herokuapp.com"
  const formURL=`${baseURL}/batch/create`
  const productsURL=`${baseURL}/products`
  const submitForm =()=>{
    axios.post(formURL,{
        product_id,
        "initial_quantity":quantity,
        "current_quantity":quantity,
        production_date,
        expiry_date
       
      
    }).then(()=>{
      alert("Successfully Added Batch")
      navigator("/products")
    })
    .catch(()=>{
      alert("Adding batch failed")
      navigator("/products")
  })
  }
  const getProducts=()=>{
    axios.get(productsURL).then(res=>setProducts(res.data))
  }
  useEffect(getProducts,[])
  return (
    <Modal open={props.open} sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Paper elevation={6} sx={{position:"relative",width:"80vw",minHeight:"80vh",overflowY:"scroll",display:"flex",alignItems:"center",justifyContent:"center"}}>
          
        <Box component="img" src="https://i.postimg.cc/T2tBYTDJ/4342524-19454.jpg" sx={{display:{xs:"none",md:"block"},objectFit: "cover",width:"50%",height:"100%"}}/>

        <Box sx={{width:{xs:"90%",md:"50%"},marginLeft:"5vw"}}>
        <Box sx={{position:"absolute",top:"10px",right:"10px"}}><IconButton onClick={()=>props.setOpen(false)}><Close color="primary"/></IconButton></Box>
          <Box sx={{margin:"2vh 0"}}>
              <Typography variant="h5" color="primary.main" >Add a new batch</Typography>
          </Box>
      
          
          {/** BASIC INFO */}
          <Box sx={{width:"80%",margin:"2vh 0"}}>
            <InputLabel>Product</InputLabel>
                <Select
                label="Hello"
                fullWidth
                variant='outlined'
                onChange={e=>setProduct_id(e.target.value)}
                value={product_id}
                >
                   {products.map(prod=><MenuItem value={prod.product_id}>{prod.name}</MenuItem>) }
                  
                </Select>
            <InputLabel>Quantity</InputLabel>
            <TextField variant="outlined" value={quantity} type="number" fullWidth onChange={e=>{
              setQuantity(e.target.value)
            }} />
           
            
       
            <InputLabel>Production Date</InputLabel>
            <TextField  type="date" variant="outlined" fullWidth value={production_date} onChange={e=>setProduction_date(e.target.value)} />
            <InputLabel>Expiry Date</InputLabel>
            <TextField  type="date" variant="outlined" fullWidth value={expiry_date} onChange={e=>setExpiry_date(e.target.value)} />

            <Box sx={{margin:"2vh 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Button variant="contained" sx={{margin:"0 1vw"}} onClick={()=>props.setOpen(false)}><Typography>Cancel</Typography></Button>
              <Button variant="contained" sx={{margin:"0 1vw"}} onClick={submitForm}><Typography>Create</Typography></Button>
              
            </Box>
          </Box>

          </Box>
        
      
          
         
          
      </Paper>
    
    </Modal>
  )
}
