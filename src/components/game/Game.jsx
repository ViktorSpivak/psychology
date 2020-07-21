import React, { useState, useEffect } from "react";
import style from "./game.module.css";
import stone from "../../images/handsPhoto/stone.png";
import rock from "../../images/handsPhoto/rock.png";
import scissors from "../../images/handsPhoto/scissors.png";
import AI from "../../images/handsPhoto/ai.png";
import paper from "../../images/handsPhoto/paper.png";

export const Game = () => {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState({ ai: 0, player: 0, ties: 0 });
  const [winner, setWinner] = useState("");
  const [imagePlayer, setImagePlayer] = useState("rock");
  const [imageAI, setImageAI] = useState("rock");
  const [results, setResults] = useState([]);
  useEffect(() => {
    round &&
      imagePlayer !== "rock" &&
      setResults((results) => [
        ...results,
        { round, imagePlayer, imageAI, winner },
      ]);
  }, [imagePlayer]);
  const photos = { stone, paper, scissors, rock };
  console.log(results);
  const startRound = (ev) => {
    ev.preventDefault();
    const { name } = ev.currentTarget;
    setImageAI("rock");
    setImagePlayer("rock");
    if (name === "stone") {
      setTimeout(() => setImagePlayer("stone"), 200);
    }
    if (name === "paper") {
      setTimeout(() => setImagePlayer("paper"), 200);
    }
    if (name === "scissors") {
      setTimeout(() => setImagePlayer("scissors"), 200);
    }
    setRound(round + 1);

    const numberOfImage = Math.floor(Math.random() * 3);
    const aiPhoto = Object.entries(photos)[numberOfImage];
    setTimeout(() => setImageAI(aiPhoto[0]), 150);
    const isTie = name === aiPhoto[0];
    const playerWin =
      (name === "stone" && aiPhoto[0] === "scissors") ||
      (name === "scissors" && aiPhoto[0] === "paper") ||
      (name === "paper" && aiPhoto[0] === "stone");

    if (isTie) {
      setWinner("tie");
      setScore({ ...score, ties: score.ties + 1 });
    } else {
      if (playerWin) {
        setWinner("gamer");
        setScore({ ...score, player: score.player + 1 });
      } else {
        setWinner("ai");
        setScore({ ...score, ai: score.ai + 1 });
      }
    }
  };
  return (
    <div className={style.container}>
      <h2>ROUND {round + 1}</h2>
      <ul className={style.results}>
        <li className={style.results__list}>
          <h3 className={style.player__win}>ПОБЕДА</h3>
          <p className={style.player__result}>{score.player}</p>
        </li>
        <li className={style.results__list}>
          <h3 className="score__item-title">НИЧЬЯ</h3>
          <p className={style.tie__result}>{score.ties}</p>
        </li>
        <li className={style.results__list}>
          <h3 className={style.ai__win}>ПОБЕДА</h3>
          <p className={style.ai__result}>{score.ai}</p>
        </li>
      </ul>
      <div className={style.game}>
        <ul className={style.player}>
          <div className={style.hands}>
            <img
              src={photos[imagePlayer]}
              alt={imagePlayer}
              className={style.hands__left}
            />
          </div>
          <ul className={style.player__select}>
            <li>
              <button
                type="button"
                className={style.player__selectBtn}
                name="stone"
                onClick={startRound}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                  <title>rock-button</title>
                  <g
                    fill="none"
                    // fill-rule="evenodd"
                  >
                    <circle fill="#e62649" cx="30" cy="30" r="30"></circle>
                    <path
                      d="M37.048 23.704h-5.492v-2.53L30.38 20H22.36L16 26.36v7.28L22.36 40h12.096l1.13-1.13 1.48-9.918 1.156-.778v-3.296l-1.174-1.174zm-.307 3.677l-1.056.704-1.481 10.082-.352.352H22.974l-5.493-5.493v-6.052l5.493-5.493h6.793l.307.308v1.915h-2.963v1.481h9.322l.308.308v1.888z"
                      fill="#FAF9F8"
                      // fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={style.player__selectBtn}
                name="paper"
                onClick={startRound}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                  <title>paper-button</title>
                  <g
                    fill="none"
                    //  fill-rule="evenodd"
                  >
                    <circle fill="#e62649" cx="30" cy="30" r="30"></circle>
                    <path
                      d="M39.704 38.826v-2.53h3.27l1.174-1.174v-2.53h1.789l1.174-1.173V28.58l-1.174-1.174h-1.048v-2.53l-1.174-1.173h-8.519l.434-.434v-2.096L34.456 20H22.359L16 26.36v7.28L22.36 40h16.17l1.174-1.174zm-16.73-.307l-5.493-5.493v-6.052l5.493-5.493h10.867l.307.308v.867L33.1 23.704h-5.989v1.481H43.1l.307.308v1.914h-11.11v1.482h13.025l.308.307v1.608l-.308.307H32.296v1.482h10.37v1.914l-.307.308H32.296v1.481h5.926v1.915l-.307.308h-14.94z"
                      fill="#FAF9F8"
                      // fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={style.player__selectBtn}
                name="scissors"
                onClick={startRound}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                  <title>scissors-button</title>
                  <g
                    fill="none"
                    // fill-rule="evenodd"
                  >
                    <circle fill="#e62649" cx="30" cy="30" r="30"></circle>
                    <path
                      d="M46 31.563l-6.104-2.674h5.297l1.177-1.174v-2.837l-1.174-1.174h-13.64v-2.53L30.38 20H22.36L16 26.36v7.28L22.36 40h10.614l1.111-1.111 1-6.004 8.37 3.215 1.541-.415 1.419-2.455L46 31.563zM44.037 34.4l-.481.13-9.63-3.704-1.211 7.322-.37.37h-9.37l-5.494-5.492v-6.052l5.493-5.493h6.793l.307.308v1.915H26.37v1.481h18.211l.308.308V27.1l-.308.307H35.26v1.063l9.482 4.167.1.37-.804 1.393z"
                      fill="#FAF9F8"
                      // fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </button>
            </li>
          </ul>
        </ul>
        <div className={style.tie}>
          <h2>ROUNDS</h2>
          <ul>
            <li></li>
            <li></li>
          </ul>

          <li className={style.totalResults}></li>
          <li className={style.advice}></li>
        </div>
        <ul className={style.ai}>
          <div className={style.hands}>
            <img
              src={photos[imageAI]}
              alt={imageAI}
              className={style.hands__right}
            />
          </div>
          <div>
            <img src={AI} alt="ai" className={style.ai__image} />
          </div>
        </ul>
      </div>
    </div>
  );
};
