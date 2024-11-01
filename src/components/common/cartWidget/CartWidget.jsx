import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {

  const { cantidadProductosTotal } = useContext( CartContext );

  const totalItems = cantidadProductosTotal();

  return (
    <div>
        <Badge badgeContent={totalItems} color="primary" max={50} showZero={true}>
            <ShoppingCartIcon/>
        </Badge>
        
    </div>
  )
}

export default CartWidget;