// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./NewsCard.css";

function NewsCard(props) {
  return (
    <div className="NewsCard p-2 shadow-lg bg-white rounded">
      <Card>
        <Card.Img variant="left" src={props.urlToImage} />
        <Card.Body>
          <Card.Title>{props.source.name}</Card.Title>
          <Card.Text>{props.title}</Card.Text>
          <Button variant="primary" href={props.url} target="_blank">
            Link
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsCard;
