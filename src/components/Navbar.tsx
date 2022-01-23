import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add'
import {AppBar,Box,Toolbar,MenuItem, IconButton,Button,Typography,Fab,Tooltip} from '@mui/material';
import LeftSideBar from './Drawer';
import AddPost from '../modals/AddPost';
export default function ButtonAppBar() {
  const[leftDrawer,setLeftDrawer]=useState<boolean>(false)
  const[add,setAdd]=useState<boolean>(false)

   const toggleSidebar=()=>{
     setLeftDrawer((prev)=>!prev)
   }
  const handleAddPost=()=>{
       setAdd((prev)=>!prev)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AddPost Open={add} handleClose={handleAddPost}/>
    <Tooltip title="Add Post">
    <Fab onClick={handleAddPost} sx={{position:'fixed',bottom:'10px',right:'20px',zIndex:9}} color="primary" aria-label="add">
    <AddIcon />
    </Fab>
  </Tooltip>
     <LeftSideBar open={leftDrawer} toggle={toggleSidebar} />
      <AppBar sx={{ background: '#fff', color: '#000' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2, display: { xs: 'block', sm: 'block', md: 'none' } }}
            onClick={toggleSidebar}
           >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h5" sx={{flexGrow:1,fontWeight:500,fontSize:30}} component="div" >
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
