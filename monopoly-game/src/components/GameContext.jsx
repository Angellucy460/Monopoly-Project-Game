// src/context/GameContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useState(() => {
    const saved = localStorage.getItem("players");
    return saved ? JSON.parse(saved) : [];
  });
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(() => {
    const saved = localStorage.getItem("currentPlayerIndex");
    return saved ? JSON.parse(saved) : 0;
  });
  const [log, setLog] = useState(() => {
    const saved = localStorage.getItem("log");
    return saved ? JSON.parse(saved) : [];
  });
  const [winner, setWinner] = useState(() => {
    return localStorage.getItem("winner") || null;
  });

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("currentPlayerIndex", JSON.stringify(currentPlayerIndex));
    localStorage.setItem("log", JSON.stringify(log));
    localStorage.setItem("winner", winner || "");
  }, [players, currentPlayerIndex, log, winner]);

  const movePlayer = (steps) => {
    setPlayers((prev) => {
      const updated = [...prev];
      const player = { ...updated[currentPlayerIndex] };
      const newPosition = ((player.position ?? 0) + steps) % 40;


      player.position = newPosition;
      updated[currentPlayerIndex] = player;
      return updated;
    });
  };

  const nextTurn = () => {
    const activePlayers = players.filter((p) => p.money > 0);
    if (activePlayers.length === 1) {
      setWinner(activePlayers[0].name);
    } else {
      let nextIndex = (currentPlayerIndex + 1) % players.length;
      // Skip players with 0 money
      while (players[nextIndex].money <= 0) {
        nextIndex = (nextIndex + 1) % players.length;
      }
      setCurrentPlayerIndex(nextIndex);
    }
  };

  const logEvent = (event) => {
    setLog((prev) => [event, ...prev.slice(0, 19)]);
  };

  const restartGame = () => {
    localStorage.clear();
    setPlayers([]);
    setCurrentPlayerIndex(0);
    setLog([]);
    setWinner(null);
  };

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        currentPlayerIndex,
        movePlayer,
        nextTurn,
        log,
        logEvent,
        winner,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => useContext(GameContext);
export default useGame;
