import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClassGallery307 from "../../container/gallery/ClassGallery307";

class Class307 extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">Classroom 307</h3>
        <Card className="mt-2">
          <Card.Body>
            <ClassGallery307 />
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

export default Class307;
