// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";

class FdpParticipationPage extends Component {
  render() {
    return (
      <>
        {" "}
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>FACULTY DEVELOPMENT PROGRAMME (FDP) ATTENDED</h3>
            </Col>
          </Row>
        </Container>
        <div className="iframe-container">
          {" "}
            {/* <iframe
              scrollbar="no"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRmib8LOBnFRGL16HLnpYgtAdBa2VMKzBS5NnkDU1kWQXqzmL5jlit7kS8hbjLF3g/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="800px"
              style={{ border: "0" }}
              title="Spreadsheet"
            /> */}
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSK28cg66PabKJCoaTK1Wv8SQS9xnQIdpFHW-3DS3Wzyu27KpriYGd4QLIPyj2yBw/pubhtml?gid=427480530&amp;single=true&amp;widget=true&amp;headers=false" title="Spreadsheet" width="100%"
              height="100%"
              style={{ border: "0", height: "100%", scale: "1.25" }}>
            </iframe>
        </div>
      </>
    );
  }
}

export default FdpParticipationPage;
