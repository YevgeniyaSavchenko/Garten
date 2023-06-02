import React from 'react';
import s from './style.module.css';


export default function Banner() {
  const onClick = () => {
    window.location.href = '/products/sale'
  }
  return (
    <div className={s.banner}>
        <div className={s.h_text}>
            <h1 className={s.h_text1}>Sale </h1>
            <h2 className={s.h_text2}>New season</h2>
           <button className={s.banner_btn} onClick={onClick}>Sale</button>
        </div>
        <div className={s.img_container}>
            <img className={s.img_sale} src="/images/img_sale-season.png" alt="#" />
        </div>
    </div>
  )
}
