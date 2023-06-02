import React from "react";
import s from "./style.module.css";
import { useDispatch} from "react-redux";
import { basketAddAction } from "../../store/reducer/basketReducer";

export default function ProductDescription({
  title,
  image,
  id,
  description,
  price,
  discont_price
}) {
    const linkToImg = `http://localhost:3333/${image}`
    const dispatch = useDispatch();
  return (
    <div className={s.description_page}>
      <h2>{title}</h2>
      <div className={s.box}>
        <img className={s.img_item} src={linkToImg} alt={title} />
        <div className={s.description}>
            <div className={s.price_box}>
               <div className={s.price}>
               {
                    discont_price === null ? (
                        <p className={s.main_price}>{price} $</p>
                    ) : (
                        <>
                        <p className={s.main_price}>{discont_price} $</p>
                        <p className={s.old_price}>{price} $</p>
                        <p className={s.discount}>{((price - discont_price) / price * 100).toFixed(0)} %</p>
                        </>
                    )
                }
               </div>
                <button className={s.btn_add_to_box} onClick={() => dispatch(basketAddAction(+id))}>Add to cart</button>
                <div className={s.description_box}>
                    <p className={s.title}>Description</p>
                    <p className={s.t_description}>{description}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
