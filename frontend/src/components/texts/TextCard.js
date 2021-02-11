import React from "react";

import Card from "react-bootstrap/Card";

function TextCard(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.content.title}</Card.Title>
          <Card.Text>{props.content.subtitle}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default TextCard;
