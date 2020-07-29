import React from "react";
import { Logo } from "../../svgcomponents/Logo";
import style from "./watch.module.css";

export const Watch = () => {
  return (
    <div className={style.container}>
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      <footer className={style.footer}>
        <Logo />
      </footer>

      {/* <p className={style.text}>Watch</p> */}
    </div>
  );
};
