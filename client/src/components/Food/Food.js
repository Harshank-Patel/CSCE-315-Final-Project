import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import axios from "axios";
import FoodList from "./FoodList";
// import './Food.css';

function Food(props) {
  let cityName = props.cityName;

  const [foodData, setFoodData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/food/" + encodeURIComponent(cityName), {})
      .then(function (response) {
        // console.log(response.data);
        setFoodData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [cityName]);

  return (
    <div className="Food">
      <Container className="text-center">
        <b>Food</b> in {cityName}
        <hr />
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <FoodList data={foodData} />
        )}
      </Container>
    </div>
  );
}

export default Food;
