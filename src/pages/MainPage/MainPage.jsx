import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import s from "./style.module.css";
import CategoryItem from "../../components/CategoryItem";
import { useSelector } from "react-redux";
import DiscauntSection from "../../components/DiscountSection/DiscauntSection";
import Sale from "../../components/Sale/Sale";

export default function MainPage() {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const [randomData, setRandomData] = useState([]);

  const saleProducts = products.filter((elem) => elem.discont_price !== null);

  useEffect(() => {
    const shuffledData = shuffleArray(saleProducts);
    const selectedData = shuffledData.slice(0, getRandomNumber(3, 4));

    setRandomData(selectedData);
  }, [products]);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onClick = () => {
    window.location.href = "/categories";
  };

  return (
    <div className={s.page}>
      <Banner />

      <div className={s.catalog}>
        <p className={s.p_catalog}>Catalog</p>
        <button className={s.btn_categories} onClick={onClick}>
        All categories
        </button>
      </div>
      <div className={s.item_cat}>
        {categories
          .filter((item) => item.id < 5)
          .map((item) => (
            <CategoryItem key={item.id} img={item.image} label={item.title} />
          ))}
      </div>
      <DiscauntSection />
      <Sale products={randomData} />
    </div>
  );
}
