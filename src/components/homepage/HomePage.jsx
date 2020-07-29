import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../svgcomponents/Logo";
import SocialLinks from "../socialLinks/SocialLinks";
import Wave from "../wave/Wave";
import style from "./homepage.module.css";

export class HomePage extends Component {
  render() {
    return (
      <div className={style.container}>
        <header className={style.headerBlock}>
          <Logo></Logo>
          <SocialLinks></SocialLinks>
        </header>
        <main className={style.main}>
          <h1 className={style.title}>Юлия Сохач</h1>

          <ul className={style.prophesy}>
            <li className={style.prophesy__list}>
              <Link
                to="/spacialization/mentoring"
                className={style.prophesy__link}
              >
                Коуч.
              </Link>
            </li>
            <li className={style.prophesy__list}>
              <Link
                to="/spacialization/coaching"
                className={style.prophesy__link}
              >
                Ментор.
              </Link>
            </li>
            <li className={style.prophesy__list}>
              <Link
                to="/spacialization/psychology"
                className={style.prophesy__link}
              >
                Психолог.
              </Link>
            </li>
          </ul>
          <ul className={style.frontInfoList}>
            <li className={style.frontInfoList__list}>
              <Link to="/mystory" className={style.frontInfoList__link}>
                Обо мне
              </Link>
            </li>
            <li className={style.frontInfoList__list}>
              <Link to="/specialization" className={style.frontInfoList__link}>
                Ситуации,
                <br /> когда ко мне обращаются
              </Link>
            </li>
            <li className={style.frontInfoList__list}>
              <Link to="/howItWorks" className={style.frontInfoList__link}>
                Как это работает
              </Link>
            </li>
            <li className={style.frontInfoList__list}>
              <Link to="/contacts" className={style.frontInfoList__link}>
                Как со мной <br /> связаться
              </Link>
            </li>
            <li className={style.frontInfoList__list}>
              <Link to="/watch" className={style.frontInfoList__link}>
                Посмотреть и почитать
              </Link>
            </li>
          </ul>
          <div className={style.wave}>
            <Wave></Wave>
          </div>
          <Link to="/game" className={style.gameClick}>
            Don`t click it :)
          </Link>
        </main>
      </div>
    );
  }
}

export default HomePage;
