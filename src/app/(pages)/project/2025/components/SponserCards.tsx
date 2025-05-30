"use client";

import { Box, Title, Text, Paper, Image } from "@mantine/core";
import styles from "../css/Cards.module.css";
const imgUrl = process.env.NEXT_PUBLIC_CDN;
type CardProps = {
  title: string;
  content: string;
  type: 1 | 2 | 3; // Determines background gradient
};

type SponsorProps = {
  name: string;
  image: string;
  href: string;
  bgGradient: string;
};

const SponsorCard = ({ name, image, href, bgGradient }: SponsorProps) => (
  <Paper radius="xl" p="lg" bg="transparent">
    <Image radius="md" h={150} w={250} fit="contain" src={image} />
    <a
      href={href}
      target="_blank"
      className={styles.sponsorLink}
      onMouseEnter={(e) => (e.currentTarget.style.background = bgGradient)}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {name}
    </a>
  </Paper>
);

const sponsors = [
  {
    name: "FOSS Community UOK",
    image: `${imgUrl}/images/summit25/sponsor/foss.webp`,
    href: `https://fossuok.org/`,
    bgGradient: "linear-gradient(90deg, rgba(0,0,0,0.3), rgba(0,255,128,0.5))",
  },
  {
    name: "University of Kelaniya",
    image: `${imgUrl}/images/summit25/sponsor/uok.webp`,
    href: `https://www.kln.ac.lk/`,
    bgGradient: "linear-gradient(90deg, rgba(0,0,0,0.3), rgba(255,215,0,0.5))",
  },
  {
    name: "At FCT Premises",
    image: `${imgUrl}/images/summit25/sponsor/fct.webp`,
    href: `https://fct.kln.ac.lk/`,
    bgGradient: "linear-gradient(90deg, rgba(0,0,0,0.3), rgba(30,144,255,0.5))",
  },

  //{
  //   name: "Sponsor",
  //   image: `${imgUrl}/images/summit25/summit25.webp`,
  //   href: `${imgUrl}/assets/Sponsorship Proposal ODS25.pdf`,
  //   bgGradient: "linear-gradient(90deg, rgba(0,0,0,0.3), rgba(255,0,255,0.5))",
  // },

  {
    name: "Community Partner",
    image: `${imgUrl}/images/summit25/sponsor/cloud_native.webp`,
    href: `https://www.linkedin.com/company/cloudnativesl/`,
    bgGradient:
      "linear-gradient(90deg, rgba(0,0,0,0.3), rgba(255,255,255,0.1))",
  },
  {
    name: "Photography Partner",
    image: `${imgUrl}/images/summit25/sponsor/dicineverse.webp`,
    href: `https://www.facebook.com/dicineverse`,
    bgGradient:
      "linear-gradient(90deg, rgba(0,0,0,0.3), rgba(255,255,255,0.1))",
  },
];

const SponserCards = ({ cards }: { cards: CardProps[] }) => {
  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <Box key={index} className={styles.box} data-type={card.type}>
          <span></span>
          <Box w={"100%"} className={styles.content}>
            <Title fz={32}>{card.title}</Title>
            <Text pb={50}>{card.content}</Text>
          </Box>

          <Box className={styles.content}>
            {sponsors.map((sponsor, i) => (
              <SponsorCard key={i} {...sponsor} />
            ))}
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default SponserCards;
