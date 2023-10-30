import React from "react";
import { getCartItem } from "./api.js";
import { Product, Money, Quantity,CartItem } from "./ui.js";

export function Cart() {
  const cartItems = getCartItem()
  console.log(cartItems)

  return(
    <div>
    
        {cartItems.map(product => {
            return <CartItem key={product.id} item={product} quantity={product.quantity} cost={product.cost} >
                    {/* <Product key={product.item.id} name={product.item.name}/>
                    <Quantity quantity={product.quantity}/>
                    <Money cost={product.cost}/> */}
            </CartItem>
 })}
    </div>
  )


}