import { useLocation } from "react-router-dom";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { productsSortPriceAction } from "../../store/reducer/productsReducer";

export default function ProductsFilterBar({
  discountedItems,
  onDiscountCheckboxChange,
}) {
  const location = useLocation();
  const dispatch = useDispatch();

  const onChange = (event) => {
    const checked = event.target.checked;
    onDiscountCheckboxChange(checked);
  };

  const sortPriceOnChange = (event) => {
    dispatch(productsSortPriceAction(event.target.value));
  };

  return (
    <>
      {location.pathname === "/products/sale" ? (
        <div className={s.filter_box}>
          <form className={s.price_box}>
            <p>Price</p>
            <input type="number" placeholder="from" />
            <input type="number" placeholder="to" />
          </form>
          <div className={s.sorted_box}>
            <p>Sorted</p>
            <select name="sort" onChange={sortPriceOnChange}>
              <option value="default">by default</option>
              <option value="ascend_price">by asc price</option>
              <option value="descend_price">by desc price</option>
            </select>
          </div>
        </div>

      ) : (
        <div className={s.filter_box}>
          <form className={s.price_box}>
            <p>Price</p>
            <input type="number" placeholder="from" />
            <input type="number" placeholder="to" />
          </form>

          <form className={s.discount_box}>
            <p>Discounted items</p>
            <input
              type="checkbox"
              name="discount"
              checked={discountedItems}
              onChange={onChange}
            />
          </form>

          <div className={s.sorted_box}>
            <p>Sorted</p>
            <select name="sort" onChange={sortPriceOnChange}>
              <option value="default">by default</option>
              <option value="descend_price">by desc price</option>
              <option value="descend_price">by desc price</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}
