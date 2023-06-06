import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Cart from './pages/Cart';
import Error from './pages/Error';
import "./app.scss";
import Header from './components/header/Header';
import Product from './pages/Product';
// import { useEffect } from 'react';
// import { addProductsToCartAction } from './store/cartReducer';
// import { useDispatch, useSelector } from 'react-redux';
// import saveStateToLocalStorage from './store/saveStateToLocalStorage';

function App() {
  // const dispatch = useDispatch()
  // const products = useSelector(state => state.products.products);

  // useEffect(() => {
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // });

  // useEffect(() => {
  //   let obj = JSON.parse(localStorage.getItem('reduxState'));
  //   console.log(obj)
  //   if (Object.keys(obj).length !== 0) {
  //     for (let key in obj) {
  //       dispatch(addProductsToCartAction(obj[key]));
  //     }
  //   }
  // }, [dispatch])

  // const handleBeforeUnload = () => {
  //   saveStateToLocalStorage(products);
  // };

  return (
    <div className="App">
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
    </div>
  );
}

export default App;
