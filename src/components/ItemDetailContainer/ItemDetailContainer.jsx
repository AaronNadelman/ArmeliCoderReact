
import { useState, useEffect } from 'react'
import { db } from "../../services/firebase/firebaseConfig"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import Spinner from "../../commons/Spinner/Spinner"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading, setIsLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setIsLoading(true)

        const docRef = doc(db, 'eShop', itemId)

        getDoc(docRef)
            .then((response) => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(e => console.log(e))
            .finally(() => {
                setIsLoading(false)
            })
    }, [itemId])

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="itemDetailContainer">
                {product && <ItemDetail {...product} />}
            </div>
        )
    }

}
export default ItemDetailContainer;