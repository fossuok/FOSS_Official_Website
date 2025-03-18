import { EventCardProps } from "./EventCardProp";

// !! Add new entries to top
export const eventsData: EventCardProps[] = [
  // post-summit'24
  {
    id: 10,
    title: "Post Summit Meetup 2024",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "October 09",
    year: "2024",
    description:
      "Post-Summit Meetup for Open-Source Summit ‘24, happening at the WSO2 Office, Colombo 4.",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/header.webp",
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Joy Rathnayake",
        role: "Solutions Architect @ WSO2",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/joy.jpg",
      },
      {
        name: "Vivekvinushanth Christopher",
        role: "Senior Software Engineer @ WSO2",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/christopher.jpg",
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
  // pre-summit'24 workshop 06
  {
    id: 9,
    title: "Enhancing Software Security",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "April 06",
    year: "2024",
    description: "Integrating DevSecOps into the SDLC for Robust Protection",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/workshop6.jpg",
      height: 10,
      width: 0,
    },
    speakers: [
      {
        name: "Tharaka Mahabage",
        role: "CyberSecurity Architect @ Virtusaa",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/tharaka.jpg",
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
    description: "Exploring Multilingual Natural Language Processing.",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/workshop5.jpg",
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Meesha Mervyn",
        role: "Demonstrator @ University of Kelaniya",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/meesha.jpg",
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
    description: "How to build automated workflows with GitHub Actions. ",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/workshop4.jpg",
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Suvin Kodithuwakku",
        role: "Software Engineer @ WSO2",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/suvin.jpg",
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
    description: "DevOps basics and building your first CI/CD pipeline.",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/workshop1.jpg",
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Nikila Fernando",
        role: "Site Reliability Engineer @ Fortude",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/nikila.jpg",
      },
      {
        name: "Krishan Shamod",
        role: "DevOps Engineer @ Insighture",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/krishan.jpg",
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
    description:
      "Workshop on Docker basics and get started with containerization.",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/workshop2.jpg",
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Pasan Devin",
        role: "Former Assiciate Software Engineer @ TechVenturas",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/pasan.jpg",
      },
      {
        name: "Sachithra Manamperi",
        role: "Associate Cloud Security Engineer @ GTN",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/sachithra.jpg",
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
    description: "Insights from Telco Data & Crowd Analytics.",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/workshop3.jpg",
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Aloka Abeysirigunawardana",
        role: "Senior Data Scientist @ Dialog Axiata PLC",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/aloka.jpg",
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
        "Q&A session with the speakers",
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
    description: " Mastering Git is essential for any developer. ",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/ev3.jpg",
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Madusha Sandaruwan",
        role: "Community Lead @ FOSS Community",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/madusha.jpeg",
      },
    ],
    tags: ["git", "GitHub", "Workshop"],
    contents: {
      weekday: "Tuesday",
      timerange: "8:00 PM - 10:00 PM",
      location: "Online",
      agenda: [
        "Introduction to GitHub",
        "Setting up your development environment with GitHub Codespaces",
        "Streamlining your Git workflow",
        "Q&A session with the speakers",
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
    description: "We look forward to seeing you there!",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/ev2.jpg",
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Tharindu Damruwan",
        role: "Organizer @ FOSS Community",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/tharindu.jpg",
      },
      {
        name: "Pethum Jeewantha",
        role: "Organizer @ FOSS Community",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/pethum-jeewantha.avif",
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
    description: "We look forward to seeing you there!",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/ev1.jpg",
      height: 0,
      width: 0,
    },
    speakers: [
      {
        name: "Sudaraka Senavirathna",
        role: "Community Lead @ FOSS.LK",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/sudaraka.jpg",
      },
      {
        name: "Chethana Wickrama Arachchi",
        role: "Lead @ Women in FOSS.LK",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/chethana.jpg",
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
