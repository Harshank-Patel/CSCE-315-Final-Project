import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import axios from "axios";
import NewsList from "./NewsList";

function News(props) {
  let cityName = props.cityName;

  const [newsData, setNewsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/news/" + encodeURIComponent(cityName), {})
      .then(function (response) {
        setNewsData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [cityName]);

  return (
    <div className="News">
      <Container className="text-center">
        <b>News</b> in {cityName}
        <hr />
        {/* {(isLoading) ? <ClipLoader color="#ffffff" loading={isLoading} size={150} /> : <NewsList data={newsData} />} */}
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <NewsList data={newsData} />
        )}
      </Container>
    </div>
  );
}

export default News;
