import React from 'react'
import CategoriesItem from './CategoriesItem'
import "./categories.scss"

export default function Categories({...props}) {
  return (
    <div className='categories_list'>
      <h3 className="title">Categories</h3>
      <CategoriesItem onclick={props.getCategoryProducts} className='categories_item'>All</CategoriesItem>
      {props.categories.map((item, index) => 
        <CategoriesItem onclick={props.getCategoryProducts} dataId={item} className='categories_item' key={index}>{item}</CategoriesItem>)
      }
  </div>
  )
}
