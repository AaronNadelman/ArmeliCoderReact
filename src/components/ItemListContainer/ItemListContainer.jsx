import React from 'react'
import './itemListStyled.css'

function ItemListContainer({ greeteng }) {
    return (
        <div>
            <h1 className='title'>{greeteng}</h1>
        </div>
    )
}

export default ItemListContainer
