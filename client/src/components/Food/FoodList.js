// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import FoodCard from "./FoodCard";
import "./FoodList.css";

function FoodList(props) {
  // eslint-disable-next-line
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    setFoodData(props.data.businesses);
  }, [props.data]);
  return (
    <div className="FoodList">
      <div className="FoodList-list">
        <ListGroup variant="flush">
          {foodData.slice(0, 20).map((food) => (
            <FoodCard
              name={food["name"]}
              url={food["url"]}
              image_url={food["image_url"]}
              display_phone={food["display_phone"]}
              price={food["price"]}
              rating={food["rating"]}
              categories={food["categories"]}
            />
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default FoodList;
