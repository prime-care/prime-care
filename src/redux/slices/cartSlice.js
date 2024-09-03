import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, image, price, quantity } = action.payload;// {id:p1, name:Cerum, image:"url", price:20}
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                // Update quantity if item already exists in cart
                existingItem.quantity += quantity;
            } else {
                // Add new item to cart
                state.items.push({ id, name, image, price, quantity });
            }
        },
        adjustQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                item.quantity += quantity;

                // Remove item if quantity is less than or equal to zero
                if (item.quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== id);

                }
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        },

    },
});



export const { addToCart, adjustQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selector to calculate total
export const selectTotal = (state) =>
    state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);