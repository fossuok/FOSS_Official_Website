import { StaticImageData } from "next/image";
import addImage from "@/images/advert/FOSS.png";

export interface AdvertProps {
  data: {
    topic: string;
    image: StaticImageData;
    description: string;
    weblink: string;
  };
}

export  const advertData = {
    topic: "FOSS T-Shirts Now Available!",
    image: addImage,
    description: "Imagine a world where code is shared freely, not locked away. That’s the essence of Open Source Software (FOSS) – a community where developers build, learn, and innovate together by sharing knowledge and creations.",
    weblink: "https://example.com/offer",
  };