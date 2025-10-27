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
  {
    "id": 0,
    "name": "Bhavik Desai,\nVinay Gupta\nAarush Maheshwari",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Finalist of chocolate factory 6.0: Construct your Choco-Dynasty! Competition organized by NMIMS, Mumbai",
    "date": "11th October 2024"
  },
  {
    "id": 0,
    "name": "Om Patole,\nRuturaj Parab,\nAashi Hemnani",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Winner of Business Case study competition organized by Vivekanand Education Society's Institute of Management, Mumbai",
    "date": "18th October 2024"
  },
  {
    "id": 0,
    "name": "Akshat Ambastha",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Finalist of Vescase - Case Study competition organized by GGSIPU, Delhi",
    "date": "25th October 2024"
  },
  {
    "id": 0,
    "name": "Akshat Ambastha, \nAnuj Gite",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Secured 4th place in 1,2,3 Sold - Guess, Bid & Win Big competition organized by DoMS, IIT Madras",
    "date": "9th November 2024"
  },
  {
    "id": 0,
    "name": "Akshat Ambastha",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Finalist of Business Panchatantra competition organized by DoMS, IIT Madras",
    "date": "9th November 2024"
  },
  {
    "id": 0,
    "name": "Akshat Ambastha, \nAnuj Gite",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Winners of Fynergy - A Finance Case Study competition organized by DoMS, IIT Madras",
    "date": "10th November 2024"
  },
  {
    "id": 0,
    "name": "Akshat Ambastha, \nAnuj Gite",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Finalist of Quizonomics - Business Quiz organized by DoMS, IIT Madras",
    "date": "10th November 2024"
  },
  {
    "id": 0,
    "name": "Aparna Jha",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "National Finalist of E-Conjecture: The Economics & Public Policy Event during Atharv Ranbhoomi’24 organized by IIM Indore",
    "date": "10th November 2024"
  },
  {
    "id": 0,
    "name": "Himanshu Agrawal",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "1st Runner up of Eco-Lution: Your Ticket to The World of Management, International Case Competition organized by GIM, Goa",
    "date": "16th November 2024"
  },
  {
    "id": 0,
    "name": "Bhavik Desai,\nAbhigyan Jha,\nGargi Dhulekar,\nHarsh Gad",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "National Finalist of Eco-Lution: an International Case Competition organized by GIM, Goa",
    "date": "17h November 2024"
  },
  {
    "id": 0,
    "name": "Aparna Jha",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "1st runner up of Insight360: a National Level Media Case Study Competition Organized by ISB&M, Pune",
    "date": "24th November 2024"
  },
  {
    "id": 0,
    "name": "Shrutika Yeole, \nOm Patil, \nOmkar Yadav, \nRuchir Shukla, \nPranav Shirole, Rushikesh Khedekar",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Winners of Smart India Hackathon organized by Ministry of Education, AICTE, New Delhi",
    "date": "12th December 2024"
  },
  {
    "id": 0,
    "name": "Tulshidas Mane",
    "class": "Ph.D",
    "achievement": "Academics",
    "awardDescription": "Finalists of 19th Aavishkar: Inter-Collegiate / Institute / Department Research Convention organized by Mumbai University",
    "date": "15th December 2024"
  },
  {
    "id": 0,
    "name": "Sejal Kadam",
    "class": "Ph.D",
    "achievement": "Academics",
    "awardDescription": "Finalists of 19th Aavishkar: Inter-Collegiate / Institute / Department Research Convention organized by Mumbai University",
    "date": "15th December 2024"
  },
  {
    "id": 0,
    "name": "Suyog Repal",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Secured 3rd position in National Level Online Quiz competition organized by Department of Mathematics, Deogiri College Sambhajinagar",
    "date": "22nd December 2024"
  },
  {
    "id": 0,
    "name": "Akshat Ambastha, Bhavik Desai, Anuj Gite",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Winners of Finanza'25 - Valuation Case Competition organized by IIM Lucknow",
    "date": "7th January 2025"
  },
  {
    "id": 0,
    "name": "Bhavik Desai, Vishwaraj Sharma",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "2nd Runner-up of Stock and roll valuation Case Study Competition organized by SPJIMR, Mumbai",
    "date": "25th January 2025"
  },
  {
    "id": 0,
    "name": "Bhavik Desai, Abhigyan Jha, Vinay Gupta",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "National Finalist of Finvisor-Case Study Competition organized by SPJIMR, Mumbai",
    "date": "26th January 2025"
  },
  {
    "id": 0,
    "name": "Bhavik Desai, Vishwaraj Sharma",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "National Finalist of Consultomania- Case Competition organized by SPJIMR, Mumbai",
    "date": "26th January 2025"
  },
  {
    "id": 0,
    "name": "Achintya Chavan, Harsh Chhallani",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Finalist of K! Hacks 2.0 hackathon organized by CEG, Anna University, Chennai",
    "date": "1st February 2025"
  },
  {
    "id": 0,
    "name": "Sudhanshu Pandey, Shashvat Sangle, Soumorup Chakrabarti, Shivam Singh",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "National Finalist in NES 2025: NIT Rourkela E-Summit Case Study Competition organized by NIT, Rourkela",
    "date": "4th February 2025"
  },
  {
    "id": 0,
    "name": "Aparna Jha",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Winner of Cosmic Quest- The Ultimate Case Study Challenge competition organized by SPIT, Mumbai",
    "date": "17th February 2025"
  },
  {
    "id": 0,
    "name": "Arushi Tiwari, Hridaya Vashishtha, Abeer Sane",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Winner of Kaleidoscope 2025 - Case Study Competition organized by SIMS, Pune",
    "date": "23rd February 2025"
  },
  {
    "id": 0,
    "name": "Shweta Shinde, Uday Yeshi, Chinmay Thakur",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Winner of Bugbuster 2.0 National Level Hardware Hackathon organized by IETE SPIT, Mumbai",
    "date": "23rd February 2025"
  },
  {
    "id": 0,
    "name": "Ishaan Gawde, Anuj Gite, Vedanth Dhagay",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Secured 2nd position in Bugbuster 2.0 National Level Hardware Hackathon organized by IETE SPIT, Mumbai",
    "date": "23rd February 2025"
  },
  {
    "id": 0,
    "name": "Om Rane, Sudiksha Sawant, Sneha Jino",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "National Finalist in Bugbuster 2.0 National Level Hardware Hackathon organized by IETE SPIT, Mumbai",
    "date": "23rd February 2025"
  },
  {
    "id": 0,
    "name": "Pulkit Gupta, Aditi Rao",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Winners of Best Paper in the session of the 7th IEEE International Conference on \"Emerging Smart Computing & Informatics (ESCI-2025)\" sponsored by IEEE Pune chapter, IEEE signal processing Pune chapter, , San Diego State University and organized by AISSMS Institute of Information Technology, Pune",
    "date": "7th March 2025"
  },
  {
    "id": 0,
    "name": "Arushi Tiwari",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Winner of problem statement competition of Blossom, Bubbles & Bytes Women-Only Frontend Hackathon organized by WIE IEEE SPIT Mumbai",
    "date": "8th March 2025"
  },
  {
    "id": 0,
    "name": "Om Rane, Sudiksha Sawant, Tejas Prakash Rupwate",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "National Finalist of Ideathon 3.0 - National Level Conference for Ideation and Entrepreneurship with NSS organized by SNDT, Mumbai",
    "date": "8th March 2025"
  },
  {
    "id": 0,
    "name": "Aditi Rao",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Finalist of Google Girl Hackathon organized by Google Inc., Bengaluru",
    "date": "11th March 2025"
  },
  {
    "id": 0,
    "name": "Niraj Mahajan, Anurag Bagal, Shreerang Shukla, Kartik Rane",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Finalist of WCE Hackathon 2025 organized by Walchand College of Engineering (WCE), Sangli",
    "date": "15th March 2025"
  },
  {
    "id": 0,
    "name": "Bhavik Desai, Abhigyan Jha, Gargi Dhulekar",
    "class": "S.Y",
    "achievement": "Academic",
    "awardDescription": "Winner of National Case Study: SPIT organized by SPIT ECell, Mumbai",
    "date": "16th March 2025"
  },
  {
    "id": 0,
    "name": "Himanshu Agrawal, Ganesh Kakade, Nakshatra Chandgothia",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Winners of Merge Mania: Case Study Competition organized by Sardar Patel Institute of Technology, Mumbai",
    "date": "16th March 2025"
  },
  {
    "id": 0,
    "name": "Achintya Chavan, Harsh Chhallani",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Finalist (Top 11 in India) in EY Techathon 5.0 hackathon organized by EY - Ernst & Young, Bangalore",
    "date": "17th March 2025"
  },
  {
    "id": 0,
    "name": "Muhammad Adil Bankar",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Secured 3rd position in CodeAstra Hackathon organized by Rajiv Gandhi Institute of Technology, Mumbai",
    "date": "19th March 2025"
  },
  {
    "id": 0,
    "name": "Saloni Zargad, Kashish Suvarna, Vishakha Lade, Dishita Jain, Pragati More",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Secured 1st Position in Idea Presentation (Shark Tank) organized by Technical and Applied Chemistry Department, Veermata Jijabai Technological Institute, Mumbai",
    "date": "22nd March 2025"
  },
  {
    "id": 0,
    "name": "Manaswi Rajput, Urja Saha, Ibrahim Ganijee, Rohan Pawar",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Winner in AlgoForge 25: Hackathon competition organized by KJ Somaiya Institute of Technology, Mumbai",
    "date": "23rd March 2025"
  },
  {
    "id": 0,
    "name": "Sudhanshu Pandey, Shashvat Sangle, Soumorup Chakrabarti",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "National Finalist in Inceptio 8.0 Marketing Challenge Competition, MPSTME NMIMS, Mumbai",
    "date": "26th March 2025"
  },
  {
    "id": 0,
    "name": "Muhammad Adil Bankar",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Domain (AI for social cause) Winners of Airavat 2.0 hackathon organized by Sardar Patel Institute of Technology, Mumbai",
    "date": "13th April 2025"
  },
  {
    "id": 0,
    "name": "Achintya Chavan, Harsh Chhallani, Manan Andraskar",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Finalist of Airavat 2.0 hackathon organized by Sardar Patel Institute of Technology, Mumbai",
    "date": "13th April 2025"
  },
  {
    "id": 0,
    "name": "Achintya Chavan, Soham Gondhalekar, Vardhan Joshi",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Winner of Prakalp 3.0 organized by Fr. Conceicao Rodrigues Institute of Technology, Mumbai",
    "date": "19th April 2025"
  },
  {
    "id": 0,
    "name": "Prathmesh Mane",
    "class": "T.Y",
    "achievement": "Academic",
    "awardDescription": "Winner of S.P.I.T The Exponential Award for demonstrating exceptional personal and academic growth, perseverance through challenges and an inspiring commitment to continuous self- improvement",
    "date": "24th April 2025"
  },
  {
    "id": 0,
    "name": "Omkar Lokre, Tejas Kamble, Sarthak Kasture",
    "class": "B.E",
    "achievement": "Academic",
    "awardDescription": "Winner of Best Hardware Project Award at S.P.I.T in academic year 2024-25 for project entitled \"Water Trash Collector\"",
    "date": "24th April 2025"
  }
];

export default studentsData;
