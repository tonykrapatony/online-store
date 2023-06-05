import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className='logo'>
        <svg height="48" id="cart" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
            <path fill='#0C0058' fillRule='evenodd' d="M14.58,35.043a3.479,3.479,0,1,1-3.527,3.479A3.5,3.5,0,0,1,14.58,35.043Zm11.771,0a3.479,3.479,0,1,1-3.542,3.479A3.511,3.511,0,0,1,26.351,35.043ZM44,12H14L9,6H4L18,26H30l-2,3H13L9,33H30Z"/>
            <path fill='#FF6E6E' fillRule='evenodd' d="M16,16H36l-2,2H18Zm3,4H32l-2,2H21Z"/>
        </svg>
        Online store
    </Link>
  )
}
