import { StaticImageData } from "next/image";
import addImage from "@/images/advert/FOSS.webp";
import { color } from "framer-motion";
const imgUrl = process.env.NEXT_PUBLIC_CDN;

export interface AdvertProps {
  data: {
    topic: string;
    image: StaticImageData;
    description: string;
    weblink: string;
    color: string;
    size: string;
    glow: boolean;
    tag?: string;
  };
}

export const advertData1 = {
  topic: "FOSS T-Shirts Coming Soon!",
  image: addImage,
  description: "Stay tuned for our upcoming FOSS T-Shirts!",
  weblink: "https://fossuok.org/",
  color: "blue",
  size: "lg",
  glow: true,
};
export const advertData2 = {
  topic: "Website FeedBack!",
  image: addImage,
  description:
    "Kindly provide your feedback/ ideas to improve/ issues or bugs you found on our website.",
  weblink:
    "https://docs.google.com/forms/d/e/1FAIpQLSd5ycoFVu_521c-qxWvg-ZxR21TRYC7tYEKcpDvv3_MLO--Bw/viewform?usp=preview",
  color: "teal",
  size: "md",
  glow: false,
  tag: "",
};
export const advertData3 = {
  topic: "Get Your FOSSUOK Notebook!",
  image: {
    src: `${imgUrl}/images/images/advert/Notebook.webp`,
    height: 0,
    width: 0,
  },
  description:
    "Created by our FOSS community at the University of Kelaniya, this notebook is designed for those who value both functionality and style. 🎯 Order Yours Today!",
  weblink: "https://forms.gle/BiFGwRWym7vkAYNMA",
  color: "teal",
  size: "md",
  glow: true,
  tag: "New",
};
