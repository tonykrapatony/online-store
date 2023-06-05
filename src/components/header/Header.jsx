import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import "./header.scss"
import BurgerMenu from './BurgerMenu'


export default function Header() {
  const [fixHeader, setFixHeader] = useState({});
  const [check, setCheck] = useState(true);
  const [navClass, setNavClass] = useState('nav');
  const [burgerClass, setBurgerClass] = useState('burger');

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 79) {
        setFixHeader({
          position: "fixed",
          zIndex: "5",
        });
      } else {
        setFixHeader({});
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const checking = () => {
    setCheck(!check)
    if(check === true) {
      setNavClass('nav show');
      setBurgerClass('burger show');
    } else {
      setNavClass('nav')
      setBurgerClass('burger')
    }
  }
  const navRemClass = () => {
    setCheck(!check)
    setNavClass('nav');
    setBurgerClass('burger');
  }
  

  return (
    <div className='header' style={fixHeader}>
      <Logo></Logo>
      <BurgerMenu className={burgerClass} checking={checking}/>
      <Navigation navRemClass={navRemClass} className={navClass}/>
    </div>
  )
}
