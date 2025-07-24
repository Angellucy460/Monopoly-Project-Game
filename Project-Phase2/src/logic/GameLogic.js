function movePlayer(player, steps, boardSize) {
  const newPosition = (player.position + steps) % boardSize;
  const passedGo = player.position + steps >= boardSize;
  const updatedMoney = passedGo ? player.money + 200 : player.money;
  return { ...player, position: newPosition, money: updatedMoney };
}

function buyProperty(player, property) {
  if (player.money < property.price) return player;
  return {
    ...player,
    money: player.money - property.price,
    properties: [...player.properties, property.id],
  };
}

function payRent(player, amount) {
  return { ...player, money: player.money - amount };
}

function payTax(player, amount) {
  return { ...player, money: player.money - amount };
}

export default {
  movePlayer,
  buyProperty,
  payRent,
  payTax,
};