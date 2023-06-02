import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { basketClearAction } from "../../store/reducer/basketReducer";

export default function BasketCalculation() {
  const { basket, products } = useSelector((state) => state);
  const dispatch = useDispatch();

  const totalPrice = basket.reduce((acc, item) => {
    const product = products.find(({ id }) => id === item.id);
    return (
      acc +
      item.count *
        (product.discont_price ? product.discont_price : product.price)
    );
  }, 0);
  console.log(totalPrice);
  return (
    <div className={s.basket_calculation}>
      <p className={s.title}>Order details</p>
      <div className={s.total_box}>
        <p className={s.title_total}>Total</p>
        <p className={s.count_total}>{totalPrice}$</p>
      </div>
      <form className={s.box_input}>
        <input
          className={s.phone_input}
          type="tel"
          name="number"
          maxLength="14"
          minLength="14"
          placeholder=" Phone number "
        />
        <button className={s.order_input} onClick={() => dispatch(basketClearAction())}>Order</button>
      </form>
    </div>
  );
}
