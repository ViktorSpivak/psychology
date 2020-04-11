import React from "react";
// import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./contacts.module.css";
import SocialLinks from "../socialLinks/SocialLinks";
import Menu from "../menu/Menu";

const Contacts = () => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <span>Yulia Sohach</span>
        <Menu />
      </div>
      <div className={style.line}></div>
      <div className={style.address}>
        <span className={style.address__title}>Address</span>
        <span className={style.address__data}>
          Киев,
          <br />
          ул.Ломоносова
        </span>
      </div>
      <div className={style.line}></div>
      <div className={style.phone}>
        <span className={style.phone__title}>
          Kievstar
          <br /> Vodafone
        </span>
        <span className={style.phone__data}>tel</span>
      </div>
      <div className={style.line}></div>
      <div className={style.mail}>
        <span className={style.mail__title}>Email</span>
        <span className={style.mail__data}>gmail</span>
      </div>
      <div className={style.line}></div>
      <div className={style.socials}>
        <span className={style.socials__title}>Socials</span>
        <span className={style.socials__data}>
          <SocialLinks></SocialLinks>
        </span>
      </div>
      <div className={style.line}></div>
      <div className={style.ask}>
        <Link to="/useful" className={style.ask__link}>
          Ask me
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
