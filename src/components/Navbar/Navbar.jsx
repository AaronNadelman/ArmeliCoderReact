import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navBarStyled.css'
import logo from '../../assets/img/logo.png'

function Navbar() {
    const cartWidgetHandleClick = (seccion) => {
        console.log(seccion)
    }
    return (
        <div>

            <nav className='navBar'>
                <a href="">
                    <img className='imgLogo' src={logo} alt="" />
                </a>

                <a href="" className='link'>Home</a>
                <a href="" className='link'>Computing</a>
                <a href="" className='link'>Peripherials</a>
                <CartWidget number={4} cartWidgetHandleClick={cartWidgetHandleClick} />
            </nav>
        </div>

    )
}

export default Navbar
