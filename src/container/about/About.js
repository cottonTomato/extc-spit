import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import hodImg from "../../images/hod-desk-img.jpg";
import "./about.css";
import { Link } from "react-router-dom";
import extcvideo from "../../videos/EXTC_Video.mp4";
import naacBanner from "../../images/NAAC_banner.jpg";

class About extends Component {
  render() {
    return (
      <section
        className="about py-5"
        id="about"
        style={{ backgroundColor: "#fff", justifyContent: "center" }}
      >

        <Container>
          <Col
            xs={6}
            lg={12}
            md={8}
            className="mx-auto px-lg-5 pt-0 mt-0 mb-5 align-self-center"
            data-aos="fade-in"
          >
            <div className="about-img_container">
              <Image
                src={naacBanner}
                fluid
              />
            </div>
          </Col>

          <Card className="card-style">
            <h1>About</h1>
            <p style={{ textAlign: "justify" }}>
              The B.E. Electronics and Telecommunications Engineering is a comprehensive four-year
              program that imparts a well-rounded education and a strong foundation in electronics,
              communications, computing, and engineering sciences. Established in 2005, the department
              initiated the Electronics &amp; Telecommunication Engineering Course with an intake of 60 students
              and later introduced M.E. (EXTC) in 2010 with 18 students. The department is currently scaling
              new heights with the launch of a Ph.D. program in 2012 with an intake capacity of 20 research
              scholars. S.P.I.T became an Autonomous Institute, affiliated to University of Mumbai in 2017.
            </p>

            <p style={{ textAlign: "justify" }}>
              The UG intake capacity from Academic year 2021-22 has been doubled 120 students. We have
              been Granted Empowered Autonomy Status by the University of Mumbai in 2023. The faculty,
              equipped with high qualifications and professional expertise, conducts training programs
              covering Network Administration, Communication, Design &amp; Optimization, Network Security,
              Embedded Systems, Real-time DSP applications, VLSI design, and RTOS. The department
              collaborates with institute of national importance and companies through MoUs to enhance
              students&#39; technical knowledge. Faculty members actively engage in R&amp;D, publishing research in
              prestigious international journals and conferences such as IEEE, IET, AIP, ASP, Elsevier, etc.
              Students stay informed through organizations like IEEE, IETE, and F.E.T.S. Graduates find
              opportunities in communication, networking, and technology-driven fields. Companies such as J
              P Morgan, Nomura, Barclays, Deutsche Bank, STM, Qualcomm, Intel, Google, Deloitte, L&amp;T,
              etc., recruit our students on campus.
            </p>
          </Card>

          <Card className="card-style">
            {/* add the EXTCVideo here as embed */}

            {/* <video controls autoplay loop>
              <source src={extcvideo} type="video/mp4" />
            </video> */}
            <iframe src={extcvideo}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="EXTC_Video"></iframe>
          </Card>


          <Card className="card-style" style={{ textAlign: "justify" }}>
            <h1>From HOD's Desk</h1>
            <img src={hodImg} width="300" height="300" style={{ borderRadius: "50%", display: "block", margin: "auto", marginTop: "20px", marginBottom: "20px" }} />
            <p>
              The Department of Electronics and telecommunication was established in 2005 which
              offers B. Tech. degree in Electronics and Telecommunications Engineering with a dream to
              provide a broad liberal education as well as to impart both knowledge, and skills to strengthen
              the foundation in engineering sciences, mathematical and scientific fundamentals and to gain
              expertise in various domains of electronics, communications, computing. This dream achieved a
              new pedestal when the first batch of students of Masters in Electronics and Telecommunications
              Engineering started in the academic year 2010 with an intake of 18 students. The department is
              currently scaling new heights with the launch of a Ph.D. program in 2012 with an intake capacity
              20 research scholars. S.P.I.T became an Autonomous Institute, affiliated to University of
              Mumbai in 2017. The UG intake capacity from Academic year 2021-22 has been doubled to 120
              students. We have been Granted Empowered Autonomy Status by the University of Mumbai in
              2023.
            </p>
            <p>
              The National Board of Accreditation accredited the department in 2013, 2017 and 2021.
              Department adopted the philosophy of ‘Outcome Based Education.’ It comprises highly qualified
              and professionally skilled faculty members with an impressive record of the published work.
              Department associated senior professionals from industry as an adjunct faculty. Department has
              offered curriculum which encourage holistic development of student. Department has an
              exclusive library with 1000+ books and access to services like NPTEL. The Laboratories are
              equipped with standard equipment’s &amp; accessories from best manufacturers and industry grade
              tools like HFSS, VNA, EMI/EMC Measurement tool, LabView, HDL, KEIL Professional
              Licenses, DSP Application software etc. Some of the laboratories have advanced hardware and
              demonstration setups like Mechatronics Toolkit, Biomedical Instrumentation Toolkit, Robot
              Models, Trainers, Microcontroller/ FPGA/CPLD prototype boards etc. Department faculties are
              rigorously involved in R&amp;D activities. The department has signed MoU with institute of national
              importance and companies for research collaboration, training and lab development and
              significantly improve technical knowledge and skills of students. Their research work is
              published in reputed international journals like IEEE, IET, AIP, ASP, Elsevier, Wiley, IETE etc. and also in international conferences. The faculty members conduct training programs in the
              various areas of engineering such as Communication, Design &amp; Optimization, Network Security,
              Embedded Systems, Real-time DSP applications, VLSI design and Real Time Operating
              Systems.
            </p>
            <p>
              Department also encourages entrepreneur activities for students to learn fundamentals of
              business to build their own startups. Faculties of our department are exclusively involved with
              AICTE Idea Lab, Incubation Centre and E-Cell activities. Furthermore, in order to promote co-
              curricular activities in students, department has strong association with different professional
              bodies like Institute of Electrical and Electronics Engineering (IEEE),  Indian Society of
              Technical Education (ISTE), IETE and department has its own student council named as Forum
              of Electronics and Telecommunication Student Association. Projects done by students are
              appreciated at various national level competitions like ARM Design Contest, Hackathon,
              Mitsubhishi Contest, Texas Instruments Innovation Challenges and many more. Graduates of our
              department have been recruited by communications and networking companies, and in
              technology-driven fields such as financial services and consulting practices in which computing
              and information management are central to the operation of the enterprise. Our students are
              recruited on campus by companies like J P Morgan, Nomura, Barclays, Deutsche Bank, STM,
              Qualcomm, Intel, Google, Deloitte, L&amp;T etc. Electronics and Telecommunication department
              students are very active in curricular, extra-curricular activities, sports, technical, non-technical
              activities.
            </p>
          </Card>
        </Container>
      </section>
    );
  }
}

export default About;
