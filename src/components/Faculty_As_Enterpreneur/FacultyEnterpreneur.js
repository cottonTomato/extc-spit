import React, { Component } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./facultyAsEnterpreneur.css";
import data from "./FacultyEnterpreneurData";

class FacultyEnterpreneur extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>FACULTY AS ENTERPRENEUR</h3>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row lg={2}>
            {data.map((e) => {
              return (
                <Col className="d-flex">
                  <Card className="info-container">
                    <Card.Img className="faculty-img" variant="top" src={e.facultyImage} />
                    <Card.Body>
                      <Card.Title>{e.faculty}</Card.Title>
                      <Card.Title>{e.position}</Card.Title>
                      <Card.Title>{e.company}</Card.Title>
                      <Card.Text>
                        {e.text}
                      </Card.Text>
                    </Card.Body>

                    <Row className="justify-content-centeralign-items-center">
                      <Image src={e.logoImage} className="width-strainer" style={{ height: "350px" }} fluid />
                      <a href={e.link}>
                        <h2>{e.link}</h2>
                      </a>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default FacultyEnterpreneur;
