import React from 'react';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
const Root = styled('div')({
    height: '100vh',
    width:'260px',
    backgroundColor:'#fff',
    minHeight:'400px',
   
  });
export default function LeftSideBar({open,toggle}:{open:boolean,toggle:any}) {
  return (

  <Drawer
  anchor={'left'}
  open={open}
  onClose={toggle}
  >

  <Root></Root>
  </Drawer>
  );
}
