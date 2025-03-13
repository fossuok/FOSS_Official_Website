import { StaticImageData } from "next/image";

export interface EventCardProps {
  id: number;
  title: string;
  date: string;
  year: string;
  description: string;
  imageUrl: StaticImageData;
  speakers: { name: string; alt: string; src: string }[];
  tags: string[];
}