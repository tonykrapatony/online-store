import React from 'react'

export default function CategoriesItem({children, ...props}) {
  return (
    <div onClick={() => props.onclick(props.dataId)} className={props.className}>{children[0].toUpperCase()+children.slice(1)}</div>
  )
}
