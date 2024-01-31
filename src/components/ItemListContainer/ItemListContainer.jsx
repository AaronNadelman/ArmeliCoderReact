import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../utils/asynkMock'
import ItemList from '../ItemList/ItemList'
import './itemListStyled.css'
import { useParams } from 'react-router-dom'
import Spinner from '../../commons/Spinner/Spinner'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({ greeteng }) {

    const { categoryId } = useParams()

    const [products, setProducts] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        setIsLoading(true)


        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
            })
    }, [categoryId, setIsLoading])

    if (isLoading) return <Spinner isLoading={isLoading} />


    return (
        <div>
            <h1 className='title'>{greeteng}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
