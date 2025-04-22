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
  topic: "FOSS T-Shirts are Now Available!",
  image: {
    src: `${imgUrl}/images/images/advert/TshirtLong.webp`,
    height: 0,
    width: 0,
  },
  description:
    "Show off your passion for open source with our exclusive FOSS UOK T-Shirts designed with style, comfort, and pride in mind. Available in XS to XXL for just Rs. 1700/= 👕 Durable print and high quality materials + Premium feel and perfect fit. Only a limited stock available! 🎯 Don’t miss out, grab yours today!",
  weblink: "https://forms.gle/kNa3nd5gDf8mdA4d9",
  color: "green.6",
  size: "lg",
  glow: true,
  tag: "Limited",
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
