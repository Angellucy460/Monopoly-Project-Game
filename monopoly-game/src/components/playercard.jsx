import React from "react";
import "./playercard.css"; 

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <h5>{player.name}</h5>
      <p><strong>Cash:</strong> ${player.cash}</p>
      <p><strong>Position:</strong> {player.position}</p>
      <p><strong>Properties:</strong> {player.properties.join(", ") || "None"}</p>
      {player.inJail && <p className="text-danger">🚔 In Jail</p>}
    </div>
  );
}

export default PlayerCard;
