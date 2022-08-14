import { Paper,Box ,Typography, CircularProgress} from '@mui/material'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function BatchCard({data}) {
  const [productData,setProductData]=useState(null)
  const [loading,setLoading]=useState(true)
  const baseURL="https://cargon-postgres.herokuapp.com"
  const productURL=`${baseURL}/product/${data.product_id}`
  const getProductData=()=>{
    axios.get(productURL).then((res)=> {
      setProductData(res.data)
      setLoading(false)
    })
  }
  useEffect(getProductData,[])
  return (
    <Paper elevation={5} sx={{width:"100%",minHeight:"10vh",margin:"2vh 0",display:"flex",alignItems:"center",justifyContent:"space-around",cursor:"pointer"}}>
      {!loading && <Box  sx={{width:{md:"20%"},display:{xs:"none",md:"flex"},flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
        <Typography variant="h3">{data.batch_id}</Typography>
        <Typography >Batch ID</Typography>
      </Box>}
        
        {!loading && <Box sx={{width:"40%"}}>
          <Typography variant="h5" color="primary.main">{productData.name}</Typography>
          <Typography>{productData.chemicalName}</Typography>
          </Box>}
        {loading && <CircularProgress/>}
        {!loading && <Box sx={{display:"flex",width:"40%" ,alignItems:"center",justifyContent:"space-around"}}>
          
          
          <Box  sx={{width:{xs:"40%",md:"20%"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
            <Typography variant="h3" sx={{fontSize:{xs:"32px",md:"50px"}}}>{data.initial_quantity}</Typography>
            <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Total</Typography>
          </Box>
          
        </Box>}
    </Paper>
  )
}
