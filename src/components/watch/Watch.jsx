import React from "react";
import { Logo } from "../../svgcomponents/Logo";
import style from "./watch.module.css";

export const Watch = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>Watch </p>
      <footer className={style.footer}>
        <Logo />
      </footer>
    </div>
  );
};
