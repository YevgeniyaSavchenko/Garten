import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { productDiscountFilterAction, productsResetFilter } from "../../store/reducer/productsReducer";
import s from "./style.module.css";
import ProductsFilterBar from "../../components/ProductsFilterBar/ProductsFilterBar";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function ProductsPage() {
  const [showDiscountedItems, setShowDiscountedItems] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector(({ products }) => {
    if (id === undefined) {
      return products;
    } else {
      return products.filter((product) => product.categoryId === +id);
    }
  });

  const categories = useSelector((state) => state.categories);

  const category = categories.find((item) => +id === item.id);

  const location = useLocation();

  useEffect(() => {
    dispatch(productsResetFilter());
  }, []);

  const handleDiscountCheckboxChange = (checked) => {
    setShowDiscountedItems(checked);
    if (checked) {
      dispatch(productDiscountFilterAction());
    } else {
      dispatch(productsResetFilter());
    }
  };

  return (
    <>
      {location.pathname === "/products/sale" ? (
        <div className={s.products_page}>
        <h2>Sale</h2>
            <ProductsFilterBar />
          <div className={s.products}>
            {products
              .filter((item) => item.discont_price)
              .map((item) => (
                <ProductItem key={item.id} {...item} />
              ))}
          </div>
        </div>
      ) : (
        <div className={s.products_page}>
          <h2>{category === undefined ? "All products" : category.title}</h2>
          <ProductsFilterBar discountedItems={showDiscountedItems} onDiscountCheckboxChange={handleDiscountCheckboxChange}/>
          <div className={s.products}>
            {products
            .filter((item) => !showDiscountedItems || item.discont_price)
            .map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
