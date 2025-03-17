import ev1 from "@/images/events/ev1.jpg";
import ev2 from "@/images/events/ev2.jpg";
import { EventCardProps } from "./EventCardProp";

// !! Add new entries to top
export const eventsData: EventCardProps[] = [
  // Event 3
  {
    id: 3,
    title: "Streamline Your Git Workflow",
    register: "https://fossuok.org/",
    open: false,
    record: false,
    date: "FEB 27",
    year: "2023",
    description: " Mastering Git is essential for any developer. ",
    imageUrl: {
      src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/events/ev3.jpg",
      height: 0,
      width: 0
    },
    speakers: [
      {
        name: "Madusha Sandaruwan",
        role: "Community Lead @ FOSS Community",
        alt: "speaker",
        src: "https://raw.githubusercontent.com/fossuok/resources/refs/heads/main/images/images/speakers/madusha.jpeg",
      },

    ],
    tags: ["git","GitHub", "Workshop"],
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
    imageUrl: ev2,
    speakers: [
      {
        name: "Tharindu Damruwan",
        role: "Organizer @ FOSS Community",
        alt: "speaker",
        src: "https://fossuok.org/images/events/speakers/tharindu-damruwan.jpg",
      },
      {
        name: "Pethum Jeewantha",
        role: "Organizer @ FOSS Community",
        alt: "speaker",
        src: "https://fossuok.sirv.com/members/pethum-jeewantha.jpeg",
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
    imageUrl: ev1,
    speakers: [
      {
        name: "Sudaraka Senavirathna",
        role: "Community Lead @ FOSS.LK",
        alt: "speaker",
        src: "https://fossuok.org/images/events/speakers/sudaraka.jpg",
      },
      {
        name: "Chethana Wickrama Arachchi",
        role: "Lead @ Women in FOSS.LK",
        alt: "speaker",
        src: "https://fossuok.org/images/events/speakers/chethana.jpg",
      },
    ],
    tags: ["FOSS", "Webinar",],
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
