import React from 'react'
import "./homepage.scss"

export default function HomePage() {
  return (
    <div className='home_page'>
        <h1>Hello.</h1>
        <p>This is a simple online store application with fake products, built with <a href="https://react.dev/">React</a>, <a href="https://redux.js.org/">Redux</a> and <a href="https://fakestoreapi.com/">Fake Store API</a>.</p>
        <p>This is not a commercial project and is developed for educational purposes.</p> 
        <p>You can use the menu at the top to navigate the site.</p>
        <p>You can also go to the <a href="https://github.com/tonykrapatony/online-store">GitHub</a> repository and read the application code.</p>
    </div>
  )
}
