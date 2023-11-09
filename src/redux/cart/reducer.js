import CartActionTypes from "./action-type"

const initialState ={
    products: [],
}

const cartReducer = (state = initialState, actions) =>{
switch (actions.type){
// case CartActionTypes.ADD_PRODUCT:

case CartActionTypes.REMOVE_PRODUCT:
    return{
        ...state,
        products: state.products.filter(product => product.id !== actions.payload)
    }
case CartActionTypes.INCREASE_PRODUCT_QUANTITY: 
return{
    ...state,
    products: state.products.map((product) => product.id === actions.payload ? { ...product, quantity: product.quantity + 1} : product)
}
case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
    return{
        ...state,
    products: state.products.map((product) => product.id === actions.payload ? { ...product, quantity: product.quantity - 1} : product)
    .filter((product) => product.quantity > 0)
    }
    default:
        return state
} 
}
export default cartReducer