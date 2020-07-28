import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../homepage/HomePage";
// import { Contacts } from "../contacts/Contacts";
// import ForWhom from "../forwhom/ForWhom";
import Menu from "../menu/Menu";
import { Game } from "../game/Game";

// import Watch from "../watch/Watch";
// import MyStory from "../mystory/MyStory";
// import NameLogo from "../namelogo/NameLogo";
// import Read from "../read/Read";
import { AskMe } from "../askMe/AskMe";
import SocialLinks from "../socialLinks/SocialLinks";
import { MiddlePage } from "../middlepage/Middlepage";
// import Specialization from "../specialization/Specialization";
import { PropositionWindow } from "../propositionWindow/PropositionWindow";

import style from "./app.module.css";
// import HowItWorks from "../howItWorks/HowItWorks";

export const App = () => {
  // const [matchHome, setMatchHome] = useState(false);
  // const match = useLocation();
  // console.log(matchHome);
  // useEffect(() => {
  //   setMatchHome(false);
  // }, []);
  // console.log(matchHome);
  // setMatchHome(false);
  return (
    <div className={style.container}>
      {/* <PropositionWindow /> */}

      <Switch>
        {/* <Route path="/" exact>
          <HomePage />
        </Route> */}
        <Route path="/socialLinks">
          <SocialLinks />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route
          path={[
            "/mystory",
            "/specialization",
            "/contacts",
            "/howItWorks",
            "/watch",
            // "/askme",
          ]}
        >
          <MiddlePage post={<PropositionWindow />} />
        </Route>
        {/* <Route path="/specialization">
          <MiddlePage />
        </Route> */}
        {/* <Route path="/forwhom" component={ForWhom}></Route> */}
        {/* <Route path="/contacts">
          <MiddlePage />
        </Route> */}
        {/* <Route path="/howItWorks">
          <MiddlePage />
        </Route> */}
        {/* <Route path="/watch">
          <MiddlePage />
        </Route> */}
        <Route path="/askMe">
          <AskMe />
        </Route>
        <Route
        // children={() => {
        //   console.log("ccc");
        //   setMatchHome(true);
        //   return <HomePage />;
        // }}
        >
          <HomePage />
          {/* <PropositionWindow homepage={true} /> */}
        </Route>
      </Switch>
    </div>
  );
};
