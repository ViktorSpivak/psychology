import React from "react";
import { Paper } from "../../svgcomponents/paper";
import { Stone } from "../../svgcomponents/stone";
import { Scissors } from "../../svgcomponents/scissors";
import style from "./scorehistory.module.css";

export const ScoreHistory = ({ results }) => {
  const selectComponent = (color, round, choice) => {
    let svgComponent;
    switch (choice) {
      case "stone":
        svgComponent = <Stone color={color} />;
        break;
      case "scissors":
        svgComponent = <Scissors color={color} />;
        break;
      case "paper":
        svgComponent = <Paper color={color} />;
        break;
      default:
        break;
    }
    return svgComponent;
  };
  const GamersChoiceOfRound = ({ round }) => {
    const color = results[round].winner !== "gamer" ? "#e62649" : "#eb7f21";
    const choice = results[round].gamerChoice;
    return selectComponent(color, round, choice);
  };
  const AiChoiceOfRound = ({ round }) => {
    const color = results[round].winner !== "ai" ? "#e62649" : "#eb7f21";
    const choice = results[round].aiChoice;
    return selectComponent(color, round, choice);
  };

  return (
    <div>
      <div className={style.line}></div>
      <div className={style.scoreLine}>
        <span className={style.icon}>
          <GamersChoiceOfRound round={results.length - 1} />
        </span>
        <span className={style.round}>{results.length}</span>
        <span className={style.icon}>
          <AiChoiceOfRound round={results.length - 1} />
        </span>
      </div>
      {!!(results.length - 1) && (
        <>
          <div className={style.line}></div>
          <div className={style.scoreLine}>
            <span className={style.icon}>
              <GamersChoiceOfRound round={results.length - 2} />
            </span>
            <span className={style.round}>{results.length - 1}</span>
            <span className={style.icon}>
              <AiChoiceOfRound round={results.length - 2} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};
