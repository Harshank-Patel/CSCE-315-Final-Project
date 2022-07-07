// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { Card, Button, Image, ListGroup } from "react-bootstrap";
import "./FoodCard.css";

function FoodCard(props) {
  const [ratingStar, setRatingStar] = useState();
  let ratingNum = props.rating;

  useEffect(() => {
    switch (ratingNum) {
      case 5:
        setRatingStar(process.env.PUBLIC_URL + "/images/stars/small_5.png");
        break;
      case 4.5:
        setRatingStar(
          process.env.PUBLIC_URL + "/images/stars/small_4_half.png"
        );
        break;
      case 4:
        setRatingStar(process.env.PUBLIC_URL + "/images/stars/small_4.png");
        break;
      case 3.5:
        setRatingStar(
          process.env.PUBLIC_URL + "/images/stars/small_3_half.png"
        );
        break;
      case 3:
        setRatingStar(process.env.PUBLIC_URL + "/images/stars/small_3.png");
        break;
      case 2.5:
        setRatingStar(
          process.env.PUBLIC_URL + "/images/stars/small_2_half.png"
        );
        break;
      case 2:
        setRatingStar(process.env.PUBLIC_URL + "/images/stars/small_2.png");
        break;
      case 1.5:
        setRatingStar(
          process.env.PUBLIC_URL + "/images/stars/small_1_half.png"
        );
        break;
      case 1:
        setRatingStar(process.env.PUBLIC_URL + "/images/stars/small_1.png");
        break;
      default:
        setRatingStar(process.env.PUBLIC_URL + "/images/stars/small_0.png");
        break;
    }
  }, [ratingNum]);

  return (
    <div className="FoodCard p-2 shadow-lg bg-white rounded">
      <Card>
        <Card.Img variant="left" src={props.image_url} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <p>{props.display_phone} </p>
            <ListGroup>
              {props.categories.map((cuisineFood) => (
                <ListGroup.Item>{cuisineFood["title"]}</ListGroup.Item>
              ))}
            </ListGroup>
            <br />
            <p>
              <Image src={ratingStar} />
            </p>
          </Card.Text>
          <Button variant="danger" href={props.url} target="_blank">
            Yelp
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FoodCard;
