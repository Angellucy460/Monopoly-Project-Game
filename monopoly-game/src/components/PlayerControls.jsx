// src/components/PlayerControls.jsx
import React, { useState } from "react";
import useGame from "../context/useGame";

function PlayerControls() {
  const {
    currentPlayerIndex,
    players,
    movePlayer,
    nextTurn,
    logEvent,
    winner,
  } = useGame();

  const [dice, setDice] = useState(null);
  const currentPlayer = players?.[currentPlayerIndex];
  if (!currentPlayer) return null;

  const handleRollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);

    logEvent(`${currentPlayer.name} rolled a ${roll} 🎲`);
    movePlayer(roll);

    setTimeout(() => {
      logEvent(`${currentPlayer.name} ended their turn`);
      nextTurn();
    }, 1000);
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Current Turn</h2>
      <p className="mb-1">
        Player: <span className="font-semibold">{currentPlayer.name}</span>
      </p>
      <p className="mb-1">Cash: ${currentPlayer.money}</p>
      {dice && <p className="mb-4">You rolled: {dice}</p>}

      {!winner && (
        <button
          onClick={handleRollDice}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Roll Dice 🎲
        </button>
      )}
    </div>
  );
}

export default PlayerControls;
