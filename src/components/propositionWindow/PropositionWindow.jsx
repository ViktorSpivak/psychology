import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import style from "./propositionWindow.module.css";

export const PropositionWindow = () => {
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => setShow(true), 30000);
  // }, []);
  return (
    <CSSTransition
      in={show}
      timeout={{ enter: 2000, exit: 0 }}
      classNames={style}
      unmountOnExit
    >
      <div className={style.layout} onClick={() => setShow(false)}>
        <div className={style.modalWindow}>
          <div className={style.modalWindow_close}>&#10540;</div>
          <h1 className={style.modalWindow__title}>
            Здесь вы можете задать вопрос или записатся на консультацию
          </h1>
          <button
            className={style.modalWindow_btnClose}
            onClick={() => setShow(false)}
          >
            Закрыть
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};
