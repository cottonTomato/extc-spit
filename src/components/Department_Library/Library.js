// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import "./style.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import LibraryGallery from "../../container/gallery/LibraryGallery";
import BookList from "../../pdfs/department_libary_book_list.pdf";

class DepartmentLibrary extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>DEPARTMENT LIBRARY</h3>
            </Col>
          </Row>
        </Container>

        <Container>
          <Card className="mt-2">
            <Card.Body>
              <LibraryGallery />
            </Card.Body>
          </Card>
        </Container>

        <Container>
          <a href={BookList}>
            <h2>Book List</h2>
          </a>
        </Container>
      </>
    );
  }
}

export default DepartmentLibrary;
