import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./cart.scss"
import { changeProductsQuantityAction, removeProductFromCartAction, removeProductsFromCartAction } from '../../store/cartReducer';
import CartList from './CartList';
import CartTotal from './CartTotal';
import CartModal from './CartModal';
import CarEmpty from './CarEmpty';

export default function CartPage() {
    const dispatch = useDispatch()
    const products = useSelector(state=> state.products.products)

    const [totalPrice, setTotalPrice] = useState(0);
    const [modalClass, setModalClass] = useState('modal');

    const totalPriceCounter = () => {
        setTotalPrice(products.reduce((acc, curVal) => acc+(curVal.price*curVal.quantity), 0));
    }

    useEffect(() => {
        totalPriceCounter();
    })
    
    const handleQuantityChange = (productId, newQuantity) => {
        if(newQuantity < 1) {
            newQuantity = 1;
            dispatch(changeProductsQuantityAction(productId, newQuantity));
        } else {
            dispatch(changeProductsQuantityAction(productId, newQuantity));
        }
    };

    if (products.length > 0) {
        
        const emptyCart = () => {
            dispatch(removeProductsFromCartAction());
        }
        const closeModal = () => {
            setModalClass('modal');
            emptyCart();
        }


        const handleProductRemove = (productId) => {
            dispatch(removeProductFromCartAction(productId))
        };

        return (
            <div className="cart_page">
                <CartList handleQuantityChange={handleQuantityChange} handleProductRemove={handleProductRemove} products={products}/>
                <CartTotal totalPrice={totalPrice} setModalClass={setModalClass}/>
                <CartModal modalClass={modalClass} closeModal={closeModal}/>
            </div>
        )   
    } else {
        return <div className="cart_page">
                    <CarEmpty/>
                </div>
    }
}
