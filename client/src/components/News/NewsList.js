// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import NewsCard from "./NewsCard";
import "./NewsList.css";

function NewsList(props) {
  // eslint-disable-next-line
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    // console.log(props.data);
    setNewsData(props.data);
  }, [props.data]);
  return (
    <div className="NewsList">
      <div className="NewsList-list">
        <ListGroup variant="flush">
          {newsData.slice(0, 20).map((news) => (
            <NewsCard
              source={news["source"]}
              title={news["title"]}
              url={news["url"]}
              urlToImage={news["urlToImage"]}
            />
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default NewsList;
