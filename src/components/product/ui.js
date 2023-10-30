import React from "react";
import { getCartItem } from "./api.js";


export function CartItem( {item,quantity,cost}) {
    const items = getCartItem()
    console.log(items)

    return (
            <tbody>
                <tr>
                    {/* <td>{items.map( product => <Product/> key={product.id} )} </td> */}
                    <td>{item = <Product/>} </td>
                    <td>{quantity = <Quantity/>}</td>  
                    <td>{cost = <Money/>}</td>  

                    
                </tr>
            </tbody>
        )

}



function Product({name,image,price}) {
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            {price = <Money />}
        </div>
    )
}


function Money({amount, currency } ) {
    return <p> {amount} {currency}</p>
}

function Quantity({quantity}) {
    return (
        <div>
            <button>+</button>
            <span>{quantity}</span>
            <button>-</button>
        </div>

    )
}