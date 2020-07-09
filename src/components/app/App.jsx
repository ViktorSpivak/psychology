import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import { Contacts } from "../contacts/Contacts";
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
// import { CSSTransition } from "react-transition-group";

import style from "./app.module.css";

export const App = () => {
  return (
    <div className={style.container}>
      <PropositionWindow />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/socialLinks" component={SocialLinks}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/game" component={Game}></Route>

        <Route path="/mystory" component={MiddlePage}></Route>
        <Route path="/specialization" component={MiddlePage}></Route>
        {/* <Route path="/forwhom" component={ForWhom}></Route> */}
        <Route path="/contacts" component={MiddlePage}></Route>
        <Route path="/howItWorks" component={MiddlePage}></Route>
        <Route path="/watch" component={MiddlePage}></Route>
        {/* <Route path="/read" component={Read}></Route> */}
        <Route path="/askme" component={AskMe}></Route>
        <Route component={HomePage}></Route>
      </Switch>
    </div>
  );
};
