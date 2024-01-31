const products = [
    {
        id: '1',
        name: 'Celular Motorola G13 4GB',
        price: 259000,
        category: 'celulares',
        img: 'https://images.fravega.com/f300/f00c305cb768c5874b103495f0eee079.png.webp',
        description: 'Celular color gris',
        stock: 4
    },
    {
        id: '2',
        name: 'Notebook ASUS Vivobook Go 14',
        price: 449000,
        category: 'notebooks',
        img: 'https://images.fravega.com/f500/ac427ce6de5d6339db8996b669a58bef.jpg',
        description: 'Intel Celeron 4GB 128GB E410MA-BV1181W',
        stock: 6
    },
    {
        id: '3',
        name: 'Tablet Lenovo M9',
        price: 239000,
        category: 'tablets',
        img: 'https://images.fravega.com/f500/087a79b2ee2c1390daa7127c145df902.jpg',
        description: '9” 64GB ZAC30064AR',
        stock: 3
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(products.find(prod => prod.id.toString() === productId.toString())) }, 1000)
    })
}

export const getProductsByCategory = (category) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category))
        }, 2000)
    })

}