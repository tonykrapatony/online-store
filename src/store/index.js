import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    products: cartReducer,
    product: productReducer
})

export const store = createStore(rootReducer, composeWithDevTools());