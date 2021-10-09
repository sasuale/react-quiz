import React from "react";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">Acertou {score} / 5 perguntas correctamente!</div>
    <button className="playBtn" onClick={playAgain}>
      Jogar novamente!
    </button>
  </div>
);

export default Result;
