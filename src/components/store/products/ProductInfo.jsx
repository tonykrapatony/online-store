import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductsToCartAction } from '../../../store/cartReducer';

export default function ProductInfo({className, product}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)

  const saveStateToLocalStorage = () => {
    const object = products.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});
    localStorage.setItem('reduxState', JSON.stringify(object));
  };

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
      saveStateToLocalStorage()
  }
  return (
    <div className={className}>
      <img src={product.image} alt="" />
      <p className="title">{product.title}</p>
      <p className="category">
        {product.category[0].toUpperCase() + product.category.slice(1)}
      </p>
      <p className='description'>{product.description}</p>
      <p className="price">{product.price} $</p>
      <div className="btns">
        <div onClick={() => addToCart(product)} className="btn">To cart</div>
      </div>
    </div>
  )
}
