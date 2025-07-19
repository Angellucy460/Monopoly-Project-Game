import React from "react";
import "./board.css"

function GameBoard() {
    return (
        <div className="board-container container mt-8">
            <div className="board-grid">
                {}
                 {[...Array(40)].map((_, i) => ( // creates an array of undefined values
          <div className="tile" key={i}>
            {i}
          </div>
        ))}
            </div>
        </div>
    );

};
export default GameBoard;