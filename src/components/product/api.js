import { CartItem } from "./model.js";
import { cartItems } from "../../cartItems.js";
console.log(cartItems)

export function getCartItems( ) {
    return cartItems.map( item => {
        return new CartItem(item)
    })
}