import React from 'react';

import { Box, Container,Grid ,Card, Typography} from '@mui/material'
import CardItem from '../../components/CardItem';
import data from '../../database/data.json'

const First: React.FC = () => {
  
    return <Box sx={{  width: '100%',my:3 }}>
        <Container maxWidth='xl' sx={{mx:'auto'}}>
            <Typography variant="h5">Animals Detail</Typography>
            <Grid container spacing={3}  sx={{ pt:3 }}>                            
                   {
                    data && data.map<JSX.Element>((ele,idx)=> <Grid item md={4} key={idx} sm={6} xs={12} > <CardItem info={ele} />    </Grid>
                       ) 
                   }
             
            </Grid>
        </Container>
    </Box>;
}
export default First