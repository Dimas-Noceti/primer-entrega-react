import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import "./tarjetaProducto.css"

const TarjetaProducto = ({title, price, img, description}) => {


  return (
    <Card sx={{ width: 350, height: 320 }}>
      <CardMedia sx={{ height: 140 }} image={img} title={title}/>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {price + " USD"}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Detalles</Button>
    </CardActions>
  </Card>
)}

export default TarjetaProducto