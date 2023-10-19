import { Product } from "./Product.js"


export function getProducts(  ) {

    const products = [
        new Product(1, 'Iphone', 1000),
        new Product(2, 'Samsung', 800),
        new Product(3, 'MacOs', 1100)
    ]
    
    return products.map(product => {
        return {
            id:product.id,
            name: product.name,
            price: product.price
        }
    })
}

