import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {MenuItem, IconButton,Button,Typography} from '@mui/material';
import LeftSideBar from './Drawer';
export default function ButtonAppBar() {
  const[leftDrawer,setLeftDrawer]=useState<boolean>(false)
   const toggleSidebar=()=>{
     setLeftDrawer((prev)=>!prev)
   }

  return (
    <Box sx={{ flexGrow: 1 }}>
     <LeftSideBar open={leftDrawer} toggle={toggleSidebar} />
      <AppBar sx={{ background: '#fff', color: '#000' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2, display: { xs: 'block', sm: 'block', md: 'none' } }}
            >
            <MenuIcon  onClick={toggleSidebar}/>
          </IconButton>
          <Typography variant="h5" sx={{flexGrow:1}} component="div" >
            Blog
          </Typography>

            <Box 
              flexDirection={"row"}
              justifyContent="end"
              sx={{ flexGrow: 1,display:{xs:'none',sm:'none',md:'flex'} }}>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Contact Us</MenuItem>
            </Box>
     

          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
  
    </Box>
  );
}
