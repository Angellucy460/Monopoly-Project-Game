import React from "react";
import PropertyCard from "./PropertyCard";
import { useEconomy } from "./EconomyContext";

function Play() {
  const { players, properties } = useEconomy();
  const currentPlayer = players[0];

  return (
    <div>
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-indigo-600">
          Current Player: {currentPlayer.name}
        </h2>
        <p className="text-gray-700">Money: ${currentPlayer.money}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} player={currentPlayer} />
        ))}
      </div>
    </div>
  );
}

export default Play;