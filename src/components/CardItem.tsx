import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material'


interface IState {
    info: {
        img: string
        name: string
        description: string
    }
}
 function CardItem  ({info}:{info:IState["info"]}){
    return <Card>
        <CardActionArea>
            <CardMedia component='img'
                height='200px'
                width='100%'
                src={info.img}
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {info.description}
                </Typography>
            </CardContent>
        </CardActionArea>


    </Card>;
}
export default CardItem