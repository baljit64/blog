import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';

import {Box} from '@mui/material'
const App: React.FC =()=> {
  return (
    <Fragment>
      <CssBaseline/>
       <Box>    
       <Navbar/>
       </Box>
    </Fragment>
  );
}

export default App;
