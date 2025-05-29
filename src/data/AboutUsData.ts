//need more improvements to content and styles
import { StaticImageData } from "next/image";
import team25 from "@/images/about/about-team25.webp";
import team24 from "@/images/about/about-team24.webp";

export const mockdata = {
  image: [team25, team24],
  title: "Empowering Students Through Open Source Innovation",
  organization: "FOSSUOK",
  mission: [
    "Learn: Equip students with the skills and knowledge to navigate and excel in the FOSS ecosystem.",
    "Collaborate: Foster a community where students can work together on impactful projects.",
    "Contribute: Encourage active participation in open-source projects to make a tangible difference in the tech world.",
  ],
  activities: [
    "Workshops: Hands-on sessions to learn and experiment with FOSS tools and technologies.",
    "Webinars: Expert-led discussions on the latest trends and best practices in open source.",
    "Summits: Annual events bringing together enthusiasts to share ideas and showcase projects.",
  ],
  goals: [
    "Educate: Spread awareness and understanding of the FOSS ecosystem.",
    "Empower: Enable students to contribute meaningfully to open-source projects and communities.",
  ],
  badges: [
    { emoji: "💻", label: "Learn" },
    { emoji: "🛠️", label: "Contribute" },
    { emoji: "🤝", label: "Collaborate" },
    { emoji: "🚀", label: "Innovate" },
    { emoji: "🎉", label: "Celebrate" },
  ],
};
