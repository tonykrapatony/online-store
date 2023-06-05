const defaultState = {
    product: {}
}

const ADD_PRODUCT = "ADD_PRODUCT";
// const REMOVE_PRODUCTS = "REMOVE_PRODUCTS";

export const productReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_PRODUCT: 
            return {...state, product: action.payload}
        default:  
            return state
    }
}

export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
// export const removeProductsFromCart = (payload) => ({type: REMOVE_PRODUCTS, payload})