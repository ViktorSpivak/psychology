import React, { useState } from "react";
import style from "./game.module.css";
import stone from "../../images/handsPhoto/stone.jpg";
import hand from "../../images/handsPhoto/hand.jpg";
import scissors from "../../images/handsPhoto/scissors.jpg";
import paper from "../../images/handsPhoto/paper.jpg";

export const Game = () => {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState({ ai: 0, player: 0, ties: 0 });
  const [imagePlayer, setImagePlayer] = useState(hand);
  const [imageAI, setImageAI] = useState(hand);
  const photo = { stone, paper, scissors };

  const startRound = (ev) => {
    ev.preventDefault();
    const { name } = ev.target;
    setImageAI(hand);
    setImagePlayer(hand);
    if (name === "stone") {
      setTimeout(() => setImagePlayer(photo.stone), 200);
    }
    if (name === "paper") {
      setTimeout(() => setImagePlayer(photo.paper), 200);
    }
    if (name === "scissors") {
      setTimeout(() => setImagePlayer(photo.scissors), 200);
    }
    setRound(round + 1);
    const numberOfImage = Math.floor(Math.random() * 3);
    const aiPhoto = Object.entries(photo)[numberOfImage];
    setTimeout(() => setImageAI(aiPhoto[1]), 200);
    const isTie = name === aiPhoto[0];
    const playerWin =
      (name === "stone" && aiPhoto[0] === "scissors") ||
      (name === "scissors" && aiPhoto[0] === "paper") ||
      (name === "paper" && aiPhoto[0] === "stone");

    if (isTie) {
      setScore({ ...score, ties: score.ties + 1 });
    } else {
      if (playerWin) {
        setScore({ ...score, player: score.player + 1 });
      } else setScore({ ...score, ai: score.ai + 1 });
    }
  };
  return (
    <div className={style.container}>
      <h2>ROUND {round}</h2>
      <div className={style.game}>
        <ul className={style.player}>
          <h3 className={style.player__win}>ПОБЕДА</h3>
          <p className={style.player__result}>{score.player}</p>
          <img src={imagePlayer} alt="" className={style.hands__left} />
          <ul className={style.player__select}>
            <li>
              <button
                type="button"
                className={style.player__selectBtn}
                name="stone"
                onClick={startRound}
              >
                stone
              </button>
            </li>
            <li>
              <button
                type="button"
                className={style.player__selectBtn}
                name="paper"
                onClick={startRound}
              >
                paper
              </button>
            </li>
            <li>
              <button
                type="button"
                className={style.player__selectBtn}
                name="scissors"
                onClick={startRound}
              >
                scissors
              </button>
            </li>
          </ul>
        </ul>
        <ul className={style.tie}>
          <li>
            <h3 className="score__item-title">НИЧЬЯ</h3>
          </li>
          <li>
            <p className={style.tie__result}>{score.ties}</p>
          </li>
          <li className={style.totalResults}></li>
          <li className={style.advice}></li>
        </ul>
        <ul className={style.ai}>
          <h3 className={style.ai__win}>ПОБЕДА</h3>
          <p className={style.ai__result}>{score.ai}</p>
          <img src={imageAI} alt="" className={style.hands__right} />
          <button>AI</button>
        </ul>
      </div>
    </div>
  );
};
