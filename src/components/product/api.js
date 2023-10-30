import { CartItem } from "./model";
import {items} from '../cartItems.js';
console.log(items)

export function getCartItem() {
    return items.map( item => {
        return new CartItem(item)
    })
}