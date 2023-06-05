import React, { useEffect, useState } from 'react'
import "./store.scss"
import Categories from './categories/Categories';
import Products from './products/Products';
export default function StorePage() {
    const [categories, setCategories] = useState([])
    const [productsList, setProductsList] = useState([])
  
    const getCategories = () => {
      fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=> {
          setCategories(json)
        })
    }
  
    const getProductsList = (category) => {
      if (!category) {
        fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=> {
            setProductsList(json)
          })
      } else {
        fetch(`https://fakestoreapi.com/products/category/${category}/`)
        .then(res=>res.json())
        .then(json=> {
          setProductsList(json)
        })
      }
    }
  
    const getCategoryProducts = (cat) => {
      getProductsList(cat);
    }
  
    useEffect(() => {
      getCategories();
      getProductsList();
    }, []);
    return (
        <div>
            <Categories categories={categories} getCategoryProducts={getCategoryProducts}/>
            <Products productsList={productsList}/>
        </div>
    )
}
