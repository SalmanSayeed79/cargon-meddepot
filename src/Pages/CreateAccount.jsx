import React,{useContext, useState} from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
  Paper,
  Link,
  Stepper,
  StepLabel,
  InputLabel,
  Step,
  CircularProgress,
  Snackbar,
  Alert
} from "@mui/material";
import { LineAxisSharp, LockOutlined } from "@mui/icons-material";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { AdminIDContext, AdminIDUpdateContext, FactoryIDContext, FactoryIDUpdateContext } from "../Context/IDContextProvider";
import { UserAuth } from '../Context/AuthContext';

export default function CreateAccount() {

  const navigator= useNavigate()
  const updateAdminID=useContext(AdminIDUpdateContext)
  const adminIDSaved=useContext(AdminIDContext)
  const factoryIDSaved=useContext(FactoryIDContext)
  const updateFactoryID=useContext(FactoryIDUpdateContext)

  const [loadingAdmin,setLoadingAdmin]=useState(false)
  const [loadingFactory,setLoadingFactory]=useState(false)

  const [successSnackbar,setSuccessSnackBar]=useState(false)
  const [failSnackBar,setFailSnackBar]=useState(false)

  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const [confirmPassword,setConfirmPassword]=useState(null)
  const [name,setName]=useState(null)
  const [experience,setExperience]=useState(null)
  const [phoneNumber,setPhoneNumber]=useState(null)
  const [address,setAddress]=useState(null)
  const [userImage,setUserImage]=useState(null)

  const [adminID,setAdminID]=useState(null)
  const [factoryAddress,setFactoryAddress]=useState(null)
  const [region,setRegion]=useState(null)
  const [factoryName,setFactoryName]=useState(null)
  const [factoryImage,setFactoryImage]=useState(null)
  const [factoryDetails,setFactoryDetails]=useState(null)
  const [lat,setLat]=useState(null)
  const [lng,setLng]=useState(null)

  const { createUser } = UserAuth();
  const closeSnackBar=()=>{
    setSuccessSnackBar(false)
    setFailSnackBar(false)
  }

  const handleSubmit = () => {
    navigator("/home");
  };
  const handleLogin=()=>{
    navigator("/")
  }
  const [activeStep,setActiveStep]=useState(0)
  const handleStepNext=()=>{
    setActiveStep(prev=>prev+1)
  }
  const handleStepPrev=()=>{
    setActiveStep(prev=>prev-1)
  }
  const addAdminstrator=async ()=>{
    setLoadingAdmin(true)
    try {
      await createUser(email, password);
    } catch (e) {
      console.log(e.message);
    }
    axios.post(`${baseURL}/adminstrator`,{
      "name":name,
      "address":address,
      "phoneNumber":phoneNumber,
      "image":userImage,
      "experience":experience,
      "email":email
    })
    .then((res)=>{
      updateAdminID(res.data.adminstrator_id)
      setLoadingAdmin(false)
      //alert("Admin Created")
      setSuccessSnackBar(true)
      handleStepNext()
    })
    .catch(e=>{
      setLoadingAdmin(false)
      setFailSnackBar(true)
      console.log(e)
      //alert("Some Error Occured")
    })
  }

  const baseURL="https://cargon-postgres.herokuapp.com"
  const addFactory=()=>{
    setLoadingFactory(true)
    axios.post(`${baseURL}/factory`,{
      "name":factoryName,
      "address":factoryAddress,
      "region":region,
      "image":factoryImage,
      "lat":lat,
      "lng":lng,
      "details":factoryDetails,
      "adminstrator_id":adminIDSaved
    })
    .then((res)=>{
      updateFactoryID(res.data.factory_id)
      setLoadingAdmin(false)
    })
    .catch(e=>alert("Some Error Occured"))
  }
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: { xs: "90%", md: "70%" },
          minHeight: "70%",
          margin:"5vh 0",
          padding: "2vh 0",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", md: "50%" },
            backgroundColor: "primary.light",
          }}
          component="img"
          src="https://i.postimg.cc/MGzSZHBN/undraw-Thought-process-re-om58.png"
        />

        <Box
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "80%", md: "50%" },
            padding: { md: "3rem" },
            paddingBottom: { xs: "1rem", md: 0 },
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel sx={{width:"80%",margin:"2vh 0"}}>
              <Step key={1} ><StepLabel>"Admin Information"</StepLabel></Step>
              <Step key={2} activeStep><StepLabel>"Factory Information"</StepLabel></Step>
              <Step key={3}><StepLabel>"Finalization"</StepLabel></Step>
            
          </Stepper>
          {/**Admin INFO */}
          {activeStep==0 && !loadingAdmin && <Box
            sx={{ mt: 1 }}
          >
          <InputLabel>Name</InputLabel>
          <TextField  variant="outlined" fullWidth value={name} onChange={e=>setName(e.target.value)} />
          <InputLabel>Image</InputLabel>
          <TextField variant="outlined" fullWidth value={userImage} onChange={e=>setUserImage(e.target.value)} />
          <InputLabel>Phone Number</InputLabel>
          <TextField   variant="outlined" value={phoneNumber} fullWidth onChange={e=>setPhoneNumber(e.target.value)} />
          <InputLabel>Address</InputLabel>
          <TextField  variant="outlined" fullWidth value={address} onChange={e=>setAddress(e.target.value)} />
          <InputLabel>Experience</InputLabel>
          <TextField  type="number" variant="outlined" fullWidth value={experience} onChange={e=>setExperience(e.target.value)} />
          <InputLabel>Email</InputLabel>
          <TextField variant="outlined" fullWidth value={email} onChange={e=>setEmail(e.target.value)} />
          <InputLabel>Password</InputLabel>
          <TextField type="password" variant="outlined" fullWidth value={password} onChange={e=>setPassword(e.target.value)} />
          <InputLabel>Confirm Password </InputLabel>
          <TextField type="password" variant="outlined" fullWidth value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
          
           
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{
                addAdminstrator();
                //handleStepNext();
                
              }}
            >
              Next
            </Button>
            <Grid container>
            <Grid item>
              <Link onClick={handleLogin} variant="body2" sx={{cursor:"pointer"}}>
                {"Have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
          </Box>}
          {activeStep==0 && loadingAdmin && <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center "}}> <CircularProgress /><Typography>Adding User Data....</Typography></Box>}

           {/**BASIC FACTORY INFO */}
           {activeStep==1&& !loadingFactory && <Box
            sx={{ mt: 1 }}
          >
          <InputLabel>Factory Name</InputLabel>
          <TextField  variant="outlined" fullWidth value={factoryName} onChange={e=>setFactoryName(e.target.value)} />
          <InputLabel>Factory Image</InputLabel>
          <TextField variant="outlined" fullWidth value={factoryImage} onChange={e=>setFactoryImage(e.target.value)} />
          <InputLabel>Factory Address</InputLabel>
          <TextField variant="outlined" fullWidth value={factoryAddress} onChange={e=>setFactoryAddress(e.target.value)} />
          <InputLabel>Factory Details</InputLabel>
          <TextField   variant="outlined" value={factoryDetails} fullWidth onChange={e=>setFactoryDetails(e.target.value)} />
          <InputLabel>Factory Region</InputLabel>
          <TextField  variant="outlined" fullWidth value={region} onChange={e=>setRegion(e.target.value)} />
          <InputLabel>Latitude</InputLabel>
          <TextField  type="number" variant="outlined" fullWidth value={lat} onChange={e=>setLat(e.target.value)} />
          <InputLabel>Longitude</InputLabel>
          <TextField variant="outlined" fullWidth value={lng} onChange={e=>setLng(e.target.value)} />
          
          
           
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{
                handleStepNext();
                addFactory();
              }}
            >
              Next
            </Button>
           
          </Box>}
          {activeStep==1 && loadingFactory && <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center "}}> <CircularProgress /><Typography>Adding Factory Information....</Typography></Box>}
          {/**FINAL INFO */}
          {activeStep==2 && <Box
            sx={{ mt: 1 }}
          >
              <Paper sx={{padding:"2vh 2vw",margin:"1vh 0"}} elevation="2">
                <Typography>YOUR ADMIN ID IS </Typography>
                <Typography variant="h6" color="success.main">{adminIDSaved} </Typography>
              </Paper>
              <Paper sx={{padding:"2vh 2vw",margin:"1vh 0"}} elevation="2">
                <Typography>YOUR FACTORY ID IS </Typography>
                <Typography variant="h6" color="warning.main">{factoryIDSaved} </Typography>
              </Paper>
              

           
          
          
           
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>navigator("/home")}
            >
              Go to dashboard
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={handleLogin} variant="body2" sx={{cursor:"pointer"}}>
                  {"Have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>}




        </Box>
      </Paper>
      <Snackbar open={successSnackbar} autoHideDuration={6000} onClose={closeSnackBar}>
        <Alert onClose={closeSnackBar} severity="success" sx={{ width: '100%' }}>
          Login Successful
        </Alert>
      </Snackbar>
        <Snackbar open={failSnackBar} autoHideDuration={6000} onClose={closeSnackBar}>
          <Alert onClose={closeSnackBar} severity="error" sx={{ width: '100%' }}>
            Login Failed
      </Alert>
    </Snackbar>
    </Box>
  );
}
