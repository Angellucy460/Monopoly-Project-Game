import React from "react";
import "./board.css"

function GameBoard() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
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