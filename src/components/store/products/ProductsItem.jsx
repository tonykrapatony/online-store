import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductAction } from '../../../store/productReducer';
import { addProductsToCartAction } from '../../../store/cartReducer';

export default function ProductsItem({className, item}) {

    const dispatch = useDispatch();

    const openProductPage = (item) => {
        let product = {
            id: item.id,
            image: item.image,
            title: item.title,
            category: item.category,
            description: item.description,
            price: item.price,
        }
        dispatch(addProductAction(product));
    }
    const addToCart = (item) => {
        let product = {
            id: item.id,
            image: item.image,
            title: item.title,
            category: item.category,
            description: item.description,
            price: item.price,
            quantity: 1,
        }
        dispatch(addProductsToCartAction(product));
    }
    

    return (
        <div className={className}>
            <img src={item.image} alt="" />
            <p className='title'>{item.title}</p>
            <p className='category'>{item.category[0].toUpperCase()+item.category.slice(1)}</p>
            <p className='price'>{item.price} $</p>
            <div className="btns">
                <Link to="/product" className="detail_btn btn" onClick={() => openProductPage(item)}>More detail</Link>
                <div onClick={() => addToCart(item)} className="btn">To cart</div>
            </div>
        </div>
    )
}
