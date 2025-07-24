import { boardSpaces } from "../data/boardData.jsx"

function MonopolyBoard({ players }) {
  const getColorClass = (space) => {
    if (!space.color) return ""
    return `color-${space.color}`
  }

  const getSpaceTypeClass = (space) => {
    return `space-type-${space.type}`
  }

  return (
    <div className="monopoly-board">
      <h2>Monopoly Board</h2>
      <div className="board-container">
        <div className="board-grid">
          {/* Bottom row (0-10) */}
          <div className="board-row bottom-row">
            {boardSpaces.slice(0, 11).map((space) => (
              <div key={space.id} className={`board-space ${getSpaceTypeClass(space)} ${getColorClass(space)}`}>
                <div className="space-name">{space.name}</div>
                {space.price && <div className="space-price">${space.price}</div>}
                <div className="player-tokens">
                  {players
                    .filter((player) => player.position === space.id)
                    .map((player) => (
                      <div key={player.id} className="player-token">
                        {player.isComputer ? "🤖" : "👤"}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Middle section */}
          <div className="board-middle">
            {/* Left column (11-19) */}
            <div className="board-column left-column">
              {boardSpaces
                .slice(11, 20)
                .reverse()
                .map((space) => (
                  <div key={space.id} className={`board-space ${getSpaceTypeClass(space)} ${getColorClass(space)}`}>
                    <div className="space-name">{space.name}</div>
                    {space.price && <div className="space-price">${space.price}</div>}
                    <div className="player-tokens">
                      {players
                        .filter((player) => player.position === space.id)
                        .map((player) => (
                          <div key={player.id} className="player-token">
                            {player.isComputer ? "🤖" : "👤"}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>

            {/* Center area */}
            <div className="board-center">
              <div className="board-title">MONOPOLY</div>
            </div>

            {/* Right column (20-29) */}
            <div className="board-column right-column">
              {boardSpaces.slice(20, 30).map((space) => (
                <div key={space.id} className={`board-space ${getSpaceTypeClass(space)} ${getColorClass(space)}`}>
                  <div className="space-name">{space.name}</div>
                  {space.price && <div className="space-price">${space.price}</div>}
                  <div className="player-tokens">
                    {players
                      .filter((player) => player.position === space.id)
                      .map((player) => (
                        <div key={player.id} className="player-token">
                          {player.isComputer ? "🤖" : "👤"}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top row (30-39) */}
          <div className="board-row top-row">
            {boardSpaces
              .slice(30, 40)
              .reverse()
              .map((space) => (
                <div key={space.id} className={`board-space ${getSpaceTypeClass(space)} ${getColorClass(space)}`}>
                  <div className="space-name">{space.name}</div>
                  {space.price && <div className="space-price">${space.price}</div>}
                  <div className="player-tokens">
                    {players
                      .filter((player) => player.position === space.id)
                      .map((player) => (
                        <div key={player.id} className="player-token">
                          {player.isComputer ? "🤖" : "👤"}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonopolyBoard
