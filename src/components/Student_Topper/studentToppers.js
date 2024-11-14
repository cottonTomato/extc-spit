import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./Topper.css";
import toppers from "./topperData";

class StudentToppers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toppersData: toppers,
    };
  }

  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>ACADEMIC TOPPERS</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <br />
          {this.state.toppersData.map((year, index) => (
            <>
              <Card className="outer-card mb-4" key={index}>
                <p className="year-title">{year.year}</p>
                {year.data.map((category, index) => (
                  <>
                    <Card className="inner-card mb-3" key={index}>
                      <br />
                      <Card.Title className="category">{category.category}</Card.Title>
                      <Card.Body>
                        <table className="topper-table">
                          <thead>
                            <tr>
                              <th>Rank</th>
                              <th colSpan="2">Details of the Student</th>
                              <th>CGPI</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.students.map((student, index) => (
                              <tr key={index}>
                                <td>{student.rank}</td>
                                <td>
                                  <img
                                    src={student.img}
                                    className="topper-photu"
                                    alt="student-pic"
                                  />
                                </td>
                                <td className="">{student.name}</td>
                                <td>{student.cgpi}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </Card.Body>
                    </Card>
                    <br />
                  </>
                ))}
              </Card>
            </>
          ))}
        </Container>
      </>
    );
  }
}

export default StudentToppers;
