import React, { useState } from "react";

const ComputerPlayer = ({ squares, xO, difficultyLevel, history, setHistory, stepNumber, setStepNumber, xIsNext, setXisNext }) => {
  const minimax = (squares, level, isMaximizing) => {
    // implementation of minimax algorithm
  };

  const generateMoves = (squares, level) => {
    let moves = [];
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        let newSquares = squares.slice();
        newSquares[i] = 'O';
        let score = minimax(newSquares, level, false);
        moves.push({ square: i, score: score });
      }
    }
    moves.sort((a, b) => b.score - a.score);
    return moves;
  };

  const makeMove = () => {
    const currentSquares = squares ? squares.slice() : [];
    let prevHistory = [...history];
   
  
    // Récupère la liste de mouvements possibles pour l'ordinateur en fonction du niveau de difficulté sélectionné
    const possibleMoves = generateMoves(currentSquares, difficultyLevel);
  
    // Choisis un mouvement aléatoire parmi les mouvements possibles
    const randomMoveIndex = Math.floor(Math.random() * possibleMoves.length);
    const chosenMove = possibleMoves[randomMoveIndex].square;
  
    // Met à jour le tableau de cases avec le mouvement choisi par l'ordinateur
    const newSquares = [...currentSquares];
    newSquares[chosenMove] = xO;
    setHistory(prevHistory => [...prevHistory, newSquares]);
    setStepNumber(prevStepNumber => prevHistory.length);
    setXisNext(prevXisNext => !xIsNext);
    setHistory([Array(9).fill(null)]);
    

  };

  return (
    <div>
      {/* Affichez le composant ComputerPlayer ici */}
      {makeMove()}
    </div>
  );
};

export default ComputerPlayer;
