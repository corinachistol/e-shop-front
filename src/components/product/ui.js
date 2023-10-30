import React from "react";

export function Product({name, image,price}  ) {
    console.log(name)
    console.log(image)
    console.log(price)
    return(
        <div className="product">
            <h3>{name}</h3>
            <img src={image} alt={name} />
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
        <div>
            <button>+</button>
            <p>{quantity}</p> 
            <button>-</button>
        </div>

    )
}


export function CartItem( {item, quantity, cost}) {

    return (
        <div className="cart-item">
            {/* {item} {quantity} {cost} */}
           <p>{item=<Product key={item.id} name={item.name} image={item.image}   />}</p>
           <p>{quantity=<Quantity quantity={quantity}/>}</p>
           <p>{cost=<Money amount={cost.amount} price={cost.currency}/>}</p>
        </div>
    )
}