import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./Internships.css";
import { Image } from "react-bootstrap";
import InternImg from "./Interning.png";
import InternStats from "./InternshipStats.png";

class StudentInternships extends Component {
  render() {
    return (
      <>
        {" "}
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>INTERNSHIPS</h3>
            </Col>
          </Row>
        </Container>
        <Container className="internship-container">
          <Row className="justify-content-center">
            <Col md={10}>
              <h3 className="text-center mb-4 mt-4">
                OUR STUDENTS ARE INTERNS AT
              </h3>
              <p style={{ fontSize: "25px" }}><b>Research Internships</b></p>
              <Image src="https://i.ibb.co/w0LcYyh/research.png" fluid style={{ width: "100rem" }} />
              <br />
              <br />
              <br />
              <p style={{ fontSize: "25px" }}><b>Industrial Internships</b></p>
              <Image src="https://i.ibb.co/23CCRCs/industrial.png" fluid style={{ width: "100rem" }} />
              <br />
              <br />
              <br />
              <br />
              {/*<h3 className="text-center mb-4">6-MONTH INTERNSHIP</h3>*/}
              {/*<p style={{ fontSize: "25px" }}><b>6-Month Internships Statistics</b></p>*/}
              <div className="internship-stats-container d-flex justify-content-center align-items-center">
                <div>
                  <Image src="https://i.ibb.co/QjhG7Xd/internchart.png" fluid />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default StudentInternships;
