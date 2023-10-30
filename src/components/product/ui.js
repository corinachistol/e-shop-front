import React from "react";

export function Product({productObject: {name, image,price} }) {
    console.log(name)
    console.log(image)
    console.log(price)
    return(
        <div className="product">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Price: <Money amount={price.amount} currency={price.currency}/></p>
        </div>
    )
}

export function Money({price:{amount, currency }}) {
    console.log(amount,currency)
    return <p> {amount} {currency}</p>
}

export function Quantity({quantity}) {
    return (
        <div>
            <button>+</button>
                {quantity}
            <button>-</button>
        </div>

    )
}


export function CartItem( {item, quantity, cost}) {

    return (
        <div className="cart-item">
           {item} {quantity} {cost}
        </div>
    )
}