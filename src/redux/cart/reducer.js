import CartActionTypes from "./action-type"

const initialState ={
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, actions) =>{
switch (actions.type){
case CartActionTypes.ADD_PRODUCT:
// verificar se o produto consta no carrinho
const productIsAllreadyInCart = state.products.some((products)=> products.id === actions.payload.id)
// se ele estiver quantidade dele vai ser 1
if(productIsAllreadyInCart){
    return{
        ...state,
        products: state.products.map(product => product.id === actions.payload.id ? {...product , quantity: product.quantity + 1 } : product)
    }
}
// se não estiver no carrinho, adicionar
return {
    ...state,
    products: [...state.products, {...actions.payload, quantity: 1}]
}
    default:
        return state
} 
}
export default cartReducer