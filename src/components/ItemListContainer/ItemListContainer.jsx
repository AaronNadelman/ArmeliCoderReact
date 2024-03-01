

import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'

import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {


        const collectionRef = categoryId
            ? query(collection(db, "eShop"), where('category', '==', categoryId))
            : collection(db, "eShop")

        getDocs(collectionRef)
            .then((response) => {
                const productAdapted = response.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })

    }, [categoryId])
    return (

        <div>
            <h1 className='title'>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;