import React,{useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppBar,Toolbar,Typography,Badge,Menu,Divider,ListItemIcon,Box,MenuItem,IconButton,Tooltip,Avatar,useTheme, TextField} from '@mui/material'
import {Mail,Notifications,Cancel,Settings,PersonAdd,Brightness7,Brightness4} from "@mui/icons-material"
import { ColorModeContext } from '../Context/ColorModeContext';


export default function Navbar() {
    const navigator=useNavigate();
    const goHome=()=>{
      navigator("/")
    }
    const theme=useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const AccOpen = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const {mode,toggleMode}=useContext(ColorModeContext)
  
    
  return (

    <AppBar position='sticky'>
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}} >
            <Box sx={{display:"flex",alignItems:"center",cursor:"pointer"}} onClick={goHome}>
              <Box component="img" src="https://i.postimg.cc/4xxPtTJc/millhouse.png" sx={{width:"42px"}}/>
              <Typography variant="h6" sx={{display:{xs:"none",md:"flex",marginLeft:"10px"}}}>MillHouse</Typography>
            </Box> 
            <Box sx={{display:"flex",alignItems:"center"}}>
                <Box sx={{width:"120px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <IconButton color="inherit" onClick={()=>{
                    toggleMode()
                    console.log(mode)
                  }}>
                    {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                  </IconButton>
                    <Badge badgeContent={4} color="secondary" >
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" >
                        <Notifications />
                    </Badge>
                </Box>
                <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2 }}
            aria-controls={AccOpen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={AccOpen ? 'true' : undefined}
          >
            <Avatar sx={{ width: 42, height: 42 }}>M</Avatar>
          </IconButton>
        </Tooltip>
     
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={AccOpen}
        onClose={handleClose}
        onClick={handleClose}
        // PaperProps={{
        //   elevation: 0,
        //   sx: {
        //     overflow: 'visible',
        //     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        //     mt: 1.5,
        //     '& .MuiAvatar-root': {
        //       width: 64,
        //       height: 64,
        //       ml: -0.5,
        //       mr: 1,
        //     },
        //     '&:before': {
        //       content: '""',
        //       display: 'block',
        //       position: 'absolute',
        //       top: 32,
        //       right: 14,
        //       width: 10,
        //       height: 10,
        //       bgcolor: 'background.paper',
        //       transform: 'translateY(-50%) rotate(45deg)',
        //       zIndex: 0,
        //     },
        //   },
        // }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{display:"flex",justifyContent:"space-between"}}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem sx={{display:"flex",justifyContent:"space-between"}}>
          <Avatar color="primary.main"/> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Cancel fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
