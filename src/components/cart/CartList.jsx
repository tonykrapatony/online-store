import React from 'react'
import CartItem from './CartItem'

export default function CartList({products, handleQuantityChange, handleProductRemove}) {


  
  return (
    <div className='cart_list'>
        {               
            products.map(item => {
                return <CartItem key={item.id} item={item} handleQuantityChange={handleQuantityChange} handleProductRemove={handleProductRemove}/>
            })
        }
    </div>
  )
}
