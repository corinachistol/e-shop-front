import React, { useEffect } from "react";
import { useState } from "react";
import { getCartItem } from "./api.js";
import { Product, Money, Quantity,CartItem } from "./ui.js";

export function Cart() {
  const cartItems = getCartItem()
  console.log(cartItems)

  return(
    <div>
        {cartItems.map(product => {
            return <CartItem key={product.id} 
                            item={<Product name={product.name} image={product.image}/>} 
                            quantity={<Quantity/>} 
                            cost={<Money/>}/>
 })}
    </div>
  )


}