import React from "react";
import Tile from "./square";
import "./board.css"

function Board() {
  const tileLabels = [
    "GO", "Mediterranean Ave", "Community Chest", "Baltic Ave", "Income Tax",
    "Reading Railroad", "Chance", "Vermont Ave", "Connecticut Ave", "Jail",
    "St. Charles Place", "Electric Company", "States Ave", "Virginia Ave", "Pennsylvania Railroad",
    "St. James Place", "Community Chest", "Tennessee Ave", "New York Ave", "Free Parking",
    "Kentucky Ave", "Chance", "Indiana Ave", "Illinois Ave", "B&O Railroad",
    "Atlantic Ave", "Ventnor Ave", "Water Works", "Marvin Gardens", "Go To Jail",
    "Pacific Ave", "North Carolina Ave", "Community Chest", "Pennsylvania Ave", "Short Line Railroad",
    "Chance", "Park Place", "Luxury Tax", "Boardwalk"
  ];

  return (
    <div className="board-grid">
      {tileLabels.map((label, index) => (
        <Tile key={index} label={label} />
      ))}
    </div>
  );
}

export default Board;