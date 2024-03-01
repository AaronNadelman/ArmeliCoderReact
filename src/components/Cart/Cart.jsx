import './cartStyled.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

const Cart = () => {
    const { itemsCart, clearCart, calcularTotal, removeItemById } = useContext(CartContext)

    if (itemsCart.length == 0) {
        return (
            <div>
                <h1 className='mensaje'>No hay items en el carrito</h1>
                <Link className='link' to='/'>Productos</Link>
            </div>
        )
    } else {
        return (
            <ul className='cartContainer'>
                {itemsCart.map(p => {
                    return (
                        <li className='cartItemContainer' key={p.id}>
                            <h1 className='tituloCart'>{p.name}</h1>
                            <h2 className='infoCart'>Precio por unidad: ${p.price}</h2>
                            <h2 className='infoCart'>Cantidad:{p.quantity}</h2>
                            <h2 className='infoCart'>Subtotal:${p.price * p.quantity}</h2>
                            <button className='botonCarrito' onClick={() => removeItemById(p.id)}>X</button>
                        </li>
                    )

                })}
                <h3 className='infoCartTotal'>Total: ${calcularTotal()}</h3>
                <button className='botonCarrito' onClick={() => clearCart()}>Limpiar Carrito</button>
                <Link className='link' to='/FinalizarCompra'>Finalizar compra</Link>
            </ul>
        )
    }
}

export default Cart