import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClassGallery501 from "../../container/gallery/ClassGallery501";

class Class501 extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">Classroom 501</h3>
        <Card className="mt-2">
          <Card.Body>
            <ClassGallery501 />
            <br /> <br />
            <div>
              <h6>Class location: 5th Floor</h6>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Class501;
