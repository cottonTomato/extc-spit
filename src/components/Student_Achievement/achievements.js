const studentsData = [
  {
    id: 1,
    name: "Namita Kadam",
    class: "B.E",
    achievement: "Academic",
    awardDescription:
      'Received award at National level "Chanakya Competition" conducted by IIM Indore.',
    date: "11th to 13th November 2022",
  },
  {
    id: 2,
    name: "Apoorva Limaye, Siddhant Kamlaskar, Varun Kamath",
    class: "B.E",
    achievement: "Academic",
    awardDescription:
      'Winners of "The Inventors Challenge-2022" organized by Arm Education and STMicroelectronics with support from AICTE\'s Training and Learning Academy (ATAL), New Delhi.',
    date: "5th December 2022",
  },
  {
    id: 3,
    name: "Anushka Anil Pilena",
    class: "B.E",
    achievement: "Academic",
    awardDescription:
      "Contribution in 1. world Book of record 2. India book of record 3. Asia Book of record 4. assist world Book of record of Dr. APJ Abdul Kalam Satellite Launch vehicle Mission 2023",
    date: "19th February 2023",
  },
  {
    id: 4,
    name: "Prathamesh Kulkarni",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Runner up of the SPIT Innovation Cup -23 Organized by AICTE SPICES, AICTE Idea-Lab SP-IT, SP-TBI, IEEE, ESA and IIC-S.P.I.T.",
    date: "8th April 2023 to 8th May 2023",
  },
  {
    id: 5,
    name: "Anish Sambhare",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Runner up of the SPIT Innovation Cup -23 Organized by AICTE SPICES, AICTE Idea-Lab SP-IT, SP-TBI, IEEE, ESA and IIC-S.P.I.T.",
    date: "8th April 2023 to 8th May 2023",
  },
  {
    id: 6,
    name: "Esha Khot",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Patent granted on SYSTEM TO CONTROL VEHICULAR EMISSION AT TRAFFIC SIGNALS.",
    date: "21st April 2023",
  },
  {
    id: 7,
    name: "Prathamesh Kulkarni",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Winner of Periperathon 1.0 conducted by AICTE SPICES SPIT, Mumbai",
    date: "5th July 2023",
  },
  {
    id: 8,
    name: "Malay Phadke",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Winner of Kavach Hackathon organized by BPR&D, AICTE, I4C",
    date: "9th August 2023",
  },
  {
    id: 9,
    name: "Aditya Nagane",
    class: "S.E",
    achievement: "Academic",
    awardDescription:
      "Winner of Microapp event of Voltus Midspark23 organized by College of Engineering, Pune",
    date: "27th to 29th October 2023",
  },
  {
    id: 10,
    name: "Nidhish Dhadve, Henil Gandhi, Pratham Gajapure",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Finalists of Samriddhi (ECO-LUTION) organized by GIM (Goa Institute of Management)",
    date: "15th November 2023",
  },
  {
    id: 11,
    name: "Nidhish Dhadve, Henil Gandhi, Nishant Chandeliya",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Winners of 'Cryptic Bonds' organized by GAEE IIFT KAKINADA",
    date: "29th November 2023",
  },
  {
    id: 12,
    name: "Nishant Chandeliya, Henil Gandhi, Nidhish Dhadve, Aniket Kesarwani",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "First Runner up of Breakthrough organized by Entrepreneurial Passion and Innovation Club (EPIC) of IIM Visakhapatnam",
    date: "11th December 2023",
  },
  {
    id: 13,
    name: "Aniket Kesarwani, Advait Khaire, Govind Kela",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Semi Finalist of Amaethon: The Food & Agribusiness Conclave organized by IIM Ahmedabad",
    date: "23rd December 2023",
  },
  {
    id: 14,
    name: "Nishant Chandeliya, Henil Gandhi, Nidhish Dhadve, Pratham Gajapure",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Second Runner up of Adomania: A Marketing Event Organized by VJTI, Mumbai",
    date: "11th January 2024",
  },
  {
    id: 15,
    name: "Vedant Bhagwat, Yash Surve, Damodar Kamath, Harsh Gad, Het Gala, Parth Jadhav, Atharva Kadge, Sahil Gupta, Piyanshu",
    class: "T.E",
    achievement: "Non-Academic",
    awardDescription:
      "Runner up of Intercollegiate Cricket organized by KJ Somaiya Vidyavihar, Mumbai",
    date: "24th January 2024",
  },
  {
    id: 16,
    name: "Aryan Adav",
    class: "T.E",
    achievement: "Non-Academic",
    awardDescription:
      "Winner of Video Content Competition organized by Larana, Inc",
    date: "5th February 2024",
  },
  {
    id: 17,
    name: "Sejal Patil, Ayushi Naik, Aditi Ramugade",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Winner of Vishleshan: Annual Flagship Case Competition organized by VNIT Nagpur",
    date: "10th February 2024",
  },
  {
    id: 18,
    name: "Malay Phadke",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Selected as MITACS Globalink Research Intern at University of Calgary, MITACS, Canada",
    date: "16th February 2024",
  },
  {
    id: 19,
    name: "Nidhish Dhadve",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "2nd Runner up of Business Beacon organized by TECHFEST NMIMS, Mumbai",
    date: "17th February 2024",
  },
  {
    id: 20,
    name: "Pratham Gajapure, Henil Gandhi, Nishant Chandeliya",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Finalist of Marketing Mavericks organized by IIFM Bhopal",
    date: "24th February 2024",
  },
  {
    id: 21,
    name: "Pratham Gajapure, Henil Gandhi, Nishant Chandeliya",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Finalist of Resilient Routes-Sustainable Supply Chain Challenge organized by IIFM Bhopal",
    date: "24th February 2024",
  },
  {
    id: 22,
    name: "Ayushi Naik, Gauri Narkar",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Winner of Consulting Challenge organized by MPSTME, NMIMS Mumbai",
    date: "27th February 2024",
  },
  {
    id: 23,
    name: "Gayatri Tajne",
    class: "T.E",
    achievement: "Academic",
    awardDescription: "1st Runner up of DataDecode organized by IIT Delhi",
    date: "2nd March 2024",
  },
  {
    id: 24,
    name: "Mayuresh Pitale, Sridhar Sundar",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Finalist of UNPLUGGED 1.0 Hackathon organized by IETE- ISF DJSCE, Vile Parle",
    date: "9th March 2024",
  },
  {
    id: 25,
    name: "Nidhish Dhadve",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "1st Runner up of Yashasvi - Make Your Mark- National Case Study competition organized by Symbiosis Centre For Management and Human Resource Development department, Symbiosis Institute of Business Management, Pune",
    date: "14th March 2024",
  },
  {
    id: 26,
    name: "Vedant Bhagwat, Omkar Lokre, Yash Ugale, Gandhar Kulkarni",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "2nd Runner up of National Case Study organized by E-summit by E-Cell S.P.I.T.",
    date: "16th March 2024",
  },
  {
    id: 27,
    name: "Aparna Jha",
    class: "S.E",
    achievement: "Academic",
    awardDescription:
      "Consolation prize winner of Sustainability Case Study event of Innovation for India event organized by ICFAI Business School, Pune",
    date: "28th August 2024",
  },
  {
    id: 28,
    name: "Keshav Jha, Manaswi Rajput Prneeka Ballabh",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "Selected as one of the winning entries in the VIVIBHA Vision for Viksit Bharat Research Paper Writing Competition (Konkan Prant Level) for the topic of Skymapper:  an antenna to track satellite from earth.",
    date: "8th October 2024",
  },
  {
    id: 29,
    name: "Smit Gawade, Eshaan Golatekar, Soham Gondhalekar",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "1st runner up of ISB business case study competition Organized by ISB, Hydrabad",
    date: "19th October 2024",
  },
  {
    id: 1,
    name: "Mandar Dumbre, Aishwarya Bichave, Arya Patkar",
    class: "T.E",
    achievement: "Academic",
    awardDescription:
      "1st place in the National Case Study Competition - MarkIIT, held at SAMANVAY'24, the prestigious annual business fest organized by the Department of Management Studies, IIT Madras",
    date: "9th November 2024",
  },
];

export default studentsData;
