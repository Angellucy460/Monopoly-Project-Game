import { boardSpaces } from "../data/boardData.jsx"

function PlayerInfo({ players, currentPlayerIndex }) {
  return (
    <div className="player-info">
      <h2>Players</h2>
      {players.map((player, index) => (
        <div key={player.id} className={`player ${index === currentPlayerIndex ? "current-player" : ""}`}>
          <h3>
            {player.name} {player.isComputer ? "🤖" : "👤"}
          </h3>
          <p>Money: ${player.money}</p>
          <p>Position: {boardSpaces[player.position].name}</p>
          <p>Properties: {player.properties.length}</p>
          {player.inJail && <p className="jail-status">In Jail</p>}
        </div>
      ))}
    </div>
  )
}

export default PlayerInfo
