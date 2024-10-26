import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClassGallery309 from "../../container/gallery/ClassGallery309";

class Class309 extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">Classroom 309</h3>
        <Card className="mt-2">
          <Card.Body>
            <ClassGallery309 />
            <br /> <br />
            <div>
              <h6>Class location: 3rd Floor</h6>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Class309;
