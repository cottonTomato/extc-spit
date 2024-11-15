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
              <h3>FACULTY AS ENTREPRENEUR</h3>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row lg={2}>
            {data.map((e) => {
              return (
                <Col className="d-flex" style={{ padding: "5px" }}>
                  <Card className="info-container">
                    <Card.Img className="faculty-img padding" variant="top" src={e.facultyImage} />
                    <Card.Body>
                      <Card.Title className="padding-2" style={{ fontSize: "1.75rem" }}>{e.faculty}</Card.Title>
                      <Card.Title className="">{e.position}</Card.Title>
                      <Card.Title className="padding-2" style={{ fontSize: "1.5rem", color: "navy" }}>{e.company}</Card.Title>
                      <Card.Text>
                        {e.text}
                      </ Card.Text>
                    </Card.Body>

                    <Row className="justify-content-center align-items-center row-container">
                      <Image src={e.logoImage} className="width-strainer" style={{ height: "350px" }} fluid />
                      <a href={e.link}>
                        <p style={{ color: "blue", fontSize: "1.5rem" }}>{e.shortlink}</p>
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
