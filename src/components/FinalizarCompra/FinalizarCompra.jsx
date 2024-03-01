import { useState } from 'react';
import { useContext } from 'react';
import { Timestamp, collection, query, where, getDocs, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import FinalizarCompraForm from '../FinalizarCompraForm/FinalizarCompraForm';
import { CartContext } from '../../context/cartContext';

function FinalizarCompra() {
    const [loading, setIsLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { itemsCart, calcularTotal, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setIsLoading(true);


        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: itemsCart, // Using cart directly from context
                total: calcularTotal(),
                date: Timestamp.fromDate(new Date()) // corrected capitalization and function call
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const productsRef = collection(db, "eShop");

            const productsAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', itemsCart.map(item => item.id))));

            productsAddedFromFirestore.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productInCart = itemsCart.find(prod => prod.id === doc.id);
                console.log(doc)
                const prodQuantity = productInCart.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }

            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.log('Hay productos que están fuera de stock:', outOfStock);
            }
        } catch (error) {
            console.log('Error al crear la orden:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (loading) {
        return <h1>Estamos generando tu orden...</h1>;
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>; // Fixed to display orderId
    }

    return (
        <div>
            <h1>Finalizar compra</h1>
            <FinalizarCompraForm onConfirm={createOrder} />
        </div>
    );
}

export default FinalizarCompra;
