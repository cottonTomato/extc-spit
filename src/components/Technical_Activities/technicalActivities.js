import { Card, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import data from "./technicalActivitiesData";
import TechnicalActivitiesGallery from "../../container/gallery/TechnicalActivitiesGallery";

export default class TechnicalActivities extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>TECHNICAL ACTIVITIES</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Card className="mt-2">
            <Card.Body>
              <TechnicalActivitiesGallery />
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Row lg={2}>
            {data.map((e) => {
              return (
                <Col className="d-flex">
                  <Card>
                    <Card.Img variant="top" src={e.image} />
                    <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Text>{e.text}</Card.Text>
                    </Card.Body>
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
