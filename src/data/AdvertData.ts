import { StaticImageData } from "next/image";
import addImage from "@/images/advert/FOSS.webp";

export interface AdvertProps {
  data: {
    topic: string;
    image: StaticImageData;
    description: string;
    weblink: string;
  };
}

export const advertData1 = {
  topic: "FOSS T-Shirts Coming Soon!",
  image: addImage,
  description: "Stay tuned for our upcoming FOSS T-Shirts!",
  weblink: "https://fossuok.org/",
};
export const advertData2 = {
  topic: "Website FeedBack!",
  image: addImage,
  description:
    "Kindly provide your feedback/ ideas to improve/ issues or bugs you found on our website.",
  weblink:
    "https://docs.google.com/forms/d/e/1FAIpQLSd5ycoFVu_521c-qxWvg-ZxR21TRYC7tYEKcpDvv3_MLO--Bw/viewform?usp=preview",
};
