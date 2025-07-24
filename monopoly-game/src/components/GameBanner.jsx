// src/components/WinnerBanner.jsx
import React from "react";
import useGame from "../context/useGame";

const WinnerBanner = () => {
  const { winner } = useGame();

  if (!winner) return null;

  return (
    <div className="bg-green-200 p-4 rounded text-center font-bold text-xl text-green-800 mt-4">
      🎉 {winner} has won the game! 🎉
    </div>
  );
};

export default WinnerBanner;
