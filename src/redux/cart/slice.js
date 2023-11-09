import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, actions) => {
            // verificar se o produto consta no carrinho
            const productIsAllreadyInCart = state.products.some((products) => products.id === actions.payload.id)

            // se ele estiver quantidade dele vai ser 1
            if (productIsAllreadyInCart) {
                state.products = state.products.map((product) => product.id === actions.payload.id ? { ...product, quantity: product.quantity + 1 } : product)

                return;
            }
            // se não estiver no carrinho, adicionar
            state.products = [...state.products, { ...actions.payload, quantity: 1 }]

        }
    }
}) 

export const { addProduct} = cartSlice.actions;