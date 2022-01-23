import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';

import {Box} from '@mui/material'
import First from './pages/sections/First';
import Second from './pages/sections/Second';
const App: React.FC =()=> {
  return (
    <Fragment>
      <CssBaseline/>
       <Box>    
       <Navbar/>
       <First/>
       <Second/>
       </Box>
    </Fragment>
  );
}

export default App;
