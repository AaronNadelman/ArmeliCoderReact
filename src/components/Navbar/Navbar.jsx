import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navBarStyled.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const cartWidgetHandleClick = (seccion) => {
        console.log(seccion)
    }
    return (
        <div>

            <nav className='navBar'>
                <Link to='/'>
                    <img className='imgLogo' src={logo} alt="logo" />
                </Link>
                <ul className='listaLinks'>
                    <Link to="/category/celulares" className='link'>Celulares</Link>
                    <Link to="/category/notebooks" className='link'>Notebooks</Link>
                    <Link to="/category/tablets" className='link'>Tablets</Link>
                </ul>

                <CartWidget number={4} cartWidgetHandleClick={cartWidgetHandleClick} />
            </nav>
        </div>

    )
}

export default Navbar
