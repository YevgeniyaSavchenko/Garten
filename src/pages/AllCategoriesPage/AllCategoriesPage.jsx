import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem";

export default function AllCategoriesPage() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className={s.page_categories}>
      <h2 className={s.label}>Categories</h2>
      <div className={s.categories_box}>
        {categories.map((item) => (
          <CategoryItem
            key={item.id}
            img={item.image}
            label={item.title}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
