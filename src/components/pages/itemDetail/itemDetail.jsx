import React from 'react'
import CounterContainer from '../../common/counter/CounterContainer'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import "./itemDetail.css"

const ItemDetail = ({item, agregarAlCarrito, totalAgregados}) => {
    return (
        <div className='divItemDetail'>
            <Card className='cardItemDetail' sx={{ maxWidth: 345}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.price + " USD"}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CounterContainer agregarAlCarrito={agregarAlCarrito} stock={item.stock} totalAgregados={totalAgregados}/>
            </Card>
            
        </div>
    )
}

export default ItemDetail