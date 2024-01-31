import { useState, useEffect } from "react"
import React from 'react'
import { getProductsById } from "../../utils/asynkMock"
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const { itemId } = useParams()
    console.log(itemId)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById(itemId)
            .then(response => { setProduct(response) })
            .catch((e) => console.error(e))
    }, [itemId])

    return (
        <div className="itemDetailContainer">
            {product && <ItemDetail {...product} />}
        </div>
    )
}
