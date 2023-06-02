import React, { useState } from "react";
import s from "./style.module.css";
import { getDiscountAction } from "../../store/reducer/discountReducer";
import { useDispatch } from "react-redux";

export default function DiscauntSection() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
 

  function handleChange(event) {
    const code = "+49";
    const number = event.target.value.replace(/\s+/g, "");
    // Удаляем код, если он уже был введен пользователем
    if (number.startsWith(code)) {
      setValue(number.slice(code.length));
    } else {
      setValue(number);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      number: `+49${value}`,
      discount: true,
      used: false

    }
    dispatch(getDiscountAction(data))
    localStorage.setItem("discountData", JSON.stringify(data));
    // обработка отправки формы
    setValue('')
  
  }

  return (
    <div className={s.discount_block}>
      <img className={s.draft} src="./images/image 3.png" alt="img" />

      <div className={s.discount_innerblock}>
        <p className={s.discount_p1}>5% off </p>
        <p className={s.discount_p2}>on the first order</p>
        <form className={s.discount_form} onSubmit={handleSubmit}>
          <input
            className={s.input_number}
            type="tel"
            name="number"
            placeholder="+49 (___) ___-____"
            value={"+49" + value}
            onChange={handleChange}
            maxLength="14"
            minLength="14"
          />
          <button className={s.discount_btn}>Get a discount</button>
        </form>
      </div>
    </div>
  );
}
