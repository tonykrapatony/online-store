import React from 'react'

export default function CartItem({item, handleQuantityChange, handleProductRemove}) {
  return (
        <div className="cart_item">
            <div className='item_content'>
                <img src={item.image} alt="" />
                <p className='title'>{item.title}</p>
            </div>
            <div className="actions">
              <div className='quantity'>
                <button className='btn' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <p className='quantity_val'>{item.quantity}</p>
                <button className='btn' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
              <p className='price'>{item.price*item.quantity} $</p>
              <div className="btn_container">
                <button className="btn" onClick={() => handleProductRemove(item.id)}>Remove</button>
              </div>
            </div>
        </div>
  )
}
