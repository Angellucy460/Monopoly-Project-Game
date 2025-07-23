import React, { useState } from "react";
import "./board.css";
import TitleDeedCard from "./playercards/titledeedcard";
import ChanceCard from "./playercards/chancecard";
import CommunityChestCard from "./playercards/communitycard";
import { Tabs, Tab, Button } from "react-bootstrap";

const Board = () => {
  const [key, setKey] = useState("titledeeds");
  const [showCards, setShowCards] = useState(true);

  const cornerTiles = {
    "0,10": "GO",
    "0,0": "JAIL",
    "10,0": "FREE PARKING",
    "10,10": "GO TO JAIL",
  };

  const tileLabels = {
    "0,9": "Mediterranean Ave",
    "0,8": "Chest",
    "0,7": "Baltic Ave",
    "0,6": "Tax",
    "0,5": "Reading RR",
    "0,4": "Oriental Ave",
    "0,3": "Chance",
    "0,2": "Vermont Ave",
    "0,1": "Connecticut",
    "1,0": "St. Charles",
    "2,0": "Electric",
    "3,0": "States Ave",
    "4,0": "Virginia",
    "5,0": "Penn RR",
    "6,0": "St. James",
    "7,0": "Chest",
    "8,0": "Tennessee",
    "9,0": "New York",
    "10,1": "Kentucky",
    "10,2": "Chance",
    "10,3": "Indiana",
    "10,4": "Illinois",
    "10,5": "B&O RR",
    "10,6": "Atlantic",
    "10,7": "Ventnor",
    "10,8": "Water",
    "10,9": "Marvin",
    "9,10": "Pacific",
    "8,10": "N Carolina",
    "7,10": "Chest",
    "6,10": "Penn Ave",
    "5,10": "Short Line",
    "4,10": "Chance",
    "3,10": "Park",
    "2,10": "Tax",
    "1,10": "Boardwalk",
  };

  const propertyGroups = {
    "0,9": "brown",
    "0,7": "brown",
    "0,4": "light-blue",
    "0,2": "light-blue",
    "0,1": "light-blue",
    "1,0": "pink",
    "3,0": "pink",
    "4,0": "pink",
    "6,0": "orange",
    "8,0": "orange",
    "9,0": "orange",
    "10,1": "red",
    "10,3": "red",
    "10,4": "red",
    "10,6": "yellow",
    "10,7": "yellow",
    "10,9": "yellow",
    "9,10": "green",
    "8,10": "green",
    "6,10": "green",
    "3,10": "dark-blue",
    "1,10": "dark-blue",
  };

  const iconMap = {
    "0,10": "🏁",
    "0,0": "🚔",
    "10,0": "🅿️",
    "10,10": "🔒",
    "0,8": "🎁",
    "7,0": "🎁",
    "7,10": "🎁",
    "0,3": "❓",
    "10,2": "❓",
    "4,10": "❓",
    "0,6": "💸",
    "2,10": "💸",
    "0,5": "🚂",
    "5,0": "🚂",
    "10,5": "🚂",
    "5,10": "🚂",
    "2,0": "💡",
    "10,8": "🚰",
  };

  const titleprices = {
    "0,9": "$60",
    "0,7": "$60",
    "0,4": "$100",
    "0,2": "$100",
    "0,1": "$120",
    "1,0": "$140",
    "3,0": "$140",
    "4,0": "$160",
    "6,0": "$180",
    "8,0": "$180",
    "9,0": "$200",
    "10,1": "$220",
    "10,3": "$220",
    "10,4": "$240",
    "10,6": "$260",
    "10,7": "$260",
    "10,9": "$280",
    "9,10": "$300",
    "8,10": "$300",
    "6,10": "$320",
    "3,10": "$350",
    "1,10": "$400",
    "0,5": "$200",
    "5,0": "$200",
    "10,5": "$200",
    "5,10": "$200",
    "2,0": "$150",
    "10,8": "$150",
  };

  const playerPosition = "0,10";

  const tiles = [];
  for (let row = 0; row < 11; row++) {
    for (let col = 0; col < 11; col++) {
      const key = `${row},${col}`;
      const isEdge = row === 0 || row === 10 || col === 0 || col === 10;

      if (isEdge) {
        const label = cornerTiles[key] || tileLabels[key] || "";
        const isCorner = key in cornerTiles;
        const directionClass =
          row === 0
            ? "bottom"
            : row === 10
            ? "top"
            : col === 0
            ? "right"
            : "left";
        const colorClass = propertyGroups[key] || "";
        const hasPlayer = key === playerPosition;
        const icon = iconMap[key];

        tiles.push(
          <div
            className={`tile ${isCorner ? "corner" : ""} ${directionClass} ${colorClass}`}
            key={key}
          >
            {icon && <span className="tile-emoji">{icon}</span>}
            <span>{label}</span>
            {titleprices[key] && <span className="tile-price">{titleprices[key]}</span>}
            {hasPlayer && <div className="player-token" />}
          </div>
        );
      } else {
        tiles.push(<div className="tile empty" key={key}></div>);
      }
    }
  }

  const titleDeeds = [
    { name: "Mediterranean Ave", color: "brown", rent: 2, house1: 10, house2: 30, house3: 90, house4: 160, hotel: 250, mortgage: 30, houseCost: 50 },
    { name: "Baltic Ave", color: "brown", rent: 4, house1: 20, house2: 60, house3: 180, house4: 320, hotel: 450, mortgage: 30, houseCost: 50 },
    { name: "Oriental Ave", color: "light_blue", rent: 6, house1: 30, house2: 90, house3: 270, house4: 400, hotel: 550, mortgage: 50, houseCost: 50 },
    { name: "Vermont Ave", color: "light-blue", rent: 6, house1: 30, house2: 90, house3: 270, house4: 400, hotel: 550, mortgage: 50, houseCost: 50 },
  { name: "Connecticut", color: "light-blue", rent: 6, house1: 30, house2: 90, house3: 270, house4: 400, hotel: 550, mortgage: 50, houseCost: 50 },
  { name: "St. Charles", color: "pink", rent: 10, house1: 50, house2: 150, house3: 450, house4: 625, hotel: 750, mortgage: 70, houseCost: 100 },
  { name: "States Ave", color: "pink", rent: 10, house1: 50, house2: 150, house3: 450, house4: 625, hotel: 750, mortgage: 70, houseCost: 100 },
  { name: "Virginia", color: "pink", rent: 10, house1: 50, house2: 150, house3: 450, house4: 625, hotel: 750, mortgage: 70, houseCost: 100 },
  { name: "St. James", color: "orange", rent: 14, house1: 70, house2: 200, house3: 550, house4: 750, hotel: 950, mortgage: 90, houseCost: 100 },
  { name: "Tennessee", color: "orange", rent: 14, house1: 70, house2: 200, house3: 550, house4: 750, hotel: 950, mortgage: 90, houseCost: 100 },
  { name: "New York", color: "orange", rent: 14, house1: 70, house2: 200, house3: 550, house4: 750, hotel: 950, mortgage: 90, houseCost: 100 },
  { name: "Kentucky", color: "red", rent: 18, house1: 90, house2: 250, house3: 700, house4: 875, hotel: 1050, mortgage: 110, houseCost: 150 },
  { name: "Indiana", color: "red", rent: 18, house1: 90, house2: 250, house3: 700, house4: 875, hotel: 1050, mortgage: 110, houseCost: 150 },
  { name: "Illinois", color: "red", rent: 18, house1: 90, house2: 250, house3: 700, house4: 875, hotel: 1050, mortgage: 110, houseCost: 150 },
  { name: "Atlantic", color: "yellow", rent: 22, house1: 110, house2: 330, house3: 800, house4: 975, hotel: 1150, mortgage: 130, houseCost: 150 },
  { name: "Ventnor", color: "yellow", rent: 22, house1: 110, house2: 330, house3: 800, house4: 975, hotel: 1150, mortgage: 130, houseCost: 150 },
  { name: "Marvin", color: "yellow", rent: 22, house1: 110, house2: 330, house3: 800, house4: 975, hotel: 1150, mortgage: 130, houseCost: 150 },
  { name: "Pacific", color: "green", rent: 26, house1: 130, house2: 390, house3: 900, house4: 1100, hotel: 1275, mortgage: 150, houseCost: 200 },
  { name: "N Carolina", color: "green", rent: 26, house1: 130, house2: 390, house3: 900, house4: 1100, hotel: 1275, mortgage: 150, houseCost: 200 },
  { name: "Penn Ave", color: "green", rent: 26, house1: 130, house2: 390, house3: 900, house4: 1100, hotel: 1275, mortgage: 150, houseCost: 200 },
  { name: "Park", color: "dark-blue", rent: 35, house1: 175, house2: 500, house3: 1100, house4: 1300, hotel: 1500, mortgage: 200, houseCost: 200 },
  { name: "Boardwalk", color: "dark_blue", rent: 50, house1: 200, house2: 600, house3: 1400, house4: 1700, hotel: 2000, mortgage: 200, houseCost: 200 },
  ];

  const chanceCards = [
    { text: "Advance to Go (Collect $200)" },
    { text: "Go Back 3 Spaces" },
    { text: "Pay poor tax of $15" },
  ];

  const chestCards = [
    { text: "Doctor’s Fee – Pay $50" },
    { text: "You inherit $100" },
    { text: "Go to Jail – Do not pass GO" },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h4>Monopoly Board</h4>
        <Button variant="secondary" onClick={() => setShowCards(!showCards)}>
          {showCards ? "Hide Cards" : "Show Cards"}
        </Button>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-start gap-3">
        {showCards && (
          <div
            className="card-viewer"
            style={{ maxHeight: "90vh", overflowY: "auto", width: "18rem" }}
          >
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" justify>
              <Tab eventKey="titledeeds" title="Title Deeds">
                {titleDeeds.map((card, idx) => (
                  <TitleDeedCard key={idx} {...card} />
                ))}
              </Tab>
              <Tab eventKey="chance" title="Chance">
                {chanceCards.map((card, idx) => (
                  <ChanceCard key={idx} text={card.text} />
                ))}
              </Tab>
              <Tab eventKey="chest" title="Community Chest">
                {chestCards.map((card, idx) => (
                  <CommunityChestCard key={idx} text={card.text} />
                ))}
              </Tab>
            </Tabs>
          </div>
        )}
        <div className="board-grid">{tiles}</div>
      </div>
    </div>
  );
};

export default Board;




