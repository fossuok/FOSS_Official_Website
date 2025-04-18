import { Avatar, Paper, Text } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";
import classes from "../css/Cards.module.css";
import Link from "next/link";
interface SpeakerCardProps {
  fname: string;
  lname: string;
  position: string;
  company: string;
  linkedin: string;
  picture: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  fname,
  lname,
  position,
  company,
  linkedin,
  picture,
}) => {
  return (
    <Paper radius="xl" p="lg" bg="transparent">
      <Avatar src={picture} size={240} radius={30} mx="auto" />

      <Link href={linkedin} target="_blank" className={classes.Icon}>
        <IconBrandLinkedin size={30} />
      </Link>

      <Text pt={5} ta="left" fz="xl" fw={700}>
        {fname + " " + lname}
      </Text>
      <Text ta="left" fz="sm" maw={240}>
        {position} <br />
        {/* TODO: Remove ternary (fname checking for TBA) after all speakers are added. 
        Purpose of ternary is to remove 'at' between position and organization if speaker is empty. */}
        {(fname === "Coming Soon" ? "" : "at ") + company}
        {/* {"at " + company} */}
      </Text>
    </Paper>
  );
};

export default SpeakerCard;
