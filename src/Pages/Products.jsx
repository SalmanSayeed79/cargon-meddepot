import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import CountUp from "react-countup";
import { Box,InputAdornment,ButtonGroup,CircularProgress, Typography, Grid, Paper, Divider, Select, MenuItem, TextField,Button } from "@mui/material";
import OrderTable from "../Components/OrderTable";
import ProductCard from '../Components/Products/ProductCard';
//import { productsList } from '../Components/Products/ProductsList';
import CreateProductModal from '../Components/Products/CreateProductModal';
import { Add, LineAxisOutlined, Search } from '@mui/icons-material';
import axios from 'axios';


export default function Products() {
  
  const [createProductModalOpen,setCreateProductModalOpen]=useState(false)
  const [productsList,setProductsList]=useState([])
  const [genericCount,setGenericCount]=useState(null)
  const [brandCount,setBrandCount]=useState(null)
  const [productCount,setProductCount]=useState(null)

  const [searchValue,setSearchValue]=useState(null)

  const [loading,setLoading]=useState(true)
  const [cardLoading,setCardLoading]=useState(true)

  //const baseURL="http://localhost:8081"
  const baseURL="https://cargon-postgres.herokuapp.com"
  const productURL=`${baseURL}/products`
  const productCountURL=`${baseURL}/productCount`
  const genericsCountURL=`${baseURL}/genericCount`
  const brandCountURL=`${baseURL}/brandCount`

  const getByNameURL=`${baseURL}/product/name/${searchValue}`

  const headers={
    'Content-Type':"application/json"
  }
  const handleCreateProductClick=()=>{
    setCreateProductModalOpen(!createProductModalOpen)
  }

  const getCardInfo=async ()=>{
    axios.get(productCountURL,{headers}).then(res=>{
      setProductCount(res.data)
    })
    axios.get(genericsCountURL,{headers}).then(res=>{
      setGenericCount(res.data)
    })
    axios.get(brandCountURL,{headers}).then(res=>{
      setBrandCount(res.data)
    }).then(()=>setCardLoading(false))
    
  }
  const getProducts=async ()=>{
    axios.get(productURL).then(res=>{
      setProductsList(res.data)
      setLoading(false)
    })
  }
  const getProductsByName=async ()=>{
    setLoading(true)
    axios.get(getByNameURL).then(res=>{
      setProductsList(res.data)
      setLoading(false)
    })
  }


  useEffect(()=>{
    getCardInfo();
    getProducts();
    
    //setLoading(false);
  },[])
  return (
    <Paper sx={{minHeight:"100vh",width:"100vw"}}>
        <Navbar/>
        <Grid container> 
          <Grid item xs={2}>
            <Sidebar active={4}/>
          </Grid>
          <Divider />
          <Grid item xs={10} md={7}>
          <CreateProductModal open={createProductModalOpen} setOpen={setCreateProductModalOpen}/>
          
          <Box>
            <Typography
              variant="h3"
              color="primary"
              sx={{
                marginTop: "1rem",
                fontSize: { xs: "36px", md: "56px" },
                textAlign: "left",
              }}
            >
              Product Management
            </Typography>
            <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"flex-start",marginTop:"2rem"}}>
              <ButtonGroup variant="contained">
                <Button><Add/></Button>
                <Button onClick={handleCreateProductClick}><Typography>Create new product</Typography></Button>
              </ButtonGroup>
           
            </Box>
            <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"flex-start"}}>
            <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",backgroundColor:"success.light"}}>
              <Box sx={{marginLeft:"20px"}}>
              {!cardLoading && <Typography variant="h2" ><CountUp start={0} duration={1} end={genericCount} ></CountUp></Typography>}
              {cardLoading && <CircularProgress/>}
              <Typography variant="h6" >	&#128176; Total generics</Typography>
              </Box>
            </Paper>
            <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",backgroundColor:"secondary.light"}}>
              <Box sx={{marginLeft:"20px"}}>
              {!cardLoading && <Typography variant="h2" ><CountUp start={0} duration={1} end={brandCount} ></CountUp></Typography>}
              {cardLoading && <CircularProgress/>}
              <Typography variant="h6" >&#128197; Total Brand Names</Typography>
              </Box>
            </Paper>
              <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",backgroundColor:"primary.light"}}>
              <Box sx={{marginLeft:"20px"}}>
              {!cardLoading && <Typography variant="h2" ><CountUp start={0} duration={1} end={productCount} ></CountUp></Typography>}
              {cardLoading && <CircularProgress/>}
              <Typography variant="h6" >&#10004; Total Products</Typography>
              </Box>
            </Paper>
           
            </Box>

              <TextField
                placeholder="Search by name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}

              sx={{width:{xs:"90%",md:"80%"},marginTop:"4vh"}}
                onChange={(e)=>{
                  if(e.target.value!=null && e.target.value!=""){
                    setSearchValue(e.target.value)
                    getProductsByName()
                  }
                  else{
                    getProducts()
                  }
                  
                }}
              />
              <Box sx={{display:"flex",flexWrap:"wrap",width:{xs:"90%",md:"90%"},alignItems:"center",margin:"2rem 0"}}>
                {!loading && productsList.map(item=><ProductCard data={item}/>)}
                {loading && <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center "}}> <CircularProgress /><Typography>Loading Product Data....</Typography></Box>}
              </Box>
            
          </Box>
        </Grid>
        <Grid item xs={0} md={3}>
              <Paper elevation={2} sx={{height:"100vh",display:{xs:"none",md:"flex"},position:"sticky",top:"0",right:"0",paddingLeft:"1rem",flexDirection:"column",justifyContent:"flex-start"}}>
                <Typography variant="h4" sx={{margin:"1rem 0"}}>&#127760; Filters</Typography>
                <Box sx={{display:"flex",width:"80%",alignItems:"center",justifyContent:"space-between"}}>
                  <Typography>Sort By</Typography>
                  <Select label="Sort By" value="ascending" onChange={()=>console.log("Hello")} sx={{width:"60%",marginBottom:"1rem"}}>
                    <MenuItem value={10}>Price</MenuItem>
                    <MenuItem value={20}>Quantity</MenuItem>
                    <MenuItem value={20}>Total Cost</MenuItem>
                  </Select>

                </Box>
                <Box sx={{display:"flex",width:"80%",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Sort Direction</Typography>
                  <Select label="Sort Direction" value="ascending" onChange={()=>console.log("Hello")} sx={{width:"60%"}}>
                    <MenuItem value={10}>Ascending</MenuItem>
                    <MenuItem value={20}>Descending</MenuItem>
                  </Select>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",width:"80%",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Price range</Typography>
                  <Box sx={{display:"flex"}}>
                    <TextField label="Lower Bound"  onChange={()=>console.log("Hello")} sx={{width:"60%",margin:"0 1rem"}}/>
                    <TextField label="Upper Bound"  onChange={()=>console.log("Hello")} sx={{width:"60%"}}/>
                  </Box>
                </Box>

                <Box sx={{display:"flex",width:"80%",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Search by distributor</Typography>
                
                    <TextField label="Distributor Name"  onChange={()=>console.log("Hello")} sx={{width:"60%",margin:"0 1rem"}}/>
               
                </Box>

                <Box sx={{display:"flex",width:"80%",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Search by wholesaler</Typography>
                 
                    <TextField label="Wholesaler Name"  onChange={()=>console.log("Hello")} sx={{width:"60%",margin:"0 1rem"}}/>
                
                </Box>

                <Box sx={{display:"flex",width:"80%",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"1rem"}}>
                  <Typography>Search by date</Typography>
                  
                    <TextField type="date"  onChange={()=>console.log("Hello")} sx={{width:"60%",margin:"0 1rem"}}/>
                
                </Box>

                <Button variant="contained" sx={{width:"80%"}}><Typography>Apply Filters</Typography></Button>
                
              </Paper>
        </Grid>
            
          </Grid>
     
       
    </Paper>
  )
}
