import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
export default function ButtonAppBar() {
   

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar sx={{background:'#fff',color:'#000'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={()=>alert("hy")} />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          <Box display="flex"
          flexDirection={"row"}
           >
        <MenuItem>item1</MenuItem>
        <MenuItem>item1</MenuItem>
        <MenuItem>item1</MenuItem>
        <MenuItem>item1</MenuItem>
        <MenuItem>item1</MenuItem>

          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
