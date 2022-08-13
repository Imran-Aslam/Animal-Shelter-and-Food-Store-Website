import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            // console.log("existitng items are.",state.items)
            // console.log("Item id is",state.items.id)
            // console.log("New item id is",newItem.id)
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.totalQuantity += action.payload.quantity;

                state.items.push({
                    id: newItem.id,
                    quantity: action.payload.quantity,
                    type: newItem.type,
                    rating: newItem.rating,
                    price: newItem.price,
                    name: newItem.name,
                    totalPrice: newItem.price * action.payload.quantity,
                    image: newItem.image,
                });
            } else {
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                // existingItem.totalPrice=existingItem.totaPrice.toFixed(2);
                existingItem.quantity++;
                state.totalQuantity++;
            }
            //    state.items.map(x=>{
            //        console.log("redux cart x me ha ",x);
            //       return state.subTotal+=x.price*x.quantity
            //    }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== existingItem.id);
            } else {
                existingItem.totalPrice -= existingItem.price;
                existingItem.quantity--;
            }
            // state.items.map(x=>{
            //     return state.subTotal-=x.totalPrice
            // })
        },
    },
});
export const cartActions = CartSlice.actions;
export default CartSlice;