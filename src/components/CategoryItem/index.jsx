import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function CategoryItem({ label, img, id }) {
  const link = `/category/${id}`;
  const linkToImg = `http://localhost:3333//${img}`;


  return (
    <Link to={link} className={s.categoryItem}>
      <div className={s.box}>
        <img className={s.image_category} src={linkToImg} alt={label}></img>
        <p className={s.label_p}>{label}</p>
      </div>
    </Link>
  );
}
