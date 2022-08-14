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
  Alert,
  CircularProgress,
  Snackbar
} from "@mui/material";
import SplashScreen from "./SplashScreen";
import React,{useContext,useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import { LockOutlined } from "@mui/icons-material";
import { AdminIDContext, AdminIDUpdateContext, FactoryIDUpdateContext } from "../Context/IDContextProvider";
import axios from 'axios'
import { UserAuth } from '../Context/AuthContext';
import { fontSize } from "@mui/system";
import { render } from "@testing-library/react";

export default function Login() {
  const navigator= useNavigate()
  const [email,setEmail]=useState(null)
  const [pass,setPass]=useState(null)
  const baseURL="https://cargon-postgres.herokuapp.com"
  const [loggingIn,setLogggingIn]=useState(false)
  const [splashLoad,setSplashLoad]=useState(true)
  const [successSnackbar,setSuccessSnackBar]=useState(true)
  const [failSnackBar,setFailSnackBar]=useState(true)

  const adminIDSaved=useContext(AdminIDContext)
  const updateAdminID=useContext(AdminIDUpdateContext)
  const updateFactoryID=useContext(FactoryIDUpdateContext)

  const { signIn } = UserAuth();

  const closeSnackBar=()=>{
    setSuccessSnackBar(false)
    setFailSnackBar(false)
  }

  const getFactoryIDByAdminID=()=>{
    axios.get(`${baseURL}/factorybyadmin/${adminIDSaved}`).then((res)=>{
      console.log(res.data)
      updateFactoryID(res.data)
      
      
    }).catch(e=>console.log(e))
  }
  const getAdminIDByEmail= ()=>{
    axios.get(`${baseURL}/adminstrator/mail/${email}`).then(async(res)=>{
      updateAdminID(res.data)
      getFactoryIDByAdminID()
    }).catch(e=>console.log(e))
  }

  const handleSubmit =async () => {

  
      setLogggingIn(true)
      signIn(email, pass).then(()=>{
        setSuccessSnackBar(true)
        getAdminIDByEmail()
        
      }).then(()=>{
        setLogggingIn(false)
        navigator('/home')
      })
    .catch ((e)=> {
      setFailSnackBar(true)
      setLogggingIn(false)

    })
    
    
  }
  const handleCreateAcc=()=>{
    navigator("/create_acc")
  }
  useEffect(()=>{
    setTimeout(()=>{
      setSplashLoad(false)
    },5000)
  },[])
  return (
    <Box>
    {!splashLoad && <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:"https://i.postimg.cc/L5WR1tMK/Colorful-Playful-Tutorial-Youtube-Thumbnail-2.png"
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: { xs: "90%", md: "70%" },
          minHeight: "70%",
          marginTop: 8,
          //padding: "2vh 0",
          display: "flex",
          flexDirection: {xs:"column",md:"row"},
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{width:{xs:"70%",md:"50%"},backgroundColor:"primary.light"}} component="img" src="https://i.postimg.cc/yNxLTzCW/undraw-Access-account-re-8spm.png"/>
          
        <Box
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width:{xs:"80%",md:"50%"},
            padding:{md:"3rem"},
            paddingBottom:{xs:"1rem",md:0}
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
    
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
   
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={e=>setPass(e.target.value)}
            />
     
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            > 
         
            {!loggingIn && <Typography>Sign In</Typography>}
            {loggingIn && <Box sx={{display:"flex",alignItems:'center'}}><CircularProgress color="info" size={20}/><Typography sx={{marginLeft:"10px"}}>Signing In</Typography></Box>}
            </Button>
            <Grid container>
              <Grid item xs>
                {/*<Link href="#" variant="body2">
            Forgot password?
              </Link>*/}
              </Grid>
              <Grid item>
                <Link variant="body2" onClick={handleCreateAcc} sx={{cursor:"pointer"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Box>}
    {splashLoad && <SplashScreen/>}
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
