
import { CartItem } from "../redux/cart/types"
import { calcTotalPrice } from "./calcTotalPrice"

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)
    const delivery = calcTotalPrice(items) - 1500


    return {
        items: items as CartItem[],
        totalPrice,
        delivery,
    }
}