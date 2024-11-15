import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Placements.css";
import BannerImg from "./companies.png";
import PlacementImg from "./placementbar.png";
import HigherStudies from "./HigherStudies2.png";
import HigherStudiesImg from "./HigherStudiesImg.png"

class StudentPlacements extends Component {
  render() {
    const placementStatistics = [
      { academicYear: "2023-24", appeared: 59, placed: 54, percentage: "91.5%" },
      { academicYear: "2022-23", appeared: 54, placed: 54, percentage: "100%" },
      { academicYear: "2021-22", appeared: 54, placed: 54, percentage: "100%" },
      { academicYear: "2020-21", appeared: 69, placed: 68, percentage: "99%" },
      { academicYear: "2019-20", appeared: 49, placed: 49, percentage: "100%" },
      { academicYear: "2018-19", appeared: 47, placed: 47, percentage: "100%" },
    ];

    const placementData = [
      {
        year: "2023-24",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "11.5%",
            details:
              "Carnegie Mellon University, University of California San Diego, ETH Zurich, IIM Calcutta, North Carolina State University, University of Leeds, Johns Hopkins University",
          },
          {
            profile: "Job",
            percentage: "68%",
            details:
              "Barclays, Work India, Baker Hughes, KPMG, JPMC, Deutsche Bank, Transunion, Oracle FSS, Quantiphi",
          },
        ],
      },
      {
        year: "2022-23",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "13.6%",
            details:
              "University of Massachusetts, Amherst; IIM, Kozhikode; University of California Los Angeles; The Pennsylvania State University; University of Southern California University of Wisconsin-Madison; University of Illinois Urbana Champaign; New York University; University of Southern California; University of Illinois Urbana Champaign; S.P.I.T",
          },
          {
            profile: "Job",
            percentage: "76.5%",
            details:
              "Deutsche Bank, ICICI Lombard, Quantiphi, Colgate, BNP Paribas, Baker Hughes, JPMC, Nomura, ISS, LTI, Workindia",
          },
        ],
      },
      {
        year: "2021-22",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "17.4%",
            details:
              "Oklahoma State University; Technical University of Munich; University of Pennsylvania; ETH Zurich; BITS School of Management; University of Southern California ; Illinois Institute of Technology ; Virginia Tech",
          },
          {
            profile: "Job",
            percentage: "78%",
            details:
              "KPMG; Quantiphi; MSCI; JPMC; ZS; GEP; Deloitte; Amdocs; WorkIndia; Dolat Capital; ICICI Lombard; Nomura PPO; Reliance Industries; Oracle Finance; Embedos",
          },
        ],
      },
      {
        year: "2020-21",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "18.5%",
            details:
              "Rochester Institute of Technology; University of Michigan - Dearborn; Carnegie Mellon University; Indiana University Bloomington; Texas A&M University; University of Texas- Dallas; New York University; Columbia University; University of Pennslvania",
          },
          {
            profile: "Job",
            percentage: "83.9%",
            details:
              "Deutsche Bank; Axxela; GEP; JPMC; Oracle; Carwale; ICICI Lombard; KPMG (ITA); LTI; Colgate; Quantiphi; LTTS; Jaro Education; Billdesk; ZS Associates; Cognizant; Deloitte; Ugam Solutions",
          },
        ],
      },
      {
        year: "2019-20",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "20%",
            details:
              "New York University; Columbia University; University of Pennslvania, NC State University; Virginia Tech; Carnegie Mellon University",
          },
          {
            profile: "Job",
            percentage: "65%",
            details:
              "Infosys; Citius Tech; LTTS; Quantiphi; ISS; Infosys; Kotak; KPMG; Capgemini; LnT Core; GEP; LnT Core; Deutsche Bank; Infosys; Oracle; Interactive Brokers; Colgate; Axxela",
          },
        ],
      },
      {
        year: "2018-19",
        profiles: [
          {
            profile: "M.S./MTech",
            percentage: "14.8%",
            details:
              "TU Delft; ETH Zurich; Indian Institute of Foreign Trade (IIFT), Delhi; Info. School Univ of Washington; Virginia Tech, Graduate School; KU LEUVEN, Belgium; Cornell University; NC State University; IITB; Carnegie Mellon University",
          },
          {
            profile: "Job",
            percentage: "70%",
            details:
              "Citius Tech, L&T, KPMG, Cognizant, ZS Associates, Oracle, Quantiphi, Infosys, GEP, Siemens",
          },
        ],
      },
    ];

    return (
      <>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>STUDENT PLACEMENT RECORDS</h3>
            </Col>
          </Row>
        </Container>
        <Container className="flex-center-container">
          <h1>OUR STUDENTS ARE PLACED AT</h1>
          <Col className="flex-center" xs={12} md={8}>
            <Image src={BannerImg} className="img-fluid" fluid />
          </Col>
          <br />
          <h1>PLACEMENT STATISTICS</h1>
          <Row className="justify-content-centeralign-items-center">
            <Col xs={12} md={6}>
              <Image src={PlacementImg} className="img-fluid" style={{ height: "350px" }} fluid />
            </Col>
            <Col xs={12} md={6}>
              <Image src="https://i.ibb.co/yB4M8Bv/salary-deets-2.png" className="img-fluid img-fluid-border" style={{ height: "350px" }} fluid />
            </Col>
          </Row>
          <h1>CATEGORY WISE STATISTICS</h1>
          <Row className="justify-content-centeralign-items-center">
            <Col xs={12} md={6}>
              <Image src="https://i.ibb.co/8dvyG3d/place-n-higher-3.png" className="img-fluid img-fluid-border" style={{ height: "350px" }} fluid />
            </Col>
            <Col xs={12} md={6}>
              <Image src="https://i.ibb.co/KKW6CdP/category-wise2.png" className="img-fluid img-fluid-border" style={{ height: "350px" }} fluid />
            </Col>
          </Row>
          <br />
          {/* <h3>Placement Statistics</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Academic Year</th>
                <th>Appeared</th>
                <th>Placed</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {placementStatistics.map((data, index) => (
                <tr key={index}>
                  <td>{data.academicYear}</td>
                  <td>{data.appeared}</td>
                  <td>{data.placed}</td>
                  <td>{data.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table> 
          <br /> */}
        </Container>
        <Container className="global-container text-center" fluid>
          <Row>
            <Col>
              <h3>HIGHER STUDIES</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <br />
          <div>
            <Container className="flex-center-container">
              <h1>OUR STUDENTS GO ON TO STUDY AT</h1>
              <Col className="flex-center" xs={12} md={8}>
                <Image src={HigherStudies} className="img-fluid" fluid />
              </Col>
              <br />
              <h1>HIGHER STUDIES STATISTICS</h1>
              <Col xs={12} md={6}>
                <Image src="https://i.ibb.co/pwM7Gqj/higher-stud.png" className="img-fluid" style={{ height: "350px" }} fluid />
              </Col>
            </Container>
            <br />
            <br />
            <h1>Placement, Entrepreneurship and Higher Studies Data:</h1>
            {placementData.map((yearData, index) => (
              <div key={index}>
                <h3>({yearData.year})</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Percentage</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearData.profiles.map((profile, profileIndex) => (
                      <tr key={profileIndex}>
                        <td>{profile.profile}</td>
                        <td>{profile.percentage}</td>
                        <td>{profile.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
              </div>
            ))}
          </div>
        </Container>
      </>
    );
  }
}

export default StudentPlacements;
