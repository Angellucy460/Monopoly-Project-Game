import React from "react";

function GameBoard() {
    return (
        <div className="board-container container mt-4">
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