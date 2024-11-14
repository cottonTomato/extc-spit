import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import LabGalleryPDC from "../../container/gallery/LabGalleryPDC";

class LabPDC extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-capitalize text-center mb-4 mt-4">
          Product Developement Lab
        </h3>

        <Card className="mt-2">
          <Card.Body>
            <LabGalleryPDC />
            <br /> <br />
            <div className="container">
              <div className="header">
                <h4>Mentored by Dr Rajendra R Sawant</h4>
              </div>

              <div className="section">
                <h5>Vision and Mission</h5>
                <p>
                  The vision and mission of this program revolves around the
                  overall development of students in the sphere of innovation.
                  The main aim is to instill a sense of creativity in sync with
                  technical aspects. All in all, to harness invention and
                  innovation.
                </p>
              </div>

              <div className="section">
                <h5>Objective</h5>
                <ul>
                  <li>To convert project to prototype for commercialization</li>
                  <li>To develop and test hardware/software products</li>
                  <li>
                    To provide technology support for creative product
                    development
                  </li>
                  <li>
                    To develop skills required for end-to-end product
                    development
                  </li>
                </ul>
              </div>

              <div className="section">
                <h5>Asset Cost</h5>
                <p>
                  Rs. 21,00,000, Civil Infrastructure: 14.15 Lakhs, Equipment:
                  6.85 Lakhs
                </p>
              </div>

              <div className="section">
                <h5>Contributor</h5>
                <p>SPIT Alumni Network, SPTBI, SPIT</p>
              </div>

              <div className="section">
                <h5>Projects</h5>
                <p>
                  Two Internship Projects Completed: A part of DST Projects
                  DST/TDT/TDP-16/2022. One internship on Development of Telecom
                  Power Power Supply for 5G Networks funded by DST NIDHI-PRAYAS
                  by Individual Researcher Dr Darshana Sankhe, PhD Student SPIT.
                </p>
              </div>

              <div className="section">
                <h5>
                  Internship Generated (1<sup>st</sup> Jan to 30<sup>th</sup>{" "}
                  June 2024)
                </h5>
                <p>Completed.</p>
                <p>(Report Attached in Annexure-1)</p>
              </div>

              <div className="section">
                <h5>Forthcoming National Level Activity</h5>
                <p>
                  The existing PDC LAB serves as an important place for
                  execution of DST funded Project:
                </p>
                <ul>
                  <li>
                    1 DST/TDT/TDP-16/2022 Design and development of pressure and
                    vacuum controlled casting machine
                  </li>
                  <li>2 DST NIDHI PRAYAS Individual research funded Project</li>
                </ul>
                <p>
                  The minimum required infrastructure is created to offer work
                  on various products and projects by PDC:
                </p>
                <ul>
                  <li>
                    Few testing equipment worth 7 Lakhs like CROs, Multimeters
                    etc. are procured under PDC and would be made available for
                    proposed IDEALAB
                  </li>
                  <li>
                    The facilities like Wireless LAN, internet connectivity,
                    pantry, product show-cases and display-boards are created
                    for PDC would be available for IdeaLAB.
                  </li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default LabPDC;
