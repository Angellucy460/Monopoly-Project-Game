import React from "react";
import "./board.css";

const Board = () => {
  // Create a 11x11 grid, total of 121 cells
  const tiles = [];

  const cornerTiles = {
    "0,10": "GO", // Top left corner
    "0,0": "JAIL",// Top right corner
    "10,0": "FREE PARKING", // Bottom right corner
    "10,10": "GO TO JAIL" // Bottom left corner
  };
  const tileLabels = {
  // Top row (row = 0, right to left)
  "0,9": "Mediterranean Ave",
  "0,8": "Community Chest",
  "0,7": "Baltic Ave",
  "0,6": "Income Tax",
  "0,5": "Reading Railroad",
  "0,4": "Oriental Ave",
  "0,3": "Chance",
  "0,2": "Vermont Ave",
  "0,1": "Connecticut Ave",

  // Left column (col = 0, top to bottom)
  "1,0": "St. Charles Place",
  "2,0": "Electric Company",
  "3,0": "States Ave",
  "4,0": "Virginia Ave",
  "5,0": "Pennsylvania Railroad",
  "6,0": "St. James Place",
  "7,0": "Community Chest",
  "8,0": "Tennessee Ave",
  "9,0": "New York Ave",

  // Bottom row (row = 10, left to right)
  "10,1": "Kentucky Ave",
  "10,2": "Chance",
  "10,3": "Indiana Ave",
  "10,4": "Illinois Ave",
  "10,5": "B&O Railroad",
  "10,6": "Atlantic Ave",
  "10,7": "Ventnor Ave",
  "10,8": "Water Works",
  "10,9": "Marvin Gardens",

  // Right column (col = 10, bottom to top)
  "9,10": "Pacific Ave",
  "8,10": "North Carolina Ave",
  "7,10": "Community Chest",
  "6,10": "Pennsylvania Ave",
  "5,10": "Short Line",
  "4,10": "Chance",
  "3,10": "Park Place",
  "2,10": "Luxury Tax",
  "1,10": "Boardwalk",
};
const propertyGroups = {
  // Top
  "0,9": "brown",
  "0,7": "brown",
  "0,4": "light-blue",
  "0,2": "light-blue",
  "0,1": "light-blue",

  // Left
  "1,0": "pink",
  "3,0": "pink",
  "4,0": "pink",
  "6,0": "orange",
  "8,0": "orange",
  "9,0": "orange",

  // Bottom
  "10,1": "red",
  "10,3": "red",
  "10,4": "red",
  "10,6": "yellow",
  "10,7": "yellow",
  "10,9": "yellow",

  // Right
  "9,10": "green",
  "8,10": "green",
  "6,10": "green",
  "3,10": "dark-blue",
  "1,10": "dark-blue",
};
const playerPosition = "0,10";

  for (let row = 0; row < 11; row++) { // Loop through each row
    for (let col = 0; col < 11; col++) { // Loop through each column

      const key = `${row},${col}`; // Create a unique key for each tile
      const isEdge = row === 0 || row === 10 || col === 0 || col === 10; // Check if the tile is on the edge of the board

      if (isEdge) {
        const label = cornerTiles[key] || tileLabels[key] || "";
        const isCorner = key in cornerTiles; 
        const isSide = isEdge && !isCorner; // Check if the tile is a side tile (not a corner)
        const isVertical = col === 0 || col === 10; // Check if the tile is in the vertical columns
        const propertyColor = propertyGroups[key] || ""; // Get the property color if it exists
        const hasPlayer = key === playerPosition; // Check if the tile is the player's position

        tiles.push(
          <div className={`tile ${isCorner ? "corner" : ""} ${isSide ? "side" : ""} ${propertyColor}`} key={key}>
            <span>{label}</span>

            {hasPlayer && <div className="player-token"></div>}
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

