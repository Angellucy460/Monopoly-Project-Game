// === PlayerSetup.jsx ===
import React, { useState } from "react";
import useGame from "../context/useGame";

const PlayerSetup = () => {
  const { setPlayers } = useGame();
  const [names, setNames] = useState(["", ""]);

  const startGame = () => {
    const playerData = names
      .filter((n) => n.trim() !== "")
      .map((name, index) => ({
        name,
        money: 1500,
        position: 0, // ✅ very important
        properties: [],
        color: index === 0 ? "#f87171" : "#60a5fa", // red & blue
      }));

    setPlayers(playerData);
  };

  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-bold mb-2">Enter Player Names</h2>
      {names.map((name, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Player ${index + 1}`}
          value={name}
          onChange={(e) =>
            setNames((prev) =>
              prev.map((n, i) => (i === index ? e.target.value : n))
            )
          }
          className="m-2 p-1 border rounded"
        />
      ))}
      <br />
      <button
        onClick={startGame}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Start Game
      </button>
    </div>
  );
};

export default PlayerSetup;
