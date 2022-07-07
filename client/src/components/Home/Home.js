// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Switch } from "@material-ui/core";
import { Container, Form, InputGroup, Button, Col, Row } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import Typewriter from "typewriter-effect";
import News from "../News/News";
import Weather from "../Weather/Weather";
import Food from "../Food/Food";
import SecretPage from "../SecretPage/SecretPage";
import MicIcon from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import ClearIcon from "@material-ui/icons/Clear";

function Home() {
  let typeWriterSearch = [
    "What's the weather like in College Station, TX?",
    "Which is the best restaurant in New York City Downtown?",
    "What is the latest news in Dubai, UAE?",
  ];

  // eslint-disable-next-line
  const [searchText, setSearchText] = useState("");
  const [destinationSearch, setDestinationSearch] = useState("");
  const [showResults, setResults] = useState(false);
  // eslint-disable-next-line
  const [suzieState, setSuzieState] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [selected, setSelected] = React.useState(false);
  const [toggle, setToggle] = useState(false);

  let handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // console.log(event.target.value);
    // console.log("Transcript", transcript);
  };

  let resetSearch = () => {
    document.getElementById("destination-search").value = "";
    resetTranscript();
  };

  useEffect(() => {
    let dict = {};
    dict["target"] = {};
    dict["target"]["value"] = transcript;
    document.getElementById("destination-search").value = transcript;
    handleSearchChange(dict);
  }, [transcript]);

  let handleSubmit = (event) => {
    event.preventDefault();
    if (searchText.length <= 3) {
      alert("Please enter a valid search request.");
    } else if (
      searchText.trim().toLowerCase() === "suzie" ||
      searchText.trim().toLowerCase() === "susie"
    ) {
      setResults(false);
      setSuzieState(true);
    } else {
      setDestinationSearch(searchText);
      setResults(true);
      setSuzieState(false);
    }
  };

  // eslint - disable - next - line
  // useEffect(() => {
  //     setResults(false);
  //     // This effect uses the `value` variable,
  //     // so it "depends on" `value`.
  //     setResults(true);

  // }, [destinationSearch])  // pass `value` as a dependency

  useEffect(() => {
    // console.log(selected);
    if (selected) {
      document.body.style.fontFamily = "OpenDyslexic";
      setToggle(true);
    }
    // else {
    //     document.body.style.fontFamily = "Roboto";
    // }
  }, [selected]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div className="Home">
      <div className="float-right inline-block">
        <b>Dyslexic Font</b>
        <Switch
          disabled={toggle}
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
          id="OpenDyslexic-button"
          color="primary"
        />
      </div>
      <Container>
        <div className="text-center">
          <b>
            <h1 className="display-2">Ezfind</h1>
          </b>
          <i>
            <h4 className="display-5">Simplify your travel needs.</h4>
          </i>
          <Typewriter
            options={{
              strings: typeWriterSearch,
              delay: 30,
              pauseFor: 1500,
              deleteSpeed: 30,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <br />
      </Container>
      <Container>
        <div className="search-area">
          <InputGroup className="mb-3" onChange={handleSearchChange}>
            <Form.Control
              id="destination-search"
              size="lg"
              placeholder="Destination"
              aria-label="Destination"
              aria-describedby="destination-search"
            />

            <InputGroup.Append>
              <Button variant="outline-primary" onClick={handleSubmit}>
                <SearchIcon>search</SearchIcon> Search
              </Button>
              <Button
                variant="outline-success"
                onClick={SpeechRecognition.startListening}
              >
                <MicIcon>mic</MicIcon> Start
              </Button>
              <Button
                variant="outline-danger"
                onClick={SpeechRecognition.stopListening}
              >
                <MicOff>micoff</MicOff> Stop
              </Button>
              <Button variant="outline-warning" onClick={resetSearch}>
                <ClearIcon onClick={resetSearch}>clear</ClearIcon>
                Reset
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </Container>
      <Container className="text-center" fluid>
        {suzieState && <SecretPage />}
        <h3>{!suzieState && destinationSearch}</h3>
        <Row>
          <Col>{showResults && <News cityName={destinationSearch} />}</Col>
          <Col>{showResults && <Food cityName={destinationSearch} />}</Col>
          <Col>{showResults && <Weather cityName={destinationSearch} />}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
