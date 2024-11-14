// CREATED BY ATHARVA SHAH & ISHANI MATHUR FOR EXTC DEPARTMENT

import React, { Component } from "react";
import "./achievements.css";

export const FacultyAchievementsData = {
  sponsoredProjects: [
    { sr: 1, achievement: "Dr. B. N. Chaudhari and Dr. Rajendra Sawant received financial support @70.20 Lakh comprising DST share of Rs. 60.70 Lakh and an Industry Share of Rs. 9.5 Lakh for the project titled “Design and Development of a Fully Automated Pressure and Vacuum Controlled Precision Induction Casting Machine” under Trainer Development Programme (TDP)" },
    { sr: 2, achievement: "Dr. Sujata Kulkarni and Prof. K. T. Talele received a Provisional Grant of USD 25,000 from Distributed Sensor Technology and Education Initiative (DSTEI) R10 Region for the project on Smart Drone to IEEE-AESS Student Branch." },
    { sr: 3, achievement: "Dr. Rajendra Sawant, Dr. Y. S. Rao, Dr. Reena Sonkusare, Dr. Prashant Kasambe, Prof. Miind Paraye successfully completed Phase 1 of Modernization of Digital Laboratory and Renewable Sources of Energy by procuring various state-of-the-art software tools and kits on next-generation VLSI technology and Power Electronics. AICTE MODROB fund worth Rs. 17 Lakh." },
    { sr: 4, achievement: "Dr. Y. S. Rao received AICTE IDEALAb 15 Lakhs grant for Conducting Technical Activities & 1 Cr Lab setup under SP-TBI PRAYAS Lab from AICTE-IDEALab, SP-TBI (PRAYAS)" },
    { sr: 5, achievement: "Dr. Rajendra Sawant and Dr. Y. S. Rao Successfully completed Consultancy Project worth Rs. 4.5 Lakh. From General Auto Electric Co." },
    { sr: 6, achievement: "Dr. Reena Sonkusare, Dr. Rajendra Sawant and Prof. Priya Deshpande received a consultancy Project of Rs 3.5 lakh for development of Smart Energy Meter from KPEC Engineers & Contractors Private Limited, Mumbai" },
    { sr: 7, achievement: "Dr. B. N. Chaudhari, Dr. B. N. Chaudhari, Dr. Y. S. Rao and Dr. D. Kalbande received IDEA LAB Research Grant worth Rs. 15 Lakh from AICTE, New Delhi" },
    { sr: 8, achievement: "Dr. Rajendra Sawant and Dr. Darshana Sankhe received a grant of 6.5 Lakh from DST Nidhi Prays for the project titled “Digitally Controlled Resonant Power Supply”." },
    { sr: 9, achievement: "Dr. Sujata Kulkarni received Grant of USD250 from IEEE-AESS student Chapter." },
    { sr: 10, achievement: "Dr. Sujata Kulkarni received a Publication Grant (postdoctoral) of USD250 from IEEE-AESS." },
    { sr: 11, achievement: "Dr. Sujata Kulkarni received AICTE ATAL FDP Grant of Rs. 93000/- in 2021-2022 on “Dr. Sujata Kulkarni received the IEEE -SPIT student Chapter Platinum AWARD." },
  ],
  patentsGranted: [
    { sr: 1, achievement: "Dr. B. N. Chaudhari received Indian Patent Grant for the Patent titled, “An Outer Rotor Permanent Magnet Polyphase Transverse Flux Machine”." },
    { sr: 2, achievement: "Dr. B. N. Chaudhari received Indian Patent Grant for the Patent titled, “An Outer Rotor Hybrid Excited Polyphase Transverse Flux Machine”." },
    { sr: 3, achievement: "Dr. K. T. Talele Received a Patent Grant Patent titled \"Sustainable PICOHYDRO POWER GENERATION SYSTEM\"." },
  ],
  patentsPublished: [
    { sr: 1, achievement: "Patil Arpit Sanjay, Bhagwat Atharav Rajendra, Vasani Chirag Vidyut, Rodricks Ferdinand, Kiran Talele and Govind Haldankar published a Patent titled, “Electrify Mobility”, in June 2024." },
    { sr: 2, achievement: "Sambhare Anish, Gadgil Varad, Dongarjal Utkarsha, Kulkarni Swanand, Kasambe Prashant published a Patent titled, “Evergreen River System” on February 2024." },
    { sr: 3, achievement: "Shubham Kanhere, Kaustubh Ghare, Alisha Kadam, Kiran Talele and Anand Mane published a Patent titled, “Remotsak -A Real-Time Person Detection and Surveillance System”, in February 2024." },
    { sr: 4, achievement: "Deshpande Priya, 2022-2023 on “, Deshpande Priya, Kasambe Prashant, Kadam Prathamesh, Makwana Dhvanik, Kamtekar Suraj, Dedhia Fenil, Kadam Namita, Mukherjee Shrutiman published a Patent titled, “Photographic Recognition for the Visually Impaired”, in October 2023." },
    { sr: 5, achievement: "Shubham Sawant, Bilal Sani, Niharika Mehta, Kiran Talele published a Patent titled, “Systems and Methods for a web-based learning platform for online courses”, in October 2023." },
    { sr: 6, achievement: "Deshpande Priya, Kasambe Prashant, Kadam Prathamesh, Makwana Dhvanik, Kamtekar Suraj, Dedhia Fenil, Kadam Namita, Mukherjee Shrutiman published a Patent titled, “Photographic Recognition for the Visually Impaired”, in October 2023." },
    { sr: 7, achievement: "Rathod Surendra, Kalbande Dhanajay published a Patent titled, “AI Powered Single Switch Based Remote Health Monitoring System for Elderly”, in 2022-23." },
    { sr: 8, achievement: "Gohildarshan, Aralikatti Akhilesh, Halder Riya, Talele Kiran published a Patent titled, “System and Method for Generating Intelligent Responses with a Speaker”,in 2022-23" },
    { sr: 9, achievement: "Talele Kiran, Parasnis Guruprasad, Gadgil Tanmay, Bhope Rajas, Joshi Aarnav, Kanhere Shubham published a Patent titled, “Real-Time Obstacle Detection And Response System For Safer Driving”, in 2022-23" },
    { sr: 10, achievement: "Jay Mehta, Vaidehi Vatsaraj, Jainam Jain and Kiran Talele published a Patent titled “Guided vision controlled proctoring system for distant examination” in August 2021." },
    { sr: 11, achievement: "Talele Kiran, Benn Melita, Pulapaka Anay and Pulapaka Atharva published a Patent titled “Smart Wearable for Training” in October 2021." },
  ],
  recognitionsAndAwards: [
    { sr: 1, achievement: "Prof. Pallavi Malame received NPTEL Elite Topper for the course on Nanophotonics, Plasmonics and Metamaterials in 2023-24." },
    { sr: 2, achievement: "Prof. Prashant Kasambe nominated for Academic Excellence in Teaching as Faculty, Regional Category for IEI NMLC-FCRIT EXCELLENCE AWARDS." },
    { sr: 3, achievement: "Dr. Rajendra Sutar received Best Project Award at ATAL IDEA Lab Advanced FDP on “Electronic System Design” from K.S. Rangasamy College Of Technology (Autonomous) Tiruchengode – 637 637. Namakkal Dt. Tamil Nadu, INDIA" },
    { sr: 4, achievement: "Prof. Priya Deshpande received Best Project Award for the Project titled “Structural Monitoring of Road Conditions” in The Inventors Challenge-2022 Arm Education and STMicroelectronics with support from AICTE’s Training and Learning Academy (ATAL), New Delhi" },
    { sr: 5, achievement: "Prof. Pallavi Nair, received IEEE MTTS APS-MAPCON conference at Bangalore in 2022" },
    { sr: 6, achievement: "Dr. Sujata Kulkarni - Best Paper Award for \"Analysis of Seismic Signal and Detection of Abnormalities\" International Conference on Computational Intelligence Paradigms (CLIP2022) NIT, Tiruchirappalli." },
    { sr: 7, achievement: "Dr. Narendra Bhagat received Best paper Award in 7th International Conference ICIRTE 2022, Vasantdada Patil Pratishathan’s College of Engineering and Visual Arts, Mumbai" },
    {
      sr: 8, achievement: "Dr. Sujata Kulkarni Awarded Vibrant Pilot Grand entry at Finale from IEEE Global YESIST12 Project /prototype  Competition -SPIT  Pilot institute at national and International level Conducted in SPIT 2023-24"
    },
    {
      sr: 9, achievement: "Dr. Sujata Kulkarni got Mentor Appreciation for Team of “Drone for smart agriculture” presented at Grand finale round at Tunesiain 2024-25."
    },
    { sr: 10, achievement: "Dr. Sujata Kulkarni got recognition for Lab Migration Project of AIML in R studio- 2023-2024." },
    { sr: 11, achievement: "Dr. Sujata Kulkarni received CSIR travel Grant for international conference for IECON2023 at Singapore" },
    { sr: 12, achievement: "Dr. Sujata Kulkarni completed sponsored  IEEE- Science ,Technology, Electronics, Engineering(STEM) activity on the theme  on “ANTRIKSH: SPACE,SATELLITES AND SATELLITE COMMUNICATION THROUGH ELECTRONICS” at school level to nurture culture of science and technology from school level only 2023-24." },
    { sr: 13, achievement: "Dr. Sujata Kulkarni received IEEE -SPIT student chapter  Platinum AWARD" },
  ],
};

export class AchievementsTable extends Component {
  render() {
    const { title, data } = this.props;

    return (
      <div>
        <h1><b>{title}</b></h1>
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Achievements</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.sr}</td>
                <td>{item.achievement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

