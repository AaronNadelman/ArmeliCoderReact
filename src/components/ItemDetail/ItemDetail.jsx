import ItemCount from "../ItemCount/ItemCount"
import './itemDetailStyled.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/cartContext"

const ItemDetail = ({ id, name, category, description, stock, img, price }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItems } = useContext(CartContext)

    const handleOnAdd = (quantity) => {

        if (!quantity) {
            console.log('no hay productos para agregar')
        } else {
            setQuantityAdded(quantity)
            const item = {
                id, name, price, quantity
            }

            addItems(item)
        }

    }


    return (
        <div className="itemContainer">
            <article className="item" key={id}>
                <header>
                    <h2>{name}</h2>
                </header>
                <picture>
                    <img className="itemImg" src={img} alt={name} />
                </picture>
                <section>
                    <p className="itemInfo">categoria: {category}</p>
                    <p className="itemInfo">descripcion: {description}</p>
                    <p className="itemInfo">stock: {stock}</p>
                    <p className="itemInfo">precio: {price}</p>
                    <footer>
                        {quantityAdded > 0 ? (
                            <Link to='/cart' className="option">terminar compra</Link>
                        ) : (
                            <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}></ItemCount>
                        )}
                    </footer>
                </section>
            </article>
        </div>

    )
}

export default ItemDetail