
import img1 from "@/images/events/header.webp"
import ev2 from "@/images/events/ev2.jpg"
import ev1 from "@/images/events/ev1.jpg"
import { EventCardProps } from "./EventCardProp";

export const pastData: EventCardProps[] = [
  {
      id: 15,
      title: "POST SUMMIT MEETUP",
      register:"https://fossuok.org/",
      open: false,
      record:false,
      date: "OCT 9",
      year: "2024",
      description: "Join Us for the Post-Summit Meetup on October 9th at WSO2!",
      imageUrl:img1,
      speakers: [
        {
          name: "Joy Rathnayake",
          alt: "Joy Rathnayake",
          src: "https://fossuok.org/images/events/speakers/joy.jpg",
        },
        {
          name: "Vivekvinushanth Christopher",
          alt: "Vivekvinushanth Christopher",
          src: "https://fossuok.org/images/events/speakers/christopher.jpg",
        },
      ],
      tags: ["11 AM"],
    },
    {
      id: 2,
      title: "WEBDEV 101",
      register:"https://fossuok.org/",
      open: false,
      record:false,
      date: "DEC 21",
      year: "2023",
      description: "Join us for a workshop on web development basics and get started with building your first website.",
      imageUrl:ev2,
      speakers: [
        {
          name: "Tharindu Damruwan",
          alt: "Tharindu Damruwan",
          src: "https://fossuok.sirv.com/members/pethum-jeewantha.jpeg",
        },
        {
          name: "Pethum Jeewantha",
          alt: "Pethum Jeewantha",
          src: "https://fossuok.sirv.com/members/pethum-jeewantha.jpeg",
        },
      ],
      tags: ["Web Development", "Workshop"],
    },
    {
      id: 1,
      title: "Hello FOSS",
      register:"https://fossuok.org/",
      open: false,
      record:false,
      date: "November 30",
      year: "2023",
      description: "Join us for an evening of networking and discussion on open-source software and what is happening in the world of FOSS.",
      imageUrl:ev1,
      speakers: [
        {
          name: "Sudaraka Senavirathna",
          alt: "Sudaraka Senavirathna",
          src: "https://fossuok.org/images/events/speakers/sudaraka.jpg",
        },
        {
          name: "Chethana Wickrama Arachchi",
          alt: "Chethana Wickrama Arachchi",
          src: "https://fossuok.org/images/events/speakers/chethana.jpg",
        },
      ],
      tags: ["7:00 PM - 9:00 PM", "Online"],
    },
  ];