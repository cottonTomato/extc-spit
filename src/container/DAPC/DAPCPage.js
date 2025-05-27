import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./DAPC.css";

//pdf imports

import BOS1718 from "../../pdfs/bos/Board of Studies_2017-18.pdf";
import BOS1819 from "../../pdfs/bos/Board of Studies_2018-19.pdf";
import BOS1920 from "../../pdfs/bos/Board of Studies_2019-20.pdf";
import BOS2021 from "../../pdfs/bos/Board of Studies_2020-21.pdf";
import BOS2122 from "../../pdfs/bos/Board of Studies_2021-22.pdf";
import BOS2223 from "../../pdfs/bos/Board of Studies_2022-23.pdf";
import BOS2324 from "../../pdfs/bos/Board of Studies_2023-24.pdf";
import BOS2425 from "../../pdfs/bos/Board of Studies_2024-25.pdf";

import DAPC2125 from "../../pdfs/dapc/DAPC-2021-25.pdf";
import DAPC2226 from "../../pdfs/dapc/DAPC-2022-26.pdf";
import DAPC2327 from "../../pdfs/dapc/DAPC-2023-27.pdf";

class DAPC extends Component {
  render() {
    return (
      <section>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>DAPC Reports</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="btech-container">
                <div className="btech-item">
                  <ul>
                    <li>
                      <a href={DAPC2125} target="_blank">
                        <h2>DAPC Report 2021-2025</h2>
                      </a>
                    </li>
                    <li>
                      <a href={DAPC2226} target="_blank">
                        <h2>DAPC Report 2025-2026</h2>
                      </a>
                    </li>
                    <li>
                      <a href={DAPC2327} target="_blank">
                        <h2>DAPC Report 2023-2027</h2>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default DAPC;
