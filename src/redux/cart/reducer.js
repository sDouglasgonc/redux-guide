import CartActionTypes from "./action-type"

const initialState ={
    products: [],
}

const cartReducer = (state = initialState, action) =>{
switch (action.type){
case CartActionTypes.REMOVE_PRODUCT:
    return{
        
    }
   
} 
}
export default cartReducer