// src/App.jsx
import React from "react";
import { GameProvider } from "./context/GameContext";
import useGame from "./context/useGame";
import PlayerSetup from "./components/PlayerSetup";
import GameBoard from "./components/GameBoard";
import PlayerPanel from "./components/PlayerPanel";
import PlayerControls from "./components/PlayerControls";
import WinnerBanner from "./components/GameBanner";
import "./App.css";

const GameUI = () => {
  const { players, winner, restartGame } = useGame();

  if (!players || players.length === 0) return <PlayerSetup />;

  return (
    <div className="app-container p-4">
      {winner && (
        <div className="text-center text-2xl font-bold mb-4 text-green-600">
          🏆 Winner: {winner}
        </div>
      )}

      <button
        onClick={restartGame}
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Restart Game 🔁
      </button> 

      <GameBoard />
      <PlayerPanel />
      <PlayerControls />
      <WinnerBanner/>
    </div>
  );
};

const App = () => (
  <GameProvider>
    <GameUI />
  </GameProvider>
);

export default App;
