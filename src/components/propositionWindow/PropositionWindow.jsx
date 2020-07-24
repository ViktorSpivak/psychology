import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import mail from "../../images/handsPhoto/google+mail+icon.png";
import style from "./propositionWindow.module.css";

export const PropositionWindow = () => {
  // const [show, setShow] = useState(true);

  // console.log(homepage);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShow(!show);
  //     return clearInterval(interval);
  //   }, 1000);
  // }, []);
  return (
    <>
      {/* {!homepage && ( */}
      <Link to="/askMe" className={style.outerContainer}>
        {/* <CSSTransition
        in={homepage}
        timeout={{ enter: 2000, exit: 2000 }}
        classNames={style}
        unmountOnExit
      > */}
        <div className={style.container}>
          <img src={mail} alt="mail" className={style.item} />
          <div className={style.circle}></div>
        </div>
        {/* </CSSTransition> */}
      </Link>
      {/* )} */}
    </>
  );
};
