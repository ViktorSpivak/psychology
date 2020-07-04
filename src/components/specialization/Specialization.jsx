import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import style from "./specialization.module.css";

export const Specialization = () => {
  const [turn1, setTurn1] = useState(false);
  const [turn2, setTurn2] = useState(false);
  const [turn3, setTurn3] = useState(false);
  const [turn4, setTurn4] = useState(false);

  useEffect(() => {
    const interval1 = setInterval(() => setTurn1(!turn1), 9000);
    const interval2 = setInterval(() => setTurn2(!turn2), 6000);
    const interval3 = setInterval(() => setTurn3(!turn3), 7000);
    const interval4 = setInterval(() => setTurn4(!turn4), 4000);
    return clearInterval(interval1, interval2, interval3, interval4);
    // clearInterval(interval1), clearInterval(interval1);
    // clearInterval(interval1);
  }, []);

  return (
    <div
      className={style.container}

      //  onClick={() => setState(!state)}
    >
      <ul className={style.specialization}>
        <li className={style.scene}>
          <CSSTransition in={turn1} timeout={1000} classNames={style}>
            <div className={style.card}>
              <div className={style.card__face}>front</div>
              <div className={style.card__face_back}>back</div>
            </div>
          </CSSTransition>
        </li>
        <li className={style.scene}>
          <CSSTransition in={turn2} timeout={1000} classNames={style}>
            <div className={style.card}>
              <div className={style.card__face}>front</div>
              <div className={style.card__face_back}>back</div>
            </div>
          </CSSTransition>
        </li>
        <li className={style.scene}>
          <CSSTransition in={turn3} timeout={1000} classNames={style}>
            <div className={style.card}>
              <div className={style.card__face}>front</div>
              <div className={style.card__face_back}>back</div>
            </div>
          </CSSTransition>
        </li>
        <li className={style.scene}>
          <CSSTransition in={turn4} timeout={1000} classNames={style}>
            <div className={style.card}>
              <div className={style.card__face}>front</div>
              <div className={style.card__face_back}>back</div>
            </div>
          </CSSTransition>
        </li>
      </ul>
      <p className={style.text}>Specialization</p>
    </div>
  );
};
