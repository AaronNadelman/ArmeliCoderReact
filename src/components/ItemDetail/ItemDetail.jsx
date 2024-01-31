import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = (id, name, category, description, stock, img, price) => {
    return (
        <article key={id}>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>categoria: {category}</p>
                <p>descripcion: {description}</p>
                <p>precio: {price}</p>
                <footer>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => { console.log(`cantidad agregada: ${quantity}`) }}></ItemCount>
                </footer>
            </section>
        </article>
    )
}

export default ItemDetail