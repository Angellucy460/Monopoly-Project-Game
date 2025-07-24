import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Tile = ({ tile }) => {
  const { state } = useContext(GameContext);

  // 
  const playersOnTile = Array.isArray(state?.players)
    ? state.players.filter((player) => player.position === tile.id)
    : [];

  return (
    <div
      className="tile"
      style={{
        backgroundColor: tile.color || "#e0e0e0",
        border: "1px solid #999",
        borderRadius: "8px",
        padding: "6px",
        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontSize: "0.75rem",
        position: "relative",
      }}
    >
      {/* اسم العقار */}
      <div style={{ fontWeight: "bold", fontSize: "0.8rem" }}>{tile.name}</div>

      {/* رقم التايل */}
      <div style={{ fontSize: "0.65rem", color: "#666" }}>#{tile.id}</div>

      {/* السعر */}
      {tile.price && (
        <div style={{ fontSize: "0.7rem", color: "#006600" }}>
          💰 ${tile.price}
        </div>
      )}

      {/* المالك */}
      {tile.owner && (
        <div style={{ fontSize: "0.7rem", color: "#00008B" }}>
          🧍 Owner: {tile.owner.name}
        </div>
      )}

      {/* دوائر اللاعبين على التايل */}
      {playersOnTile.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            marginTop: "6px",
          }}
        >
          {playersOnTile.map((player) => (
            <div
              key={player.id}
              title={player.name}
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: player.color || "#000",
                borderRadius: "50%",
                border: "1px solid #fff",
              }}
            />
          ))}
        </div>
      )}

      {/* رسالة إن اللاعب واقف على ملكية مملوكة */}
      {playersOnTile.length > 0 &&
        tile.owner &&
        playersOnTile.some((p) => p.id !== tile.owner.id) && (
          <div style={{ fontSize: "0.7rem", color: "#b00", marginTop: "4px" }}>
            🏠 You landed on {tile.owner.name}'s property!
          </div>
        )}

      {/* رسالة إذا التايل بدون مالك */}
      {playersOnTile.length > 0 && !tile.owner && (
        <div style={{ fontSize: "0.7rem", color: "#007700", marginTop: "4px" }}>
          👛 Available for purchase
        </div>
      )}
    </div>
  );
};

export default Tile;

