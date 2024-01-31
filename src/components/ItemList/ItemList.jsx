import Item from '../Item/Item'

const ItemList = ({ products }) => {

    return (
        <div>
            {products.map(prod => <Item id={prod.id} {...prod} />)}
        </div>
    )

}

export default ItemList