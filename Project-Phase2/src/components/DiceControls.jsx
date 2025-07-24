"use client"

function DiceControls({ onRollDice, diceValues, isRolling, isComputerTurn }) {
  return (
    <div className="dice-controls">
      <div className="dice-display">
        <div className="dice">{diceValues[0]}</div>
        <div className="dice">{diceValues[1]}</div>
      </div>

      <button onClick={onRollDice} disabled={isRolling || isComputerTurn} className="roll-button">
        {isRolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  )
}

export default DiceControls
