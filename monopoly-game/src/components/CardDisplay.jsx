function CardDisplay({ card, cardType }) {
  if (!card) return null

  const cardClass = cardType === "chance" ? "chance-card" : "community-chest-card"
  const cardTitle = cardType === "chance" ? "Chance" : "Community Chest"

  return (
    <div className={`card-display ${cardClass}`}>
      <div className="card-title">{cardTitle}</div>
      <div className="card-text">{card.text}</div>
    </div>
  )
}

export default CardDisplay
