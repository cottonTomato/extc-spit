import { Card, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import data from "./technicalActivitiesData";
import TechnicalActivitiesGallery from "../../container/gallery/TechnicalActivitiesGallery";
import "./technicalActivities.css";

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
          <Row lg={2} >
            {data.map((e) => {
              return (
                <Card className="col-sm clickable-card" style={{ height: "1000px" }} href={e.report}>
                  <Card.Img variant="top" src={e.image} />
                  <Card.Body className="tecac-body">
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text className="tecac-text">
                      {e.text}
                      <a href={e.report} variant="bottom" className="report-link btn btn-primary stretched-link">
                        Report
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}
