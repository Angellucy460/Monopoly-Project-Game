import React from "react";

function Tile({ label, style }) {
  return (
    <div className="tile" style={style}>
      {label}
    </div>
  );
}

export default Tile;