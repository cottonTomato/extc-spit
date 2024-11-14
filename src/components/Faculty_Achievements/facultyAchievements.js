// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./achievements.css";
import FacultyAchievementGallery from "./../../container/gallery/FacultyAchievementGallery";
import { AchievementsTable, FacultyAchievementsData } from "./achievements";

class FacultyAchievements extends Component {
  render() {
    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>FACULTY ACHIEVEMENTS</h3>
            </Col>
          </Row>
        </Container>
        <Container >

          <Card className="mt-2">
            <Card.Body>
              <FacultyAchievementGallery />
              <br /> <br />
              <div>
                <AchievementsTable title="Sponsored Projects / Grants Received" data={FacultyAchievementsData.sponsoredProjects} />
                <AchievementsTable title="Patents Granted" data={FacultyAchievementsData.patentsGranted} />
                <AchievementsTable title="Patents Published" data={FacultyAchievementsData.patentsPublished} />
                <AchievementsTable title="Faculty Recognitions and Awards" data={FacultyAchievementsData.recognitionsAndAwards} />
              </div>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default FacultyAchievements;
