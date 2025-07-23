import React from 'react';

const TitleDeedCard = ({ name, color, rent, house1, house2, house3, house4, hotel, mortgage, houseCost }) => {
  const colorMap = {
    brown: '#8b4513',
    light_blue: '#87cefa',
    pink: '#ff69b4',
    orange: '#ffa500',
    red: '#ff0000',
    yellow: '#ffd700',
    green: '#008000',
    dark_blue: '#00008b',
  };

  const propertyColor = colorMap[color] || '#ccc';

  return (
    <div className="card border-dark mb-3" style={{ width: '16rem', height: '22rem' }}>
      <div
        className="card-header text-white text-center fw-bold"
        style={{ backgroundColor: propertyColor }}
      >
        {name}
      </div>
      <div className="card-body text-center p-2">
        <p className="card-text">RENT ${rent}</p>
        <small>
          <div>With 1 House: ${house1}</div>
          <div>With 2 Houses: ${house2}</div>
          <div>With 3 Houses: ${house3}</div>
          <div>With 4 Houses: ${house4}</div>
          <div className="fw-bold mt-2">With HOTEL: ${hotel}</div>
          <hr />
          <div>Mortgage Value: ${mortgage}</div>
          <div>House cost: ${houseCost}</div>
          <div>Hotels: ${houseCost} + 4 Houses</div>
        </small>
      </div>
    </div>
  );
};

export default TitleDeedCard;
