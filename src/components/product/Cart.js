import React from "react";
import { getCartItem } from "./api.js";
import { Product, Money, Quantity,CartItem } from "./ui.js";

export function Cart() {
  const cartItems = getCartItem()
  console.log(cartItems)

  return(
    <div className="cart">
    
        {cartItems.map(product => {
            return <CartItem key={product.item.id} item={product.item}  >
                    <Product key={product.item.id} name={product.item.name} image={product.item.image} price={product.item.price.amount}/>
                    <Quantity quantity={product.quantity}/>
                    <Money amount={product.cost.amount} currency={product.cost.currency}/>
            </CartItem>
 })}
    </div>
  )


}