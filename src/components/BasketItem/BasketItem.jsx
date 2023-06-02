import React from "react";
import s from "./style.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import {GrFormClose} from "react-icons/gr";
import { useDispatch } from "react-redux";
import { basketDecrementAction, basketIncrementAction, basketRemoveAction } from "../../store/reducer/basketReducer";



export default function BasketItem({
  image,
  title,
  count,
  id,
  discont_price,
  price,
}) {
    const dispatch= useDispatch()
    const linkToImg = `http://localhost:3333/${image}`
  return (
    <div className={s.basket_box}>
      <img src={linkToImg} alt="#" />

      <div className={s.title_count}>
        <p>{title}</p>
        <div className={s.count_btn}>
          <BiMinus className={s.btn} onClick={()=> dispatch(basketDecrementAction(id))}/>
          <p className={s.count}>{count}</p>
          <BiPlus className={s.btn} onClick={()=> dispatch(basketIncrementAction(id))}/>
        </div>
      </div>
      {discont_price === null ? (
        <p className={s.realy_price}>{price*count} $</p>
      ) : (
        <div className={s.all_price}>
          <p className={s.realy_price}>{discont_price} $</p>
          <p className={s.old_price}>{price*count} $</p>
        </div>
      )}
      <GrFormClose className={s.close_btn} onClick={() => dispatch(basketRemoveAction(id))}/>
    </div>
  );
}
