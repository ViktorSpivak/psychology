import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Contacts } from "../contacts/Contacts";
import { MyStory } from "../mystory/MyStory";
import { Specialization } from "../specialization/Specialization";
import HowItWorks from "../howItWorks/HowItWorks";
import Watch from "../watch/Watch";

import style from "./middlepage.module.css";
import styleLinks from "./styleLinks.module.css";

export const MiddlePage = () => {
  const [state, setState] = useState(false);
  const daleyPage = () => {
    setTimeout(() => setState(true), 1000);
  };
  const daleyLeafOver = 500;
  const matchMystory = useRouteMatch("/myStory");
  const matchContacts = useRouteMatch("/contacts");
  const matchSpecialization = useRouteMatch("/specialization");
  const matchHowItWorks = useRouteMatch("/howItWorks");
  const matchWatch = useRouteMatch("/watch");
  console.log(document.body.clientHeight);
  // , document.body.clientWidth);

  return (
    <TransitionGroup appear={true} className={style.container}>
      {/* <div className={style.container}> */}
      {matchMystory ? (
        <CSSTransition
          key={matchMystory}
          timeout={daleyLeafOver}
          classNames={style}
          // unmountOnExit
        >
          <div className={style.componentWrapper}>
            <MyStory />
          </div>
        </CSSTransition>
      ) : (
        /* {state && <MyStory />} */
        // </div>

        <CSSTransition
          timeout={daleyLeafOver}
          onEnter={() => setState(false)}
          onEntered={daleyPage}
          classNames={styleLinks}
        >
          <Link to="/mystory" className={styleLinks.link}>
            <span className={styleLinks.linkText}>Обо мне</span>
          </Link>
        </CSSTransition>
      )}
      {matchSpecialization ? (
        <CSSTransition
          key={matchSpecialization}
          timeout={daleyLeafOver}
          classNames={style}
          unmountOnExit
        >
          <div className={style.componentWrapper}>
            <Specialization />
          </div>
        </CSSTransition>
      ) : (
        /* {state && <Specialization />} */
        // </div>
        //
        <CSSTransition
          timeout={daleyLeafOver}
          onEnter={() => setState(false)}
          onEntered={daleyPage}
          classNames={styleLinks}
        >
          <Link to="/specialization" className={styleLinks.link}>
            <span className={styleLinks.linkText}>
              Ситуации, когда ко мне обращаются
            </span>
          </Link>
        </CSSTransition>
      )}
      {matchHowItWorks ? (
        <CSSTransition
          key={matchHowItWorks}
          timeout={daleyLeafOver}
          classNames={style}
          // unmountOnExit
        >
          <div className={style.componentWrapper}>
            <HowItWorks />
          </div>
        </CSSTransition>
      ) : (
        /* {state && <HowItWorks />} */
        // </div>
        //
        <CSSTransition
          timeout={daleyLeafOver}
          onEnter={() => setState(false)}
          onEntered={daleyPage}
          classNames={styleLinks}
        >
          <Link to="/howItWorks" className={styleLinks.link}>
            <span className={styleLinks.linkText}>Как это работает</span>
          </Link>
        </CSSTransition>
      )}
      {matchContacts ? (
        <CSSTransition
          key={matchContacts}
          timeout={daleyLeafOver}
          classNames={style}
          // unmountOnExit
        >
          <div className={style.componentWrapper}>
            <Contacts />
          </div>
        </CSSTransition>
      ) : (
        /* {state && <Contacts />} */
        // </div>
        //
        <CSSTransition
          timeout={daleyLeafOver}
          onEnter={() => setState(false)}
          onEntered={daleyPage}
          classNames={styleLinks}
        >
          <Link to="/contacts" className={styleLinks.link}>
            <span className={styleLinks.linkText}>Как со мной связаться</span>
          </Link>
        </CSSTransition>
      )}
      {matchWatch ? (
        <CSSTransition
          key={matchWatch}
          timeout={daleyLeafOver}
          classNames={style}
          // unmountOnExit
        >
          <div className={style.componentWrapper}>
            <Watch />
          </div>
        </CSSTransition>
      ) : (
        /* {state && <Watch />} */
        // </div>

        <CSSTransition
          timeout={daleyLeafOver}
          onEnter={() => setState(false)}
          onEntered={daleyPage}
          classNames={styleLinks}
        >
          <Link to="/watch" className={styleLinks.link}>
            <span className={styleLinks.linkText}>Посмотреть и почитать</span>
          </Link>
        </CSSTransition>
      )}
    </TransitionGroup>
    // </div>
  );
};
// export const MiddlePage = () => {
//   const [state, setstate] = useState(false);
//   const [myStory, setMyStory] = useState(false);
//   const [contacts, setContacts] = useState(false);
//   const [useful, setUseful] = useState(false);
//   const [forwhom, setForwhom] = useState(false);
//   const [watch, setWatch] = useState(false);

//   const matchMystory = useRouteMatch("/mystory");
//   const matchContacts = useRouteMatch("/contacts");
//   const matchUseful = useRouteMatch("/useful");
//   const matchForwhom = useRouteMatch("/forwhom");
//   const matchWatch = useRouteMatch("/watch");

//   useEffect(() => {
//     matchMystory && setMyStory(true);
//     matchMystory || setMyStory(false);
//   }, [matchMystory]);
//   useEffect(() => {
//     matchUseful && setUseful(true);
//     matchUseful || setUseful(false);
//   }, [matchUseful]);
//   useEffect(() => {
//     matchContacts && setContacts(true);
//     matchContacts || setContacts(false);
//   }, [matchContacts]);
//   useEffect(() => {
//     matchForwhom && setForwhom(true);
//     matchForwhom || setForwhom(false);
//   }, [matchForwhom]);
//   useEffect(() => {
//     matchWatch && setWatch(true);
//     matchWatch || setWatch(false);
//   }, [matchWatch]);

//   return (
//     <div className={style.linksContainer}>
//       <CSSTransition
//         in={myStory}
//         timeout={3000}
//         classNames={style}
//         unmountOnExit
//       >
//         <div>
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!myStory && (
//         <Link to="/mystory" className={style.linksItem}>
//           Обо мне
//         </Link>
//       )}

//       <CSSTransition
//         in={useful}
//         timeout={3000}
//         classNames={style}
//         unmountOnExit
//       >
//         <div>
//           {" "}
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!useful && (
//         <Link to="/useful" className={style.linksItem}>
//           Ситуации, когда ко мне обращаются
//         </Link>
//       )}

//       <CSSTransition
//         in={forwhom}
//         timeout={3000}
//         classNames={style}
//         unmountOnExit
//       >
//         <div>
//           {" "}
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!forwhom && (
//         <Link to="/forwhom" className={style.linksItem}>
//           Как это работает
//         </Link>
//       )}

//       <CSSTransition
//         in={contacts}
//         timeout={3000}
//         classNames={style}
//         unmountOnExit
//       >
//         <div>
//           {" "}
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!contacts && (
//         <Link to="/contacts" className={style.linksItem}>
//           Как со мной связаться
//         </Link>
//       )}

//       <CSSTransition in={watch} timeout={3000} classNames={style} unmountOnExit>
//         <div>
//           {" "}
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!watch && (
//         <Link to="/watch" className={style.linksItem}>
//           Посмотреть и почитать
//         </Link>
//       )}
//     </div>
//   );
// };
