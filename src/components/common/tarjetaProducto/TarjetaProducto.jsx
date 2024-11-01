import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import "./tarjetaProducto.css"
import { Link } from "react-router-dom"

const TarjetaProducto = ({title, price, img, description, id}) => {


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
        <Link to={`/productDetail/${id}`} size="small">
            <Button>Detalles</Button>
        </Link>
    </CardActions>
    </Card>
)}

export default TarjetaProducto