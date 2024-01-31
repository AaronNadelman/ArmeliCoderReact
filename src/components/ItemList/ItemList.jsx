import Item from '../Item/Item'
import './itemListStyled.css'

const ItemList = ({ products }) => {

    return (
        <div className='itemsContainer'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )

}

export default ItemList