import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import style from "./propositionWindow.module.css";

export const PropositionWindow = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(!show);
      return clearInterval(interval);
    }, 10000);
  }, []);
  return (
    <Link to="/askme" className={style.outerContainer}>
      <CSSTransition
        in={show}
        timeout={{ enter: 2000, exit: 2000 }}
        // onEntered={() => setTimeout(() => setShow(false), 6000)}
        classNames={style}
        unmountOnExit
      >
        <div>
          <div className={style.container}>
            <div className={style.item}>
              {/* <img src="https://www.kirupa.com/images/orange.png" alt="#" /> */}
            </div>
            <div className={style.circle}></div>
          </div>
        </div>
      </CSSTransition>
    </Link>
  );
};
