import React from 'react';
import s from './style.module.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
  const onClick = () => {
    window.location.href = '/categories'
  }
  const relocToCart=() =>{
    window.location.href = '/cart'

  }

  return (
    <div className={s.header}>
       <img className={s.img_logo} onClick={onClick} src="/images/logo.png" alt="#" />
       <button className={s.btn_cat} onClick={onClick}>Catalog</button>
       <nav className={s.nav}>
        <NavLink to='/'>Main Page</NavLink>
        <NavLink to='/products/all'>All Products</NavLink>
        <NavLink to='/products/sale'>All Sales</NavLink>


       </nav>
      <img onClick={relocToCart} className={s.img_cart} src="/images/cart.png" alt="#" />
    </div>
  )
}
