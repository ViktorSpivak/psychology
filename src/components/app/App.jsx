import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Contacts from "../contacts/Contacts";
// import ForWhom from "../forwhom/ForWhom";
import Menu from "../menu/Menu";
// import Watch from "../watch/Watch";
// import MyStory from "../mystory/MyStory";
// import NameLogo from "../namelogo/NameLogo";
// import Read from "../read/Read";
import Useful from "../useful/Useful";
import SocialLinks from "../sociallinks/SocialLinks";
// import Specialization from "../specialization/Specialization";
import style from "./app.module.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/sociallinks" component={SocialLinks}></Route>
          <Route path="/menu" component={Menu}></Route>

          {/* <Route path="/mystory" component={MyStory}></Route>
        <Route path="/specialization" component={Specialization}></Route>
        <Route path="/forwhom" component={ForWhom}></Route> */}
          <Route path="/contacts" component={Contacts}></Route>
          {/* <Route path="/watch" component={Watch}></Route> */}
          {/* <Route path="/read" component={Read}></Route> */}
          <Route path="/useful" component={Useful}></Route>
          <Route component={HomePage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
