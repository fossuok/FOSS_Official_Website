import { EventCardProps } from "./EventCardProp";

const imgUrl = process.env.NEXT_PUBLIC_CDN;

// !! Add new entries to top
export const eventsData: EventCardProps[] = [
  //AGM 25
  {
    id: 23,
    title: "FOSS AGM 25/26",
    register: "https://forms.gle/vtyp9dAS8hSuhJ896",
    open: true,
    record: false,
    date: "September 20",
    year: "2025",
    description: [
      "Join Us for FOSSUOK Annual General Meeting 2025!. A gathering of innovators, learners, and open-source enthusiasts 💚.",
      "This AGM is open to all undergraduates from UOK  who are passionate about Free and Open Source Software (FOSS) and wish to actively contribute to the community.",
      "📌 Please fill in your details accurately to confirm your participation.",
    ],
    imageUrl: {
      src: `${imgUrl}/images/images/events/agm25.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "FOSS Community",
        role: " ",
        alt: "FOSS Community",
        src: `${imgUrl}/images/images/FOSSsm.webp`,
      },
    ],
    tags: ["AGM 25/26", "New Board Announcement"],
    contents: {
      weekday: "Saturday",
      timerange: "9.00 am - 10.00 am",
      location: "ACB 9-1, FCT, University of Kelaniya",
      // update
      agenda: [
        "9.00 am - Addressing the Attendees",
        "9.02 am - Welcome Speech",
        "9.07 am - Presentation of Annual Minutes",
        "9.15 am - Introduction to FOSS Community, Summary of Events & Achievements from Previous Term",
        "9.25 am - Annual Budget Report for Previous Term",
        "9.35 am - Senior Treasurer’s Speech",
        "9.40 am - Community Constitution Amendments",
        "9.45 am - Introducing the Upcoming President & their Speech",
        "9.55 am - Introduction of Upcoming Board of Officers",
        "10.05 am - Vote of Thanks",
        "10.10 am - Conclusion of the AGM",
      ],
    },
  },
  //linux event series
  {
    id: 22,
    title: "ADVANCED LINUX PROGRAM: FROM FUNDAMENTALS TO LINUX MASTERY",
    register: "https://forms.gle/vMXExYepnnHiJD6Y8",
    open: false,
    record: false,
    date: "July 17",
    year: "2025",
    description: [
      "This hands-on course is designed for anyone who wants to master Linux from the ground up. It covers everything from the fundamentals to advanced system administration, shell scripting, and real-world server management.",
      "🚨 Eligibility: ",
      "Open to both University of Kelaniya and non-UOK students. Seats are limited and Participants will be selected through a short entrance exam to assess your basic technical knowledge and interest.",
      "100 selectees who perform well in the selection process will have the opportunity to attend physical sessions and receive a certificate, provided they maintain good attendance.",
      "Access to online sessions will be given to the 100 selectees and to other participants who correctly followed through all the requirments",
      "📢 Thank you for the overwhelming responses! Registration for the FOSSUOK Advanced Linux Program is officially closed.",
    ],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev22.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Nuwan Kaushalya",
        role: "Lead Engineer • Technical Support at Persistent Systems",
        alt: "Nuwan Kaushalya",
        src: `${imgUrl}/images/summit25/speaker/nuwan.webp`,
      },
    ],
    tags: ["Linux", "8 Sessions", "Hybrid"],
    contents: {
      weekday: "Saturdays (dates will be announced soon)",
      timerange: "8 Sessions | 3Hr Per Day (2 months)",
      location: "FCT Academic Building, University of Kelaniya",
      // update
      agenda: [
        "Registration Opened - July 16",
        "Registration Closed - July 17",
        "Entrance Exam - Concluded",
        "1st Session - Will Announce Soon",
        "More Details at - https://docs.google.com/document/d/1FSJ7J1mXTlPrYIEYE1VvhRoE4hd13_WT0o3aBjnSU34/edit?usp=sharing",
      ],
    },
  },

  //term2-summit
  {
    id: 21,
    title: "Open Dev Summit '25 Event Finale",
    register: "https://forms.gle/a9cPMG7HZUDFwibUA",
    open: false,
    record: false,
    date: "May 24",
    year: "2025",
    description: [
      "Join us for an exciting day of learning and networking with industry experts and fellow developers. Don't miss out on this opportunity to enhance your skills and knowledge in the world of open-source development. Be sure to register for a smooth experience!",
    ],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ods25.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Nikila Fernando",
        role: "DevOps Engineer at Fortude",
        alt: "Nikila",
        src: `${imgUrl}/images/summit25/speaker/nikila.webp`,
      },
      {
        name: "Joy Rathnayake",
        role: "Associate Director/Solutions Architect at WSO2",
        alt: "joy",
        src: `${imgUrl}/images/summit25/speaker/joy.webp`,
      },
      {
        name: "Buddima Udaranga",
        role: "Lead platform engineer at Codification",
        alt: "buddima",
        src: `${imgUrl}/images/summit25/speaker/buddima.webp`,
      },
      {
        name: "Asma Muzammil",
        role: "QA Lead at Code94 Labs",
        alt: "Asma",
        src: `${imgUrl}/images/summit25/speaker/asma.webp`,
      },
    ],
    tags: ["ODS25"],
    contents: {
      weekday: "Saturday",
      timerange: "4 Insightful Sessions   (8.30 AM - 1.30 PM)",
      location: "FCT Academic Building, University of Kelaniya",
      // update
      agenda: [
        "08.30 AM -  Registration Starts",
        "09.00 AM -  Opening Ceremony",
        "09.15 AM -  Speaker 1: Kubernetes 101 - Navigating the World of Containers",
        "10.00 AM -  Speaker 2: Modernizing Application Authentication and Authorization using IAM",
        "10.45 AM -  Interval (15 min)",
        "11.00 AM -  Speaker 3: Introduction to Crossplane",
        "11.45 AM -  Speaker 4: Quality is Everyone's Business - Embracing a QA-First Mindset",
        "01.30 PM -  End of Summit",
      ],
    },
  },

  //ods workshop 6
  {
    id: 20,
    title:
      "Session 2: Building Transparent LLM Applications: A Guide to Monitoring and Observability",
    register: "https://forms.gle/1NvAhWzRQ1Xwjvts5",
    open: false,
    record: false,
    date: "May 17",
    year: "2025",
    description: [
      "Explore how to build reliable and explainable AI systems, focusing on transparency and monitoring for LLM-based applications.",
    ],
    imageUrl: {
      src: `${imgUrl}/images/summit25/event6.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Pasan Devin Jayawardene",
        role: "Software Engineer - AI/R&D at Insighture",
        alt: "Pasan",
        src: `${imgUrl}/images/summit25/speaker/pasan.webp`,
      },
    ],
    tags: ["ODS25", "Workshop-6"],
    contents: {
      weekday: "Saturday",
      timerange: "10.30 AM",
      location: "Academic Building-Scaled-08-1, FCT, University of Kelaniya",
      agenda: ["Workshop 6 (May 17)"],
    },
  },
  //ods workshop 5
  {
    id: 19,
    title: "Session 1: Infrastructure Automation with Terraform",
    register: "https://forms.gle/1NvAhWzRQ1Xwjvts5",
    open: false,
    record: false,
    date: "May 17",
    year: "2025",
    description: [
      "Learn the fundamentals of Terraform, including writing configuration files and deploying infrastructure on leading cloud platforms — all in a hands-on environment!",
    ],
    imageUrl: {
      src: `${imgUrl}/images/summit25/event5.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Sachithra Manamperi",
        role: "DevOps Engineer at Insighture",
        alt: "Sachithra",
        src: `${imgUrl}/images/summit25/speaker/sachithra.webp`,
      },
    ],
    tags: ["ODS25", "Workshop-5"],
    contents: {
      weekday: "Saturday",
      timerange: "9.00 AM",
      location: "Academic Building-Scaled-08-1, FCT, University of Kelaniya",
      agenda: ["Workshop 5 (May 17)"],
    },
  },

  //ods workshop 4
  {
    id: 18,
    title:
      "Micro-frontend Architecture to Mobile Applications (Android and IOS)",
    register: "https://forms.gle/EJ6TB7yi4aeS5gUP9",
    open: false,
    record: false,
    date: "May 10",
    year: "2025",
    description: [
      "Join us for an exciting session with Kavimal Wijewardana, Associate Architect - Mobile at Virtusa Corp., as he delves into Micro-Frontend Architecture for Mobile Applications (Android & iOS). Gain insights into building scalable, maintainable, and modular mobile applications!",
    ],
    imageUrl: {
      src: `${imgUrl}/images/summit25/event4.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Kavimal Wijewardana",
        role: "Associate Architect-Mobile at Virtusa Corp.",
        alt: "Kavimal",
        src: `${imgUrl}/images/summit25/speaker/kavimal.webp`,
      },
    ],
    tags: ["ODS25", "Workshop-4"],
    contents: {
      weekday: "Saturday",
      timerange: "8.00 AM onwards",
      location: "via Zoom",
      agenda: [
        "Workshop 4 (May 10)",
        "Zoom Link available after registration process",
      ],
    },
  },
  //ods workshop 3
  {
    id: 17,
    title: "ODS25 - Building Modern Web Apps with .NET & Open Source Tools",
    register: "https://forms.gle/xZLvP1D8kwBmTbAZ7",
    open: false,
    record: false,
    date: "May 06",
    year: "2025",
    description: [
      "Think Like a Web App Engineer! 💻 Join us for an exclusive session on Building Scalable & Efficient Web Apps with .NET & Open Source Tools, led by Hansamali Gamage, Senior Developer at NEXT. ",
    ],
    imageUrl: {
      src: `${imgUrl}/images/summit25/event3.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Hansamali Gamage",
        role: "Senior Developer at NEXT",
        alt: "Hansamali",
        src: `${imgUrl}/images/summit25/speaker/hansamali.webp`,
      },
    ],
    tags: ["ODS25", "Workshop-3"],
    contents: {
      weekday: "Tuesday",
      timerange: "6:00 PM onwards ",
      location: "via Zoom",
      agenda: ["Workshop 3 (May 06)"],
    },
  },

  //ods workshop 2
  {
    id: 16,
    title: "ODS25 - Explore Big Data & AI with FOSS Tools!",
    register: "https://www.youtube.com/watch?v=IXItNYTiGBA&feature=youtu.be",
    open: true,
    record: true,
    date: "May 03",
    year: "2025",
    description: [
      "Join our insightful session with Anjana Dodampe, Senior Software Engineer at London Stock Exchange Group, and discover how FOSS tools are revolutionizing the world of Big Data & AI.",
    ],
    imageUrl: {
      src: `${imgUrl}/images/summit25/event2.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Anjana Dodampe",
        role: "Senior Software Engineer at London Stock Exchange Group",
        alt: "",
        src: `${imgUrl}/images/summit25/speaker/anjana.webp`,
      },
    ],
    tags: ["ODS25", "Workshop-2"],
    contents: {
      weekday: "Saturday",
      timerange: "9:00 AM - 11:00 AM",
      location: "FCT, University of Kelaniya",
      agenda: ["Workshop 2 (May 03)"],
    },
  },
  //ods workshop 1
  {
    id: 15,
    title: "ODS25 - Linux Fundamentals",
    register: "https://forms.gle/jfL871BeGAqZ4hMc9",
    open: false,
    record: false,
    date: "April 26",
    year: "2025",
    description: [
      "Master the Basics of Linux! 💻 Join our hands-on Linux Fundamentals workshop with Nuwan Kaushalya, Lead Engineer at Persistent Systems. Perfect for beginners or anyone looking to sharpen their Linux skills, learn core concepts and best practices in one session!",
    ],
    imageUrl: {
      src: `${imgUrl}/images/summit25/event1.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Nuwan Kaushalya",
        role: "Lead Engineer • Technical Support at Persistent Systems",
        alt: "Nuwan Kaushalya",
        src: `${imgUrl}/images/summit25/speaker/nuwan.webp`,
      },
    ],
    tags: ["ODS25", "Workshop-1", "Linux"],
    contents: {
      weekday: "Saturday",
      timerange: "9:00 AM - 12:00 PM",
      location: "FCT, University of Kelaniya",
      agenda: ["Workshop 1 (April 26)"],
    },
  },

  //term2
  {
    id: 14,
    title: "HOW TO THINK IN AWS",
    register: "https://youtu.be/yRfED6lBLUE?si=GbNgBUt2zvYMGPNQ",
    open: true,
    record: true,
    date: "Mar 01",
    year: "2025",
    description: [
      "Learn about ARCHITECTING SCALABLE & COST EFFECTIVE SOLUTIONS.",
    ],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev14.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "DILIRU MUNASINGHA",
        role: "SENIOR SOFTWARE ENGINEER ASCENTIC",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/diliru.webp`,
      },
    ],
    tags: ["AWS", "Cloud"],
    contents: {
      weekday: "Saturday",
      timerange: "7:00 PM - 8:00 PM",
      location: "via Zoom",
      agenda: [""],
    },
  },
  //term2-ev13
  {
    id: 13,
    title: "GITHUB ADVANCED SECURITY",
    register: "https://youtu.be/ysGROuLivv0",
    open: true,
    record: true,
    date: "Feb 08",
    year: "2025",
    description: ["Learn about PROTECTING REPOSITORIES AND WORKFLOWS."],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev13.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Madusha Sandaruwan",
        role: "IT INTERN, PERITUZA LANKA (PVT) LTD.",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/madusha.webp`,
      },
    ],
    tags: ["GitHub", "Security"],
    contents: {
      weekday: "Saturday",
      timerange: "7:00 PM - 8:30 PM",
      location: "via Zoom",
      agenda: [""],
    },
  },
  //term2-ev12
  {
    id: 12,
    title: "GIT STARTED: MASTER GIT & GITHUB",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "DEC 03",
    year: "2024",
    description: [
      "Introduction to Git , Github and setting up github student developer pack.",
    ],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev12.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Pawan Perera",
        role: "FOSS COMMUNITY UNIVERSITY OF KELANIYA",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/pawan.webp`,
      },
      {
        name: "Saroath Farvees",
        role: "FOSS COMMUNITY UNIVERSITY OF KELANIYA",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/farvees.webp`,
      },
    ],
    tags: ["GitHub", "Developer Pack"],
    contents: {
      weekday: "Saturday",
      timerange: "3:00 PM - 5:00 PM",
      location: "Faculty of Computing and Technology, University of Kelaniya",
      agenda: [
        "Introduction to Git ",
        "Introduction to Github",
        "Setting up github student developer pack.",
        "Q&A session with the speakers",
      ],
    },
  },
  // post-summit'24
  {
    id: 11,
    title: "Post Summit Meetup 2024",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "October 09",
    year: "2024",
    description: [
      "Post-Summit Meetup for Open-Source Summit ‘24, happening at the WSO2 Office, Colombo 4.",
    ],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev11.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Joy Rathnayake",
        role: "Solutions Architect @ WSO2",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/joy.webp`,
      },
      {
        name: "Vivekvinushanth Christopher",
        role: "Senior Software Engineer @ WSO2",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/christopher.webp`,
      },
    ],
    tags: ["api management", "iam"],
    contents: {
      weekday: "Saturday",
      timerange: "1:00 PM - 5:00 PM",
      location: "Faculty of Computing and Technology, University of Kelaniya",
      agenda: [
        "Welcome and Introduction",
        "What every developer should know about API management",
        "Re-define Your Application User Management, Login, and Registration with Open-Source IAM",
        "Q&A session with the speakers",
      ],
    },
  },
  //summit24
  {
    id: 10,
    title: "Open-Source Summit 2024",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "April 27",
    year: "2024",
    description: [
      "Across six intensive days, Open-Source Summit '24 offered a unique learning experience for undergraduate students. From March 16th to April 6th, participants honed their skills through hands-on workshops and in-depth learning sessions.\n The culmination arrives on April 27th with a dedicated developer summit. This comprehensive program aimed to empower undergraduates with the technical knowledge, practical abilities, and connections needed to thrive in the open-source technology community.",
    ],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev10.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "8 Speakers",
        role: "Industry Guest Speakers",
        alt: "speaker",
        src: `${imgUrl}/images/images/FOSSsm.webp`,
      },
    ],
    tags: ["OSS24", "Summit", "8 Hr+"],
    contents: {
      weekday: "Saturday",
      timerange: "9:00 AM - 5:00 PM",
      location: "Faculty of Computing and Technology, University of Kelaniya",
      agenda: [
        "Welcome and Introduction",
        "Open Source to Stand Out in the Job Market",
        "Exploring the Impact of Open Source Methods on AI Advancement",
        "Learn Linux and Make it Secure",
        "Contributing to Open Source Software",
        "Women Leadership & Entrepreneurship",
        "Navigating the Landscape of LLMs",
        "CI/CD: Streamlining Delivery of Code to Production",
        "AI Decoded: Navigating the Start-line",
      ],
    },
  },
  // pre-summit'24 workshop 06
  {
    id: 9,
    title: "Enhancing Software Security",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "April 06",
    year: "2024",
    description: ["Integrating DevSecOps into the SDLC for Robust Protection"],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev9.webp`,
      height: 10,
      width: 0,
    },
    speakers: [
      {
        name: "Tharaka Mahabage",
        role: "CyberSecurity Architect @ Virtusaa",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/tharaka.webp`,
      },
    ],
    tags: ["oss24", "cybersecurity"],
    contents: {
      weekday: "Saturday",
      timerange: "9:00 AM - 11:00 AM",
      location: "Faculty of Computing and Technology, University of Kelaniya",
      agenda: [
        "Introduction to DevSecOps",
        "Setting up your development environment",
        "Integrating security into the SDLC",
        "Q&A session with the speakers",
      ],
    },
  },
  // pre-summit'2Multilingual NLP4 workshop 05
  {
    id: 8,
    title: "Breaking the Language Barrier",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "March 30",
    year: "2024",
    description: ["Exploring Multilingual Natural Language Processing."],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev8.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Meesha Mervyn",
        role: "Demonstrator @ University of Kelaniya",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/meesha.webp`,
      },
    ],
    tags: ["oss24", "nlp"],
    contents: {
      weekday: "Saturday",
      timerange: "9:00 AM - 11:00 AM",
      location: "Online",
      agenda: [
        "Introduction to Natural Language Processing",
        "Multilingual NLP",
        "Q&A session with the speakers",
      ],
    },
  },
  // pre-summit'24 workshop 04
  {
    id: 7,
    title: "Building Automated Workflows with GitHub Actions",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "March 23",
    year: "2024",
    description: ["How to build automated workflows with GitHub Actions. "],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev7.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Suvin Kodithuwakku",
        role: "Software Engineer @ WSO2",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/suvin.webp`,
      },
    ],
    tags: ["oss24", "github actions"],
    contents: {
      weekday: "Saturday",
      timerange: "9:00 AM - 11:00 AM",
      location: "Faculty of Computing and Technology, University of Kelaniya",
      agenda: [
        "Introduction to GitHub Actions",
        "Setting up your development environment",
        "Building your first automated workflow",
        "Q&A session with the speakers",
      ],
    },
  },
  // pre-summit'24 workshop 03
  {
    id: 6,
    title: "DevOps 101: Bridging Development and Operations",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "March 16",
    year: "2024",
    description: ["DevOps basics and building your first CI/CD pipeline."],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev6.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Nikila Fernando",
        role: "Site Reliability Engineer @ Fortude",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/nikila.webp`,
      },
      {
        name: "Krishan Shamod",
        role: "DevOps Engineer @ Insighture",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/krishan.webp`,
      },
    ],
    tags: ["oss24", "devops"],
    contents: {
      weekday: "Saturday",
      timerange: "9:00 AM - 10:30 AM",
      location: "Faculty of Computing and Technology, University of Kelaniya",
      agenda: [
        "Introduction to DevOps",
        "Setting up your development environment",
        "Building your first CI/CD pipeline",
        "Q&A session with the speakers",
        "Networking opportunity",
      ],
    },
  },
  // pre-summit'24 workshop 02
  {
    id: 5,
    title: "Docker for Beginners: Hands-On Workshop",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "March 16",
    year: "2024",
    description: [
      "Workshop on Docker basics and get started with containerization.",
    ],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev5.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Pasan Devin",
        role: "Former Assiciate Software Engineer @ TechVenturas",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/pasan.webp`,
      },
      {
        name: "Sachithra Manamperi",
        role: "Associate Cloud Security Engineer @ GTN",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/sachithra.webp`,
      },
    ],
    tags: ["oss24", "docker"],
    contents: {
      weekday: "Saturday",
      timerange: "10:30 AM - 12:00 PM",
      location: "Faculty of Computing and Technology, University of Kelaniya",
      agenda: [
        "Introduction to Docker",
        "Setting up your development environment",
        "Building your first container",
        "Q&A session with the speakers",
      ],
    },
  },
  // pre-summit'24 workshop 01
  {
    id: 4,
    title: "Unlocking Human Behavior",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "March 16",
    year: "2024",
    description: ["Insights from Telco Data & Crowd Analytics."],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev4.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Aloka Abeysirigunawardana",
        role: "Senior Data Scientist @ Dialog Axiata PLC",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/aloka.webp`,
      },
    ],
    tags: ["oss24", "Data Science"],
    contents: {
      weekday: "Saturday",
      timerange: "1:00 PM - 3:00 PM",
      location: "Faculty of Computing and Technology, University of Kelaniya",
      agenda: [
        "Introduction to Data Science",
        "Modern tools & Techniques of data science",
        "Telco Data & Crowd Analytics",
        "Q&A session with the speakers    ",
      ],
    },
  },
  // Event 3
  {
    id: 3,
    title: "Streamline Your Git Workflow",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "FEB 27",
    year: "2024",
    description: [" Mastering Git is essential for any developer. "],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev3.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Madusha Sandaruwan",
        role: "Community Lead @ FOSS Community",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/madusha.webp`,
      },
    ],
    tags: ["git", "GitHub", "Workshop"],
    contents: {
      weekday: "Tuesday",
      timerange: "8:00 PM - 10:00 PM",
      location: "Online",
      agenda: [
        "Introduction to GitHub",
        "Q&A Session with the speakers",
        "Streamlining your Git workflow",
      ],
    },
  },
  // Event 2
  {
    id: 2,
    title: "Webdev 101",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: " DEC 21",
    year: "2023",
    description: ["We look forward to seeing you there!"],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev2.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Tharindu Damruwan",
        role: "Organizer @ FOSS Community",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/tharindu.webp`,
      },
      {
        name: "Pethum Jeewantha",
        role: "Organizer @ FOSS Community",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/pethum-jeewantha.avif`,
      },
    ],
    tags: ["Web Development", "Workshop"],
    contents: {
      weekday: "Thursday",
      timerange: "3:00 PM - 5:00 PM",
      location: "Faculty of Computing and Technology, University of Kelaniya",
      agenda: [
        "Introduction to web development",
        "Setting up your development environment",
        "Building your first website",
        "Q&A session with the speakers",
        "Networking opportunity",
      ],
    },
  },
  // Event 1
  {
    id: 1,
    title: "Hello FOSS",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "NOV 30",
    year: "2023",
    description: ["We look forward to seeing you there!"],
    imageUrl: {
      src: `${imgUrl}/images/images/events/ev1.webp`,
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Sudaraka Senavirathna",
        role: "Community Lead @ FOSS.LK",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/sudaraka.webp`,
      },
      {
        name: "Chethana Wickrama Arachchi",
        role: "Lead @ Women in FOSS.LK",
        alt: "speaker",
        src: `${imgUrl}/images/speakers/chethana.webp`,
      },
    ],
    tags: ["FOSS", "Webinar"],
    contents: {
      weekday: "Thursday",
      timerange: "7:00 PM - 9:00 PM",
      location: "Online",
      agenda: [
        "01:00 PM - Welcome and Introduction",
        "01:30 PM - What Every Developer Should Know About API Management",
        "03:00 PM - Re-define Your Application User Management, Login, and Registration with Open-Source IAM",
        "04:30 PM - Refreshments and Networking",
        "05:00 PM - Conclusions",
      ],
    },
  },
];
