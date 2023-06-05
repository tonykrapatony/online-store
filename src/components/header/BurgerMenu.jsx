import React from 'react'

export default function BurgerMenu({className, checking}) {
  return (
    <div className={className} onClick={checking}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>
  )
}
