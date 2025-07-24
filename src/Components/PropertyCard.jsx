import React from "react";
import { useEconomy } from "./EconomyContext";

function PropertyCard({ property, player }) {
  const { updatePlayerMoney, transferProperty, upgradeProperty, payRent } = useEconomy();

  const handleBuy = () => {
    if (!property.owner && player.money >= property.price) {
      updatePlayerMoney(player.id, -property.price);
      transferProperty(property.id, player.id);
    }
  };

  const handleUpgrade = () => {
    const cost = 100 * (property.upgrades + 1);
    if (player.id === property.owner && player.money >= cost) {
      updatePlayerMoney(player.id, -cost);
      upgradeProperty(property.id);
    }
  };

  const handlePayRent = () => {
    payRent(property.id, player.id);
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-300 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-indigo-700">{property.name}</h3>
      <p className="text-sm text-gray-600">Price: ${property.price}</p>
      <p className="text-sm text-gray-600">Rent: ${property.rent * (property.upgrades + 1)}</p>
      <p className="text-sm text-gray-600">Upgrades: {property.upgrades}</p>
      <p className="text-sm text-gray-600">
        Owner: {property.owner ? (property.owner === player.id ? player.name : "Computer") : "None"}
      </p>

      <div className="flex gap-2 mt-3">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded disabled:opacity-50"
          onClick={handleBuy}
          disabled={property.owner !== null}
        >
          Buy
        </button>

        <button
          className="bg-yellow-400 text-black px-3 py-1 rounded disabled:opacity-50"
          onClick={handleUpgrade}
          disabled={player.id !== property.owner}
        >
          Upgrade
        </button>

        <button
          className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
          onClick={handlePayRent}
          disabled={property.owner === null || property.owner === player.id}
        >
          Pay Rent
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
