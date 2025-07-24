import React from "react";
import Card from "react-bootstrap/Card";

const CommunityChestCard = ({ text }) => {
  return (
    <Card
      bg="warning"
      text="dark"
      className="mb-3"
      style={{ minWidth: "16rem" }}
    >
      <Card.Header>Community Chest</Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommunityChestCard;
