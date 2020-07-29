import React from "react";
import { Logo } from "../../svgcomponents/Logo";
import style from "./howitworks.module.css";

export default function HowItWorks() {
  return (
    <div className={style.how}>
      <p className={style.text}>How it works</p>
      <footer className={style.footer}>
        <Logo />
      </footer>
    </div>
  );
}
