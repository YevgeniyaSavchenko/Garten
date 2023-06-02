import React from "react";
import s from "./style.module.css";

export default function Footer() {

  const onClickInstagramm = () => {
    window.location.href = 'https://www.instagram.com/'
  }

  const onClickWhatsApp = () => {
    window.location.href = 'https://chat.whatsapp.com/Etq8tfn30LV6rRw9ifa61K'
  }

  return (
    <div className={s.footer}>
     
        <div className={s.contacts}>
          <p className={s.p_contact}>Contact</p>
          <p className={s.p_contact}>Address</p>
          <p className={s.p_number}>+49 999 999 99 99</p>
          <a
            className={s.link}
            href="https://www.google.com/search?q=telranDE&bshm=lbsc/1"
          >
            Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
          </a>
          <div className={s.footer_icons}>
            <img  onClick={onClickInstagramm} src="/images/icon1.png" alt="#" />
            <img onClick={onClickWhatsApp} src="/images/icon2.png" alt="#" />
            <p className={s.text_icons}>instagram</p>
            <p className={s.text_icons}>whatsapp</p>
          </div>
          <div className={s.contact_adress}>
            <p className={s.p_text1}>Working Hours:</p>
            <p className={s.p_text2}>24 hours a day</p>
          </div>
        </div>
     

      <div className={s.map}>
        <iframe
          title="tel_ran"
          frameBorder="0"
          width="100%"
          height="450px"
          src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010785%20Berlin+(tel_ran)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}
