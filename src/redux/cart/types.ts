export type CartItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    description: string, 
    count: number,
}

export interface CartSliceState {
    totalPrice: number;
    delivery: number;
    items: CartItem [];
}