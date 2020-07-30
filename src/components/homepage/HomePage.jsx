import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../svgcomponents/Logo";
import { Navigation } from "../navigation/Navigation";
import { SocialLinks } from "../socialLinks/SocialLinks";
import Wave from "../wave/Wave";
import style from "./homepage.module.css";

export class HomePage extends Component {
  render() {
    return (
      <div className={style.container}>
        <header className={style.header}>
          <Logo></Logo>
          <SocialLinks></SocialLinks>
        </header>
        <main className={style.main}>
          <h1 className={style.title}>Юлия Сохач</h1>

          <nav className={style.prophesy}>
            <Link to="/spacialization/mentoring" className={style.link}>
              Коуч.
            </Link>
            <Link to="/spacialization/coaching" className={style.link}>
              Ментор.
            </Link>
            <Link to="/spacialization/psychology" className={style.link}>
              Психолог.
            </Link>
          </nav>
          <Navigation />
          <div className={style.wave}>
            <Wave></Wave>
          </div>
          <Link to="/game" className={style.gameClick}>
            Don`t click it :)
          </Link>
          <Link to="/login" className={style.login}>
            <button>Login</button>
          </Link>
        </main>
      </div>
    );
  }
}

export default HomePage;
