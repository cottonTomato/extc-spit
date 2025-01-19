import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./reimbursement.css";

export class projects extends Component {
  render() {
    return (
      <>
      <section
        className="about"
        id="about"
        style={{ backgroundColor: "#fff", justifyContent: "center"}}
      >
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>Reimbursement Policy</h3>
            </Col>
          </Row>
        </Container>

        <br/>

        <Container className="py-0">
          <h1 className="mx-0 mt-0 pt-0">Steps-Wise Process to Avail Reimbursement</h1>

          <Card className="card-style pt-0 mt-0">
            <h1>Step I</h1>
            <ul style={{ textAlign: "justify"}}>
              <li>Visit url: research.spit.ac.in</li>
              <li>Perform the registration process</li>
              <li>Click on "post paper" (at the right side of the page). An online form will appear. Fill all the details in the form</li>
              <li>You will have to upload the documents: Paper (published paper preferably), Certificate of publication, Supporting proof (proof of payment of registration charges; proofs of other expenses)</li>
              <li>Once all the details are filled, click on "Save changes" (at the bottom)</li>
              <br/>
              <p>(Note: Upload all asked documents. Don't leave any textbox or upload option blank.)</p>
              <li>Now, one page will be generated and will appear on your screen. Save the webpage in pdf form (say "application form").</li>
            </ul>
          </Card>


          <Card className="card-style pt-0 mt-0" style={{ textAlign: "justify"}}>
            <h1>Step II</h1>
            <p style={{fontSize: 22}}>After filling the above form, students need to submit the application with following documents: (with a proper authorised signed)</p>
            <ul style={{ textAlign: "justify"}}>
              <li>Application form (above mentioned).</li>
              <li>Copy of published paper.</li>
              <li>Copy of proof of all expenses.</li>
              <li>Certificates of publication (if conference is not over then copy of selection)</li>
            </ul>
            <p style={{fontSize: 22}}>Send this application along with the said documents to following R & D coordinators</p>
            <ul style={{ textAlign: "justify"}}>
              <li>MCA Dept -  Dr. Aarti Karande</li>
              <li>Computer Dept - Prof. Abhijeet Salunke</li>
              <li>Computer Science and Engg - Prof. Shalini N.</li>
              <li>EXTC Dept - Prof. Milind Paraye</li>
            </ul>
          </Card>
        </Container>
      </section>
      </>
    );
  }
}

export default projects;
