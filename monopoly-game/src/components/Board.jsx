// === Board.jsx ===
import React from "react";
import useGame from "../context/useGame";
import clsx from "clsx";

function Tile({ tile, index, players }) {
  const playersOnTile = players.filter((p) => p.position === index);

  return (
    <div
      className={clsx(
        "border rounded-sm p-1 text-[10px] bg-white shadow-sm relative w-20 h-20",
        {
          "bg-yellow-100": tile.type === "property",
          "bg-blue-100": tile.type === "tax",
          "bg-green-100": tile.type === "utility",
          "bg-purple-100": tile.type === "railroad",
          "bg-gray-200": tile.type === "corner",
        }
      )}
    >
      <div className="font-bold">{tile.name}</div>
      {tile.price > 0 && (
        <div className="text-[9px] text-gray-500">Price: ${tile.price}</div>
      )}
      <div className="absolute bottom-1 right-1 flex space-x-1">
        {playersOnTile.map((player, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: player.color }}
            title={player.name}
          />
        ))}
      </div>
    </div>
  );
}

function Board() {
  const { players, board, winner, restartGame } = useGame();
  const topRow = board.slice(0, 11);
  const rightCol = board.slice(11, 20);
  const bottomRow = board.slice(20, 31).reverse();
  const leftCol = board.slice(31).reverse();

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1 w-fit m-auto">
      <div className="col-span-3 flex">
        {topRow.map((tile, i) => (
          <Tile key={i} tile={tile} index={i} players={players} />
        ))}
      </div>

      <div className="flex flex-col">
        {leftCol.map((tile, i) => (
          <Tile key={i + 31} tile={tile} index={i + 31} players={players} />
        ))}
      </div>

      <div className="bg-green-50 flex flex-col items-center justify-center p-4 space-y-2 rounded shadow-md">
        <span className="text-sm text-gray-600">Game UI</span>

        {winner && (
          <div className="text-center text-lg font-bold text-green-700">
            🏆 Winner: {winner}
          </div>
        )}

        <button
          onClick={restartGame}
          className="mt-2 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Restart Game 🔁
        </button>
      </div>

      <div className="flex flex-col">
        {rightCol.map((tile, i) => (
          <Tile key={i + 11} tile={tile} index={i + 11} players={players} />
        ))}
      </div>

      <div className="col-span-3 flex">
        {bottomRow.map((tile, i) => (
          <Tile key={30 - i} tile={tile} index={30 - i} players={players} />
        ))}
      </div>
    </div>
  );
}
 
export default Board;
