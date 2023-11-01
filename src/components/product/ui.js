import React from "react";

export function Product({name,image}  ) {
    console.log(name)
    console.log(image)
    
    return(
        <div className="product">
            <h3>{name}</h3>
            <img src={image} alt={name} style={{width:"100px"}} />
        </div>
    )
}

// export function Image({image}) {
//     console.log(image)
//     return(
//         <div className="image">
//             <img src={image} alt={Product.name} />
//         </div>
//     )
// }

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