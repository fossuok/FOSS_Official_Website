
import img1 from "@/images/events/header.webp"
import { EventCardProps } from "./EventCardProp";

export const pastData: EventCardProps[] = [
    {
      id: 1,
      title: "POST SUMMIT MEETUP",
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
      tags: ["IAM"],
    },
  ];