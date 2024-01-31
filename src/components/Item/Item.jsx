import './itemStyled.css'
import { Link } from 'react-router-dom'
const Item = ({ id, name, price, img, description, stock }) => {
    return (

        <div className="itemContainer" key={id}>
            <article className='item'>
                <h1 className="itemTitulo">{name}</h1>
                <img className="itemImg" src={img} alt={name} srcset="" />
                <p className="itemInfo">${price}</p>
                <p className="itemInfo">{description}</p>
                <p className='itemInfo'>Stock disponible: {stock}</p>



                <Link to={`item/${id}`} className='detalle'>Detalle</Link>

            </article>
        </div>

    )

}

export default Item