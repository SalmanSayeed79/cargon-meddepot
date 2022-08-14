import React, { useContext,useEffect,useState } from "react";
import { Box, Typography, Grid, Divider, Paper,CircularProgress,ImageList,ImageListItem } from "@mui/material";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import GoogleMapReact from 'google-map-react';
import { FactoryIDContext } from "../Context/IDContextProvider";
import axios from 'axios'



export default function Factory() {

  const [loading,setLoading]=useState(true)
  const [data,setData]=useState(null)
  const factoryIDSaved=useContext(FactoryIDContext)
  const baseURL="https://cargon-postgres.herokuapp.com"
  const factoryURL=`${baseURL}/factory/${factoryIDSaved}`
//{name:"Salman",address:"Helo",experience:"2",}
  const getAdminInfo = () => {
    setLoading(true);
    axios.get(factoryURL)
      .then((a) => {
        setData(a.data)
        setLoading(false)
      })
   
  };
  useEffect(getAdminInfo,[])
  return (
    <Paper sx={{ minHeight: "100vh", width: "100vw" }}>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar active={7} />
        </Grid>
        <Divider />
        <Grid item xs={10}>
        {loading && (
          <Box
            sx={{
              width: "100%",
              minHeight: "100vh",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CircularProgress />
            <Typography>Loading Factory Data....</Typography>
          </Box>
        )}
          {!loading && 
          <Box>
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
              Factory Details
            </Typography>
          </Box>
          <Box
            component="img"
            src="https://i.postimg.cc/C1pZBP0B/1935.jpg"
            sx={{ width: "100%", height: {xs:"25vh",md:"35vh"}, objectFit: "cover" }}
          />

          <Box>
              <Typography variant="h4">{data.name}</Typography>
              <Typography>{data.address}</Typography>
              <Box sx={{marginTop:"2vh",width:"80%"}}>
                <Typography variant="h6">Details</Typography>
                <Typography variant="p">{data.details}</Typography>
              </Box>
              <Box sx={{marginTop:"2vh",width:"80%"}}>
                <Typography variant="h6">Region</Typography>
                <Typography variant="p">{data.region}</Typography>
              </Box>
              <Box sx={{height:"30vh",width:"100%",marginTop:"2vh"}}>
                <Typography variant="h6">Adminstrator Details</Typography>
                <Typography variant="p">Salman Sayeed</Typography>
              </Box>
              {/* <Box sx={{height:"30vh",width:"100%"}}>
             <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCDEMTUghC8k1ScaSaZvQ0VtfQzAo6Xg3k" }}
                defaultCenter={{lat:59.955413,lng:30.337844}}
                defaultZoom={11}
       
                
              >
                
            </GoogleMapReact>
           
              </Box>*/}
            </Box>
          </Box>}
        </Grid>
      </Grid>
    </Paper>
  );
}
