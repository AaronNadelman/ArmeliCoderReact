import './itemCountStyled.css'
import { useState } from 'react'
import Button from '../../commons/Button/Button'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="counter">
            <div className="controls">
                <button className='button' onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button onClick={increment} className="button">+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount