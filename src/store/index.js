import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    isOpen: false
};
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.isOpen = !state.isOpen;
        }
    }
});

const store = configureStore({reducer: {cart: cartSlice.reducer}});


export default store;

// export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;