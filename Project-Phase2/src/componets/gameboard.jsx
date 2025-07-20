import React from "react";
import "./board.css";

const Board = () => {
  // Create a 11x11 grid, total of 121 cells
  const tiles = [];

  const cornerTiles = {
    "0,10": "GO",
    "0,0": "JAIL",
    "10,0": "FREE PARKING",
    "10,10": "GO TO JAIL"
  };

  for (let row = 0; row < 11; row++) {
    for (let col = 0; col < 11; col++) {
      const key = `${row},${col}`; 
      const isEdge = row === 0 || row === 10 || col === 0 || col === 10;

      if (isEdge) {
        const label = cornerTiles[key] || "";
        const isCorner = key in cornerTiles;

        tiles.push(
          <div className={`tile ${isCorner ? "corner" : ""}`} key={key}>
            <span>{label}</span>
          </div>
        );
      } else {
        tiles.push(<div className="tile empty" key={key}></div>);
      }
    }
  }

  
  return (
    <div className="board-container container mt-4 d-flex justify-content-center align-items-center min-vh-100">
      <div className="board-grid">{tiles}</div>
    </div>
  );
};

export default Board;

