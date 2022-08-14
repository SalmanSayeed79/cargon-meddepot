import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import {Box,CircularProgress} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function BatchTable() {
    const navigator=useNavigate()
    const [batchData,setBatchData]=useState([])
    const [loading,setLoading]=useState(true)

    const baseURL="https://cargon-postgres.herokuapp.com"
    const batchDataURL=`${baseURL}/batches`
    const getBatchData =()=>{
        axios.get(batchDataURL).then(res=>{
            setBatchData(res.data)
            setLoading(false)
        })
    }
    useEffect(getBatchData,[])

      const steps = [
        'Order Production Complete',
        'Sent to distributor',
        'Reached Wholesaler',
        'Retailer ',
        'Sold to consumer',
      ];
      
      function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
        const [productData,setProductData]=useState(null)
        const [productLoading,setProductLoading]=useState(true)

        const productURL=`${baseURL}/product/${row.product_id}`
        const getProductInfo=()=>{
            axios.get(productURL).then((res)=>{
                setProductData(res.data)
                setProductLoading(false)
            })
        }

        useEffect(getProductInfo,[])
        return (
          <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' },"&:hover":{backgroundColor:"primary.light"} }}>
              <TableCell align="center">
                {!productLoading && <Box component="img" src={productData.image} sx={{width:"100px",cursor:"pointer"}} onClick={()=>navigator(`/product/${row.product_id}`)}/>}
              </TableCell>
              <TableCell align="right">
                <Box  sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
                  <Typography variant="h3" sx={{fontSize:{xs:"32px",md:"50px"}}} color="primary.main">{row.batch_id}</Typography>
                  <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Batch ID</Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
              <Box  sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
                <Typography variant="h3" sx={{fontSize:{xs:"32px",md:"50px"}}} >{row.product_id}</Typography>
                <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Product ID</Typography>
              </Box>
            </TableCell>
              <TableCell align="right">
                <Box  sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
                  <Typography variant="h3" sx={{fontSize:{xs:"32px",md:"50px"}}}>{row.current_quantity}</Typography>
                  <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Current</Typography>
                </Box>
              </TableCell>
              <TableCell align="right ">
                <Box  sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
                  <Typography variant="h3" sx={{fontSize:{xs:"32px",md:"50px"}}}>{row.initial_quantity}</Typography>
                  <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Initial</Typography>
                </Box>
              </TableCell>
             
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 ,display:"flex",flexDirection:"column"}}>
                    <Typography variant="h6" gutterBottom component="div" sx={{backgroundColor:"primary.main"}} color="white">
                      Batch Details
                    </Typography>
                    <Box>
                       
                        <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Batch ID : {row.batch_id}</Typography>
                        <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Product ID : {row.product_id}</Typography>
                        <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Current Quantity : {row.current_quantity}</Typography>
                        <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Initial Quantity : {row.initial_quantity}</Typography>
                        <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Production Date : {row.production_date}</Typography>
                        <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Expiry Date : {row.expiry_date}</Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom component="div" sx={{backgroundColor:"primary.main"}} color="white">
                         Product Details
                    </Typography>
                    {!productLoading && 
                        
                        <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                            <Box component="img" src={productData.image} sx={{width:"100px",cursor:"pointer"}} onClick={()=>navigator(`/product/${row.product_id}`)}/>
                            <Box sx={{marginLeft:"1vw"}}>
                                <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Name : {productData.name}</Typography>
                                <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Chemical Name : {productData.chemicalName}</Typography>
                                <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Intensity : {productData.intensity}</Typography>
                                <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Variant : {productData.variant}</Typography>
                                <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Price : {productData.price}</Typography>
                            </Box>
                        </Box>
                    }
                  </Box>
                </Collapse>

              </TableCell>
            </TableRow>
          </React.Fragment>
        );
      }
      
      Row.propTypes = {
        row: PropTypes.shape({
          calories: PropTypes.number.isRequired,
          carbs: PropTypes.number.isRequired,
          fat: PropTypes.number.isRequired,
          history: PropTypes.arrayOf(
            PropTypes.shape({
              amount: PropTypes.number.isRequired,
              customerId: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }),
          ).isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          protein: PropTypes.number.isRequired,
        }).isRequired,
      };
      
      
      
  return (
    <Paper sx={{width:"80%",margin:"2vh 0"}}>
    {loading && <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center "}}> <CircularProgress /><Typography>Loading Table Data....</Typography></Box>}
    {!loading && <TableContainer component={Paper} >
        <Table stickyHeader>
            {<TableHead >
                <TableRow>
                
                    <TableCell align="center" sx={{fontSize:"18px"}}>Product</TableCell>
                    <TableCell align="center" sx={{fontSize:"18px"}}>Batch ID</TableCell>
                    <TableCell align="center" sx={{fontSize:"18px"}}>Product ID</TableCell>
                    <TableCell align="center" sx={{fontSize:"18px"}}>Remaining Quantity</TableCell>
                    <TableCell align="center" sx={{fontSize:"18px"}}>Initial Quantity</TableCell>
                    <TableCell />
                </TableRow>
  </TableHead>}

            <TableBody>
                {batchData.map((row) => (
                <Row key={row.batch_id} row={row} />
                ))}
            </TableBody>
        
        </Table>
    </TableContainer>}
    
    </Paper>
  )
}
