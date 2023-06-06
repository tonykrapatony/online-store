import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navigation({className, navRemClass}) {
    const products = useSelector(state => state.products.products);
    const [totalProdQuantity, setTotalProdQuantity] = useState('');

    useEffect(() => {
        let totalQuantity = products.reduce((acc, val) => acc + val.quantity, 0);
        if (totalQuantity < 1) {
            setTotalProdQuantity('')
        } else {
            setTotalProdQuantity(totalQuantity)
        }
    }, [products])
    return (
        <nav className={className}>
        <Link onClick={navRemClass} to="/online-store" className='nav_link'>Home</Link>
        <Link onClick={navRemClass} to="/online-store/store" className='nav_link'>Store</Link>
        {/* <Link to="/about" className='nav_link'>About</Link> */}
        <Link onClick={navRemClass} to="/online-store/cart" className='nav_link'>
            <svg width="28" data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z" fill="#0C0058"/>
            </svg>
            Cart {totalProdQuantity}
        </Link>
        </nav>
    )
}
