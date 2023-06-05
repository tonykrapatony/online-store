const defaultState = {
    products: []
}

const ADD_PRODUCTS = "ADD_PRODUCTS";
// const ADD_MANY_PRODUCTS = "ADD_MANY_PRODUCTS";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const REMOVE_ALL_PRODUCTS = "REMOVE_PRODUCTS";
const CHANGE_QUANTITY = "CHANGE_QUANTITY";

export const cartReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_PRODUCTS: 
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
              // Товар вже є у корзині, оновлюємо його кількість
              const updatedProductsArr = state.products.map(product => {
                if (product.id === action.payload.id) {
                  return { ...product, quantity: product.quantity + action.payload.quantity };
                }
                return product;
              });
              return { ...state, products: updatedProductsArr };
            } else {
              // Товар ще не додано у корзину, додаємо його
              return { ...state, products: [...state.products, action.payload] };
            }
        // case ADD_MANY_PRODUCTS:
        //     return {...state, }
        case REMOVE_PRODUCT: 
            return {...state, products: state.products.filter(product => product.id !== action.payload)}
        case REMOVE_ALL_PRODUCTS: 
            return {...state, products: []}
        case CHANGE_QUANTITY:
            const { id, quantity } = action.payload;
            const updatedProducts = state.products.map((product) => {
              if (product.id === id) {
                return { ...product, quantity: quantity };
              }
              return product;
            });
            return { ...state, products: updatedProducts };
        default:  
            return state
    }
}

export const addProductsToCartAction = (payload) => ({
    type: ADD_PRODUCTS, 
    payload
})
export const removeProductFromCartAction = (payload) => ({
    type: REMOVE_PRODUCT, 
    payload
})
export const removeProductsFromCartAction = (payload) => ({
    type: REMOVE_ALL_PRODUCTS, 
    payload
})
export const changeProductsQuantityAction = (id, quantity) => ({
    type: CHANGE_QUANTITY,   
    payload: {
        id: id,
        quantity: quantity,
    }
})