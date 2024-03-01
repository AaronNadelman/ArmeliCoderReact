export const sumQuantities = (productos) => {
    if (productos.lenght === 0) return 0; else {
        const totalAmount = productos.reduce((acumulador, producto) => {
            return acumulador + producto.quantity;
        }, 0)
        return totalAmount;
    }

};