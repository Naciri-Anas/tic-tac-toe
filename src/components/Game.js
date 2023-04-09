import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import ComputerPlayer from "./ComputerPlayer";
import Menu from "./Menu";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [gameMode, setGameMode] = useState("human");
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    setStepNumber(0);
    setXisNext(true);
    setHistory([Array(9).fill(null)]);
   
  };

  const handleDifficultyLevelChange = (level) => {
    setDifficultyLevel(level);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `revenir a l'action #${move}` : "Nouvelle Partie";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  const renderGame = () => {
    if (gameMode === "human") {
      return (
        <>
          <Board squares={history[stepNumber]} onClick={handleClick} />
          <div className="info-wrapper">
            <div>
              <h3>historique du jeu</h3>
              {renderMoves()}
            </div>
            <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Board squares={history[stepNumber]} onClick={handleClick} />
          <ComputerPlayer squares={history[stepNumber]} xO={xO} difficultyLevel={difficultyLevel} />
          <div className="info-wrapper">
            <div>
              <h3>historique du jeu</h3>
              {renderMoves()}
            </div>
            <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
          </div>
          
        </>
      );
    }
  };

  return (
    <>
      <h1> Tic Tac Toe </h1>
      <Menu mode={gameMode} onGameModeChange={handleGameModeChange} onDifficultyLevelChange={handleDifficultyLevelChange} />
      {renderGame()}
    </>
  );
};

export default Game;
