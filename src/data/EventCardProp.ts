import { StaticImageData } from "next/image";

export interface EventCardProps {
  id: number;
  title: string;
  register: string;
  open: boolean;
  record: boolean;
  date: string;
  year: string;
  description: string[];
  imageUrl: StaticImageData;
  speakers: { name: string; role: string; alt: string; src: string }[];
  tags: string[];
  contents: {
    weekday: string;
    timerange: string;
    location: string;
    agenda: string[];
  };
}
