
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidgetStyled.css'

export default function CartWidget({ number, cartWidgetHandleClick }) {
    return (
        <div>
            <ShoppingCartIcon sx={{ fontSize: 80 }} color="primary" onClick={() => cartWidgetHandleClick("cart widget")} />
            <span className='number'>{number}</span>
        </div>


    )
}
