import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Menu from "../menu/Menu";
import { Game } from "../game/Game";
import { AskMe } from "../askMe/AskMe";
import SocialLinks from "../socialLinks/SocialLinks";
import { MiddlePage } from "../middlepage/Middlepage";
import { SendButton } from "../sendButton/SendButton";
import style from "./app.module.css";

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
          ]}
        >
          <MiddlePage post={<SendButton />} />
        </Route>
        <Route path="/askMe">
          <AskMe />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
