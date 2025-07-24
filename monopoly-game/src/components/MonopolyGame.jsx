"use client"

import { useState, useEffect } from "react"
import DiceControls from "./DiceControls.jsx"
import PlayerInfo from "./PlayerInfo.jsx"
import MonopolyBoard from "./MonopolyBoard.jsx"
import CardDisplay from "./CardDisplay.jsx"
import {
  boardSpaces,
  STARTING_MONEY,
  GO_MONEY,
  JAIL_POSITION,
  GO_TO_JAIL_POSITION,
  chanceCards,
  communityChestCards,
  shuffleCards,
} from "../data/boardData.jsx"

function MonopolyGame() {
  // Initialize players
  const [players, setPlayers] = useState([
    {
      id: "player1",
      name: "You",
      money: STARTING_MONEY,
      position: 0,
      properties: [],
      inJail: false,
      jailTurns: 0,
      jailFreeCards: 0,
      isComputer: false,
    },
    {
      id: "player2",
      name: "Computer",
      money: STARTING_MONEY,
      position: 0,
      properties: [],
      inJail: false,
      jailTurns: 0,
      jailFreeCards: 0,
      isComputer: true,
    },
  ])

  // Game state
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [diceValues, setDiceValues] = useState([1, 1])
  const [isRolling, setIsRolling] = useState(false)
  const [gameLog, setGameLog] = useState(["Game started! Your turn."])
  const [gamePhase, setGamePhase] = useState("rolling")
  const [winner, setWinner] = useState(null)
  const [chanceCardDeck, setChanceCardDeck] = useState(shuffleCards(chanceCards))
  const [communityChestDeck, setCommunityChestDeck] = useState(shuffleCards(communityChestCards))
  const [currentCard, setCurrentCard] = useState(null)
  const [currentCardType, setCurrentCardType] = useState(null)

  // Current player and space
  const currentPlayer = players[currentPlayerIndex]
  const currentSpace = boardSpaces[currentPlayer.position]

  // Add message to game log
  const addToLog = (message) => {
    setGameLog((prevLog) => [...prevLog.slice(-9), message])
  }

  // Roll dice function
  const rollDice = () => {
    if (isRolling || gamePhase !== "rolling") return

    setIsRolling(true)

    setTimeout(() => {
      const dice1 = Math.floor(Math.random() * 6) + 1
      const dice2 = Math.floor(Math.random() * 6) + 1
      const total = dice1 + dice2

      setDiceValues([dice1, dice2])
      addToLog(`${currentPlayer.name} rolled ${dice1} and ${dice2} (${total})`)

      movePlayer(total)
      setIsRolling(false)
    }, 1000)
  }

  // Move player function
  const movePlayer = (steps) => {
    const playerCopy = { ...currentPlayer }
    const newPosition = (playerCopy.position + steps) % boardSpaces.length

    // Check if player passed GO
    const passedGo = newPosition < playerCopy.position && !playerCopy.inJail
    if (passedGo) {
      playerCopy.money += GO_MONEY
      addToLog(`${playerCopy.name} passed GO and collected $${GO_MONEY}`)
    }

    playerCopy.position = newPosition

    // Handle "Go To Jail"
    if (newPosition === GO_TO_JAIL_POSITION) {
      playerCopy.position = JAIL_POSITION
      playerCopy.inJail = true
      addToLog(`${playerCopy.name} was sent to Jail!`)
    }

    const updatedPlayers = [...players]
    updatedPlayers[currentPlayerIndex] = playerCopy
    setPlayers(updatedPlayers)

    handleLandedSpace(playerCopy, updatedPlayers, newPosition)
  }

  // Handle landed space
  const handleLandedSpace = (player, allPlayers, position) => {
    const space = boardSpaces[position]
    addToLog(`${player.name} landed on ${space.name}`)

    switch (space.type) {
      case "property":
      case "railroad":
      case "utility":
        const owner = findPropertyOwner(allPlayers, position)

        if (!owner) {
          if (player.money >= space.price) {
            if (player.isComputer) {
              const shouldBuy = computerDecidesBuy(player, space)
              if (shouldBuy) {
                buyProperty(position)
              } else {
                addToLog(`Computer passes on buying ${space.name}`)
                nextTurn()
              }
            } else {
              setGamePhase("buying")
            }
          } else {
            addToLog(`${player.name} doesn't have enough money to buy ${space.name}`)
            nextTurn()
          }
        } else if (owner.id !== player.id) {
          const rent = calculateRent(space, owner)
          payRent(player, owner, rent)
          nextTurn()
        } else {
          addToLog(`${player.name} owns ${space.name}`)
          nextTurn()
        }
        break

      case "tax":
        const taxAmount = space.amount
        const updatedPlayer = { ...player, money: player.money - taxAmount }
        const updatedPlayers = [...allPlayers]
        updatedPlayers[currentPlayerIndex] = updatedPlayer

        setPlayers(updatedPlayers)
        addToLog(`${player.name} paid $${taxAmount} in tax`)
        checkGameOver(updatedPlayers)
        nextTurn()
        break

      case "chance":
        drawCard("chance")
        break

      case "chest":
        drawCard("chest")
        break

      case "gotojail":
        const jailedPlayer = { ...player, position: JAIL_POSITION, inJail: true }
        const playersAfterJail = [...allPlayers]
        playersAfterJail[currentPlayerIndex] = jailedPlayer

        setPlayers(playersAfterJail)
        addToLog(`${player.name} was sent to Jail!`)
        nextTurn()
        break

      default:
        nextTurn()
        break
    }
  }

  // Draw a card
  const drawCard = (cardType) => {
    let deck, setDeck
    if (cardType === "chance") {
      deck = chanceCardDeck
      setDeck = setChanceCardDeck
    } else {
      deck = communityChestDeck
      setDeck = setCommunityChestDeck
    }

    const card = deck[0]
    const newDeck = [...deck.slice(1), card]

    setCurrentCard(card)
    setCurrentCardType(cardType)
    setDeck(newDeck)
    addToLog(`${currentPlayer.name} drew: ${card.text}`)

    setGamePhase("card")

    setTimeout(() => {
      processCard(card)
    }, 2000)
  }

  // Process card effects
  const processCard = (card) => {
    const playerCopy = { ...currentPlayer }
    const updatedPlayers = [...players]

    switch (card.action) {
      case "move":
        const oldPosition = playerCopy.position
        playerCopy.position = card.position

        if (card.position < oldPosition && card.position !== 0) {
          playerCopy.money += GO_MONEY
          addToLog(`${playerCopy.name} passed GO and collected $${GO_MONEY}`)
        }

        updatedPlayers[currentPlayerIndex] = playerCopy
        setPlayers(updatedPlayers)
        addToLog(`${playerCopy.name} moved to ${boardSpaces[card.position].name}`)

        setTimeout(() => {
          handleLandedSpace(playerCopy, updatedPlayers, card.position)
        }, 1000)
        break

      case "collect":
        playerCopy.money += card.amount
        updatedPlayers[currentPlayerIndex] = playerCopy
        setPlayers(updatedPlayers)
        addToLog(`${playerCopy.name} collected $${card.amount}`)
        nextTurn()
        break

      case "pay":
        playerCopy.money -= card.amount
        updatedPlayers[currentPlayerIndex] = playerCopy
        setPlayers(updatedPlayers)
        addToLog(`${playerCopy.name} paid $${card.amount}`)
        checkGameOver(updatedPlayers)
        nextTurn()
        break

      case "goto-jail":
        playerCopy.position = JAIL_POSITION
        playerCopy.inJail = true
        updatedPlayers[currentPlayerIndex] = playerCopy
        setPlayers(updatedPlayers)
        addToLog(`${playerCopy.name} was sent to Jail!`)
        nextTurn()
        break

      default:
        nextTurn()
        break
    }

    setCurrentCard(null)
    setCurrentCardType(null)
    setGamePhase("rolling")
  }

  // Find property owner
  const findPropertyOwner = (allPlayers, propertyPosition) => {
    return allPlayers.find((player) => player.properties.includes(propertyPosition))
  }

  // Calculate rent
  const calculateRent = (space, owner) => {
    if (space.type === "railroad") {
      const railroadCount = owner.properties.filter((pos) => boardSpaces[pos].type === "railroad").length
      return space.rent * Math.pow(2, railroadCount - 1)
    } else if (space.type === "utility") {
      const utilityCount = owner.properties.filter((pos) => boardSpaces[pos].type === "utility").length
      return utilityCount === 1 ? 4 * (diceValues[0] + diceValues[1]) : 10 * (diceValues[0] + diceValues[1])
    } else {
      return space.rent
    }
  }

  // Pay rent
  const payRent = (payer, owner, amount) => {
    const actualAmount = Math.min(amount, payer.money)

    const updatedPlayers = players.map((player) => {
      if (player.id === payer.id) {
        return { ...player, money: player.money - actualAmount }
      } else if (player.id === owner.id) {
        return { ...player, money: player.money + actualAmount }
      }
      return player
    })

    setPlayers(updatedPlayers)
    addToLog(`${payer.name} paid $${actualAmount} rent to ${owner.name}`)
    checkGameOver(updatedPlayers)
  }

  // Buy property
  const buyProperty = (position) => {
    const space = boardSpaces[position]
    const price = space.price

    const updatedPlayers = [...players]
    const playerIndex = currentPlayerIndex

    updatedPlayers[playerIndex] = {
      ...updatedPlayers[playerIndex],
      money: updatedPlayers[playerIndex].money - price,
      properties: [...updatedPlayers[playerIndex].properties, position],
    }

    setPlayers(updatedPlayers)
    addToLog(`${updatedPlayers[playerIndex].name} bought ${space.name} for $${price}`)
    setGamePhase("rolling")
    nextTurn()
  }

  // Pass on buying property
  const passProperty = () => {
    addToLog(`${currentPlayer.name} passed on buying ${currentSpace.name}`)
    setGamePhase("rolling")
    nextTurn()
  }

  // Computer AI decides whether to buy property
  const computerDecidesBuy = (player, space) => {
    if (player.money < space.price * 2) {
      return false
    }

    if (space.price < 150) return true
    if (space.price < 250 && Math.random() > 0.3) return true
    if (Math.random() > 0.6) return true

    return false
  }

  // Next turn
  const nextTurn = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length)
    setGamePhase("rolling")
  }

  // Check if game is over
  const checkGameOver = (updatedPlayers) => {
    const bankruptPlayers = updatedPlayers.filter((player) => player.money <= 0)

    if (bankruptPlayers.length > 0) {
      const winner = updatedPlayers.find((player) => player.money > 0)
      setWinner(winner)
      setGamePhase("game-over")
      addToLog(`Game over! ${winner.name} wins!`)
    }
  }

  // Computer's turn
  useEffect(() => {
    if (currentPlayer.isComputer && gamePhase === "rolling" && !isRolling) {
      const timer = setTimeout(() => {
        rollDice()
      }, 7000)

      return () => clearTimeout(timer)
    }
  }, [currentPlayerIndex, gamePhase, isRolling, currentPlayer.isComputer, rollDice])

  // Render game over screen
  if (gamePhase === "game-over") {
    return (
      <div className="game-over">
        <h1>Game Over!</h1>
        <h2>{winner.name} wins!</h2>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    )
  }

  return (
    <div className="monopoly-game">
      <h1>Monopoly Game</h1>

      <div className="game-container">
        <div className="game-board">
          <MonopolyBoard players={players} />
        </div>

        <div className="game-controls">
          <div className="current-status">
            <h2>Current Turn: {currentPlayer.name}</h2>
            <p>Current Position: {currentSpace.name}</p>
          </div>

          {currentCard && <CardDisplay card={currentCard} cardType={currentCardType} />}

          <DiceControls
            onRollDice={rollDice}
            diceValues={diceValues}
            isRolling={isRolling}
            isComputerTurn={currentPlayer.isComputer}
          />

          {gamePhase === "buying" && !currentPlayer.isComputer && (
            <div className="buy-controls">
              <p>
                Do you want to buy {currentSpace.name} for ${currentSpace.price}?
              </p>
              <button onClick={() => buyProperty(currentPlayer.position)}>Yes, Buy</button>
              <button onClick={passProperty}>No, Pass</button>
            </div>
          )}

          <PlayerInfo players={players} currentPlayerIndex={currentPlayerIndex} />

          <div className="game-log">
            <h3>Game Log</h3>
            <div className="log-entries">
              {gameLog.map((entry, index) => (
                <div key={index} className="log-entry">
                  {entry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonopolyGame
