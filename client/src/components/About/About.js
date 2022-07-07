import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div className="About">
      <Container className="text-center">
        <div className="about-ezfind">
          <b>
            <h2 className="display-3">About EzFind</h2>
          </b>
          <i>
            <h4 className="display-5">Simplify your travel needs.</h4>
          </i>
          <hr />
          <p>
            This website is created by web designers who are dedicated to
            traveling.
          </p>
          <p>
            The team hopes that the website provides useful information for the
            users while traveling or preparing for a vacation.
          </p>
          <p>
            The team honors Dr. Robert Lightfoot, TA James Ault, and TA Mufend
            Xiefor for their dedication to higher education.
          </p>
          <p>
            Last but not least, we want to thank Ms. Susie Lightfoot for being a
            project's inspiration. Search "Susie" for more information.
          </p>
          <p>
            <b>Tech stack:</b> Javascript, HTML, and CSS
          </p>
          <p>
            <b>Framework/Libraries:</b> React, Bootstrap, and Axios
          </p>
        </div>
        <div className="team-members">
          <b>
            <h2 className="display-3">Leadership</h2>
          </b>
          <hr />
          <Row>
            <Col>
              <Card className="border-0">
                <Card.Img
                  className="about-img img-fluid"
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/Shikhar.jpg"}
                />
                <Card.Body>
                  <Card.Title>Shikhar Baheti</Card.Title>
                  <Card.Text>
                    <i>Computer Science '22</i>
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer> */}
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Img
                  className="about-img img-fluid"
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/Arjun.jpg"}
                />
                <Card.Body>
                  <Card.Title>Arjun Grover</Card.Title>
                  <Card.Text>
                    <i>Computer Science '23</i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Img
                  className="about-img img-fluid"
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/Penny.jpg"}
                />
                <Card.Body>
                  <Card.Title>Penny Huong Vo</Card.Title>
                  <Card.Text>
                    <i>Computer Engineering '22</i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0">
                <Card.Img
                  className="about-img img-fluid"
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/Harshank.jpg"}
                />
                <Card.Body>
                  <Card.Title>Harshank Patel</Card.Title>
                  <Card.Text>
                    <i>Computer Engineering '21</i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="border-0 text-center">
                <Card.Img
                  className="about-img img-fluid"
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/Tejas.jpg"}
                />
                <Card.Body>
                  <Card.Title>Tejas Kakad</Card.Title>
                  <Card.Text>
                    <i>Computer Science '22</i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default About;
