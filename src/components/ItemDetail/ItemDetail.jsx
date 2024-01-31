import ItemCount from "../ItemCount/ItemCount"
import './itemDetailStyled.css'

const ItemDetail = ({ id, name, category, description, stock, img, price }) => {
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
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => { console.log(`cantidad agregada: ${quantity}`) }}></ItemCount>
                    </footer>
                </section>
            </article>
        </div>

    )
}

export default ItemDetail