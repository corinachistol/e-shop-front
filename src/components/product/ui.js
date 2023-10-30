import React from "react";

export function Product({name, image,price}  ) {
    console.log(name)
    console.log(image)
    console.log(price)
    return(
        <div className="product">
            <h3>{name}</h3>
            <img src={image} alt={name} style={{width:"100px"}} />
            {/* <Money productObject={price}/> */}
        </div>
    )
}

export function Money({amount,currency}) {
    console.log(amount,currency)
    return (
        <div className="money">
            <p> {amount} {currency}</p>
        </div>
) 
}

export function Quantity({quantity}) {
    console.log(quantity)
    return (
        <div className="quantity">
            <button>+</button>
            <p>{quantity}</p> 
            <button>-</button>
        </div>

    )
}


export function CartItem( {children}) {

    return (
        <div className="cart-item">
            {children}
        </div>
    )
}