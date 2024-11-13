import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import LabGalleryPDC from "../../container/gallery/LabGalleryPDC";

class LabPDC extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">Product Developement Lab</h3>

        <Card className="mt-2">
          <Card.Body>
            <LabGalleryPDC />
            <br /> <br />
            <div>
              <br></br>
              <p>
                <b>Salient Features</b> <br></br>
                <ul style={{ marginLeft: "50px" }}>
                  <li>Developed in the year 2019-20.</li>
                  <li>For Undergraduate Engineering Students</li>
                  <li>Funded by SP-IT Alumni Network</li>
                  <li>Investment INR 12,00,000</li>
                  <li>IoT based Analog &amp; Digital Electronics Workbench</li>
                </ul>
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default LabPDC;
