import { CartItem } from "./model.js";
import { cartItems } from "../../cartItems.js";
console.log(cartItems)

export function getCartItem( ) {
    return cartItems.map( item => {
        return new CartItem(item)
    })
}