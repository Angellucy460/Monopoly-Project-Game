import React from "react";
import "./board.css";

const Board = () => {
  // Create a 11x11 grid, total of 121 cells
  const tiles = [];

  for (let row = 0; row < 11; row++) {
    for (let col = 0; col < 11; col++) {
      const isEdge =
        row === 0 || row === 10 || col === 0 || col === 10;

      if (isEdge) {
        tiles.push(
          <div className="tile" key={`${row}-${col}`}>
            {`${row},${col}`}
          </div>
        );
      } else {
        tiles.push(
          <div className="tile empty" key={`${row}-${col}`}></div>
        );
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
