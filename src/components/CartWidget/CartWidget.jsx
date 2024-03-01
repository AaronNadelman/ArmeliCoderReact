
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidgetStyled.css'

import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { sumQuantities } from '../../utils/sumQuantity';

const CartWidget = () => {
    const { itemsCart } = useContext(CartContext)

    return (
        <div>
            <Link to='/cart'>
                <ShoppingCartIcon alt='Cart widget' />
                <span>{sumQuantities(itemsCart)}</span>
            </Link>
        </div>
    )
}

export default CartWidget
