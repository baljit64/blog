
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material'

interface IState {
    info: {
        img: string
        name: string
        price: string
    }
}
export default function CarItem({ info }: { info: IState["info"] }) {
    return (
        <Card>
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
                    {info.price}
                </Typography>
            </CardContent>
        </CardActionArea>

  </Card >
  );
}
