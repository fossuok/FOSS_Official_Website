import img1 from "@/images/events/header.webp"
import { EventCardProps } from "./EventCardProp";

export const upcomingData: EventCardProps[] = [
      {
        id: 2,
        title: "POST SUMMIT MEETUP",
        register:"https://fossuok.org/",
        open: true,
        record:false,
        date: "OCT 10",
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
        tags: ["1.00 PM", "FCT"],
      },
    {
      id: 1,
      title: "POST SUMMIT MEETUP1",
      register:"https://fossuok.org/",
      open: true,
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
      tags: ["1.00 PM", "FCT"],
    },
  ];