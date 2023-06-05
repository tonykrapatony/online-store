import React from 'react';
import "./products.scss";
import ProductsItem from './ProductsItem';

export default function Products({...props}) {
  return (
    <div className='products_list'>
        {props.productsList.map(item => {
               return <ProductsItem className='products_item' item={item} key={item.id}/>            
            })
        }
    </div>
  )
}
