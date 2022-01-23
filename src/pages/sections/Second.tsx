import React from 'react';
import { Box, Container,Grid , Typography} from '@mui/material'
import CarItem from '../cars/CarItem';
import data from '../../database/cars.json'

 const Second:React.FC=()=> {
    return <Box sx={{  width: '100%',my:3 }}>
  <Container maxWidth='xl' sx={{mx:'auto'}}>
      <Typography variant="h5">Cars Detail</Typography>
      <Grid container spacing={3}  sx={{ pt:3 }}>                            
             {
              data && data.map<JSX.Element>((ele,idx)=> <Grid item md={4} key={idx} sm={6} xs={12} > <CarItem info={ele} />    </Grid>
                 ) 
             }
       
      </Grid>
  </Container>
</Box>
}
export default Second;
