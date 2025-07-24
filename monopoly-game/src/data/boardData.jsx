// Board spaces for Monopoly game (40 spaces total)
export const boardSpaces = [
  { id: 0, name: "GO", type: "go" },
  { id: 1, name: "Mediterranean Avenue", type: "property", price: 60, rent: 2, color: "brown" },
  { id: 2, name: "Community Chest", type: "chest" },
  { id: 3, name: "Baltic Avenue", type: "property", price: 60, rent: 4, color: "brown" },
  { id: 4, name: "Income Tax", type: "tax", amount: 200 },
  { id: 5, name: "Reading Railroad", type: "railroad", price: 200, rent: 25 },
  { id: 6, name: "Oriental Avenue", type: "property", price: 100, rent: 6, color: "lightblue" },
  { id: 7, name: "Chance", type: "chance" },
  { id: 8, name: "Vermont Avenue", type: "property", price: 100, rent: 6, color: "lightblue" },
  { id: 9, name: "Connecticut Avenue", type: "property", price: 120, rent: 8, color: "lightblue" },
  { id: 10, name: "Jail / Just Visiting", type: "jail" },
  { id: 11, name: "St. Charles Place", type: "property", price: 140, rent: 10, color: "pink" },
  { id: 12, name: "Electric Company", type: "utility", price: 150, rent: 0 },
  { id: 13, name: "States Avenue", type: "property", price: 140, rent: 10, color: "pink" },
  { id: 14, name: "Virginia Avenue", type: "property", price: 160, rent: 12, color: "pink" },
  { id: 15, name: "Pennsylvania Railroad", type: "railroad", price: 200, rent: 25 },
  { id: 16, name: "St. James Place", type: "property", price: 180, rent: 14, color: "orange" },
  { id: 17, name: "Community Chest", type: "chest" },
  { id: 18, name: "Tennessee Avenue", type: "property", price: 180, rent: 14, color: "orange" },
  { id: 19, name: "New York Avenue", type: "property", price: 200, rent: 16, color: "orange" },
  { id: 20, name: "Free Parking", type: "parking" },
  { id: 21, name: "Kentucky Avenue", type: "property", price: 220, rent: 18, color: "red" },
  { id: 22, name: "Chance", type: "chance" },
  { id: 23, name: "Indiana Avenue", type: "property", price: 220, rent: 18, color: "red" },
  { id: 24, name: "Illinois Avenue", type: "property", price: 240, rent: 20, color: "red" },
  { id: 25, name: "B&O Railroad", type: "railroad", price: 200, rent: 25 },
  { id: 26, name: "Atlantic Avenue", type: "property", price: 260, rent: 22, color: "yellow" },
  { id: 27, name: "Ventnor Avenue", type: "property", price: 260, rent: 22, color: "yellow" },
  { id: 28, name: "Water Works", type: "utility", price: 150, rent: 0 },
  { id: 29, name: "Marvin Gardens", type: "property", price: 280, rent: 24, color: "yellow" },
  { id: 30, name: "Go To Jail", type: "gotojail" },
  { id: 31, name: "Pacific Avenue", type: "property", price: 300, rent: 26, color: "green" },
  { id: 32, name: "North Carolina Avenue", type: "property", price: 300, rent: 26, color: "green" },
  { id: 33, name: "Community Chest", type: "chest" },
  { id: 34, name: "Pennsylvania Avenue", type: "property", price: 320, rent: 28, color: "green" },
  { id: 35, name: "Short Line", type: "railroad", price: 200, rent: 25 },
  { id: 36, name: "Chance", type: "chance" },
  { id: 37, name: "Park Place", type: "property", price: 350, rent: 35, color: "blue" },
  { id: 38, name: "Luxury Tax", type: "tax", amount: 100 },
  { id: 39, name: "Boardwalk", type: "property", price: 400, rent: 50, color: "blue" },
]

// Game constants
export const STARTING_MONEY = 1500
export const GO_MONEY = 200
export const JAIL_POSITION = 10
export const GO_TO_JAIL_POSITION = 30

// Chance cards
export const chanceCards = [
  { id: 1, text: "Advance to GO", action: "move", position: 0 },
  { id: 2, text: "Advance to Illinois Avenue", action: "move", position: 24 },
  { id: 3, text: "Advance to St. Charles Place", action: "move", position: 11 },
  { id: 4, text: "Advance to nearest Railroad", action: "nearest", type: "railroad" },
  { id: 5, text: "Advance to nearest Utility", action: "nearest", type: "utility" },
  { id: 6, text: "Bank pays you dividend of $50", action: "collect", amount: 50 },
  { id: 7, text: "Get Out of Jail Free", action: "jail-free" },
  { id: 8, text: "Go Back 3 Spaces", action: "move-back", spaces: 3 },
  { id: 9, text: "Go to Jail", action: "goto-jail" },
  { id: 10, text: "Make general repairs on all your property", action: "pay", amount: 25 },
  { id: 11, text: "Pay poor tax of $15", action: "pay", amount: 15 },
  { id: 12, text: "Take a trip to Reading Railroad", action: "move", position: 5 },
  { id: 13, text: "Take a walk on the Boardwalk", action: "move", position: 39 },
  { id: 14, text: "You have been elected Chairman of the Board", action: "pay", amount: 50 },
  { id: 15, text: "Your building loan matures", action: "collect", amount: 150 },
]

// Community Chest cards
export const communityChestCards = [
  { id: 1, text: "Advance to GO", action: "move", position: 0 },
  { id: 2, text: "Bank error in your favor. Collect $200", action: "collect", amount: 200 },
  { id: 3, text: "Doctor's fee. Pay $50", action: "pay", amount: 50 },
  { id: 4, text: "From sale of stock you get $50", action: "collect", amount: 50 },
  { id: 5, text: "Get Out of Jail Free", action: "jail-free" },
  { id: 6, text: "Go to Jail", action: "goto-jail" },
  { id: 7, text: "Grand Opera Night. Collect $50 from every player", action: "collect-from-all", amount: 50 },
  { id: 8, text: "Holiday Fund matures. Receive $100", action: "collect", amount: 100 },
  { id: 9, text: "Income tax refund. Collect $20", action: "collect", amount: 20 },
  { id: 10, text: "It's your birthday. Collect $10 from every player", action: "collect-from-all", amount: 10 },
  { id: 11, text: "Life insurance matures. Collect $100", action: "collect", amount: 100 },
  { id: 12, text: "Pay hospital fees of $100", action: "pay", amount: 100 },
  { id: 13, text: "Pay school fees of $50", action: "pay", amount: 50 },
  { id: 14, text: "Receive $25 consultancy fee", action: "collect", amount: 25 },
  { id: 15, text: "You are assessed for street repairs", action: "pay", amount: 40 },
  { id: 16, text: "You have won second prize in a beauty contest. Collect $10", action: "collect", amount: 10 },
  { id: 17, text: "You inherit $100", action: "collect", amount: 100 },
]

// Shuffle cards function
export function shuffleCards(cards) {
  const shuffled = [...cards]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
