// src/components/PlayerPanel.jsx

import React from "react";
import useGame from "../context/useGame";

function PlayerPanel() {
  const { players, currentPlayerIndex } = useGame();

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Players</h2>
      <ul className="space-y-2">
        {players.map((player, index) => (
          <li
            key={index}
            className={`p-3 rounded border ${
              index === currentPlayerIndex
                ? "bg-blue-100 border-blue-400 font-semibold"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{player.name}</span>
              <span>${player.money}</span>
            </div>
            <div className="text-sm text-gray-500">
              Position: {player.position}
            </div>
            {player.properties.length > 0 && (
              <div className="text-sm mt-1">
                🏠 Properties:{" "}
                {player.properties.map((prop, i) => (
                  <span key={i}>
                    {prop.name}
                    {i < player.properties.length - 1 && ", "}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerPanel;