import React from "react";

const Menu = ({ gameMode, difficultyLevel, onGameModeChange, onDifficultyChange }) => {
    const handleGameModeChange = (event) => {
        const mode = event.target.value;
        onGameModeChange(mode);
      };

  const handleDifficultyChange = (event) => {
    const level = parseInt(event.target.value);
    onDifficultyChange(level);
  };


    return (
        <div className="menu">
          <h2>Menu</h2>
          <label htmlFor="game-mode">Mode de jeu :</label>
          <select id="game-mode" value={gameMode} onChange={handleGameModeChange}>
            <option value="human">Joueur contre Joueur</option>
            <option value="computer">Joueur contre Ordinateur</option>
          </select>
          {gameMode === "computer" && (
            <div>
              <label htmlFor="difficulty-level">Niveau de difficulté :</label>
              <select id="difficulty-level" value={difficultyLevel} onChange={handleDifficultyChange}>
                <option value="1">Facile</option>
                <option value="2">Moyen</option>
                <option value="3">Difficile</option>
              </select>
            </div>
          )}
        </div>
      );
};

export default Menu;
