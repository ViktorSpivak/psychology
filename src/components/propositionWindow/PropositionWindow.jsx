import React from "react";
import { Link } from "react-router-dom";
import { Massage } from "../../svgcomponents/massage";
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
      <Link to="/askMe" className={style.outerContainer}>
        {/* <CSSTransition
        in={homepage}
        timeout={{ enter: 2000, exit: 2000 }}
        classNames={style}
        unmountOnExit
      > */}
        <div className={style.container}>
          <div className={style.circle}></div>
          <Massage />
        </div>
        {/* </CSSTransition> */}
      </Link>
      {/* )} */}
    </>
  );
};
