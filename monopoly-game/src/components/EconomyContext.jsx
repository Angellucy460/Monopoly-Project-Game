import React, { createContext, useContext, useState } from "react";

const EconomyContext = createContext();

export const useEconomy = () => useContext(EconomyContext);

const initialPlayers = [
  { id: 1, name: "Player", money: 1500, properties: [] },
  { id: 2, name: "computer", money: 1500, properties: [] }
];

const initialProperties = [
  { id: 101, name: "GO", type: "corner", price: 0, rent: 0, owner: null, upgrades: 0 },
  
  { id: 102, name: "Mediterranean Avenue", type: "property", price: 60, rent: 2, owner: null, upgrades: 0 },
  { id: 103, name: "Community Chest", type: "community-chest", price: 0, rent: 0, owner: null, upgrades: 0 },
  { id: 104, name: "Baltic Avenue", type: "property", price: 60, rent: 4, owner: null, upgrades: 0 },
  { id: 105, name: "Income Tax", type: "tax", price: 0, rent: 200, owner: null, upgrades: 0 },
  { id: 106, name: "Reading Railroad", type: "railroad", price: 200, rent: 25, owner: null, upgrades: 0 },
  
  { id: 107, name: "Oriental Avenue", type: "property", price: 100, rent: 6, owner: null, upgrades: 0 },
  { id: 108, name: "Chance", type: "chance", price: 0, rent: 0, owner: null, upgrades: 0 },
  { id: 109, name: "Vermont Avenue", type: "property", price: 100, rent: 6, owner: null, upgrades: 0 },
  { id: 110, name: "Connecticut Avenue", type: "property", price: 120, rent: 8, owner: null, upgrades: 0 },
  { id: 111, name: "Jail / Just Visiting", type: "corner", price: 0, rent: 0, owner: null, upgrades: 0 },

  { id: 112, name: "St. Charles Place", type: "property", price: 140, rent: 10, owner: null, upgrades: 0 },
  { id: 113, name: "Electric Company", type: "utility", price: 150, rent: 10, owner: null, upgrades: 0 },
  { id: 114, name: "States Avenue", type: "property", price: 140, rent: 10, owner: null, upgrades: 0 },
  { id: 115, name: "Virginia Avenue", type: "property", price: 160, rent: 12, owner: null, upgrades: 0 },
  { id: 116, name: "Pennsylvania Railroad", type: "railroad", price: 200, rent: 25, owner: null, upgrades: 0 },

  { id: 117, name: "St. James Place", type: "property", price: 180, rent: 14, owner: null, upgrades: 0 },
  { id: 118, name: "Community Chest", type: "community-chest", price: 0, rent: 0, owner: null, upgrades: 0 },
  { id: 119, name: "Tennessee Avenue", type: "property", price: 180, rent: 14, owner: null, upgrades: 0 },
  { id: 120, name: "New York Avenue", type: "property", price: 200, rent: 16, owner: null, upgrades: 0 },
  { id: 121, name: "Free Parking", type: "corner", price: 0, rent: 0, owner: null, upgrades: 0 },

  { id: 122, name: "Kentucky Avenue", type: "property", price: 220, rent: 18, owner: null, upgrades: 0 },
  { id: 123, name: "Chance", type: "chance", price: 0, rent: 0, owner: null, upgrades: 0 },
  { id: 124, name: "Indiana Avenue", type: "property", price: 220, rent: 18, owner: null, upgrades: 0 },
  { id: 125, name: "Illinois Avenue", type: "property", price: 240, rent: 20, owner: null, upgrades: 0 },
  { id: 126, name: "B. & O. Railroad", type: "railroad", price: 200, rent: 25, owner: null, upgrades: 0 },

  { id: 127, name: "Atlantic Avenue", type: "property", price: 260, rent: 22, owner: null, upgrades: 0 },
  { id: 128, name: "Ventnor Avenue", type: "property", price: 260, rent: 22, owner: null, upgrades: 0 },
  { id: 129, name: "Water Works", type: "utility", price: 150, rent: 10, owner: null, upgrades: 0 },
  { id: 130, name: "Marvin Gardens", type: "property", price: 280, rent: 24, owner: null, upgrades: 0 },
  { id: 131, name: "Go to Jail", type: "corner", price: 0, rent: 0, owner: null, upgrades: 0 },

  { id: 132, name: "Pacific Avenue", type: "property", price: 300, rent: 26, owner: null, upgrades: 0 },
  { id: 133, name: "North Carolina Avenue", type: "property", price: 300, rent: 26, owner: null, upgrades: 0 },
  { id: 134, name: "Community Chest", type: "community-chest", price: 0, rent: 0, owner: null, upgrades: 0 },
  { id: 135, name: "Pennsylvania Avenue", type: "property", price: 320, rent: 28, owner: null, upgrades: 0 },
  { id: 136, name: "Short Line", type: "railroad", price: 200, rent: 25, owner: null, upgrades: 0 },

   { id: 137, name: "Chance", type: "chance", price: 0, rent: 0, owner: null, upgrades: 0 },
  { id: 138, name: "Park Place", type: "property", price: 350, rent: 35, owner: null, upgrades: 0 },
  { id: 139, name: "Luxury Tax", type: "tax", price: 0, rent: 100, owner: null, upgrades: 0 },
  { id: 140, name: "Boardwalk", type: "property", price: 400, rent: 50, owner: null, upgrades: 0 }
];

export const EconomyProvider = ({ children }) => {
  const [players, setPlayers] = useState(initialPlayers);
  const [properties, setProperties] = useState(initialProperties);

  const updatePlayerMoney = (playerId, amount) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === playerId ? { ...p, money: p.money + amount } : p))
    );
  };

  const transferProperty = (propertyId, newOwnerId) => {
    setProperties((prev) =>
      prev.map((prop) =>
        prop.id === propertyId ? { ...prop, owner: newOwnerId } : prop
      )
    );
    setPlayers((prev) =>
      prev.map((p) =>
        p.id === newOwnerId ? { ...p, properties: [...p.properties, propertyId] } : p
      )
    );
  };

  const upgradeProperty = (propertyId) => {
    setProperties((prev) =>
      prev.map((p) =>
        p.id === propertyId ? { ...p, upgrades: p.upgrades + 1 } : p
      )
    );
  };

  const payRent = (propertyId, visitorId) => {
    const property = properties.find(p => p.id === propertyId);
    if (!property || !property.owner || property.owner === visitorId) return;

    const rentAmount = property.rent * (property.upgrades + 1);
    updatePlayerMoney(visitorId, -rentAmount);
    updatePlayerMoney(property.owner, rentAmount);
  };

  const value = {
    players,
    properties,
    updatePlayerMoney,
    transferProperty,
    upgradeProperty,
    payRent
  };

  return (
    <EconomyContext.Provider value={value}>
      {children}
    </EconomyContext.Provider>
  );
};
