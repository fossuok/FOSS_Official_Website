"use client";

import {
	Container,
	Box,
	Flex,
	Grid,
	Text,
	Card,
	Avatar,
	Stack,
	Button,
	Indicator,
	Tooltip,
	ActionIcon,
} from "@mantine/core";
import classes from "../../../events/[id]/page.module.css";
import { IconShare, IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { CopyButton } from "@mantine/core";
import { eventsData } from "../EventsData";

const agendaItems = [
	"08:30 AM - Opening Ceremony & Welcome Speech",
	"08:45 AM - Introduction to the FOSS Community and Developer Summit",
	"09:00 AM - Session 1: Ms. Gimhani Uthpala Kankanamge - Agile in Practice: How Software Is Built in the Real World",
	"10:30 AM - Session 2: Mr. Frank Cronemberg - Building Meaningful Academic Work: From Problem to Publication",
	"11:45 AM - Refreshment Break",
	"12:00 PM - Session 3: Mr. Nushan Vitharana - Business and Technology: The Role of a Business Analyst",
	"01:30 PM - Vote of Thanks",
];

export default function SummitPage() {
	const event = eventsData.find((entry) => entry.id === 20260620);

	if (!event) {
		return (
			<Container size={1200} py={50} px={20}>
				<Link href="/summit-26" className={classes.link}>
					👈 Summit Page
				</Link>
				<Text py={100} c="dimmed" size="lg" ta="center">
					Unfortunately, the summit details are not available.
				</Text>
			</Container>
		);
	}

	return (
		<Container size={1200} py={50} px={20}>
			<Link href="/summit-26" className={classes.link}>
				👈 Summit Page
			</Link>

			{/* Flyer image block will be added later. */}
			{/* <Box
				style={{
					position: "relative",
					width: "100%",
					height: "380px",
					borderRadius: "1rem",
					overflow: "hidden",
					margin: "30px 0",
				}}
			>
				<Image
					src={event.imageUrl.src}
					alt={event.title}
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
						filter: "blur(20px)",
						transform: "scale(1.1)",
					}}
					priority
				/>
				<Box
					style={{
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "min(100%, 370px)",
						aspectRatio: "1 / 1",
						position: "relative",
					}}
				>
					<Image
						src={event.imageUrl.src}
						alt={event.title}
						fill
						sizes="(max-width: 768px) 100vw, 370px"
						style={{ objectFit: "contain", borderRadius: "1rem" }}
					/>
				</Box>
			</Box> */}

			<h1 className={classes.title}>{event.title}</h1>

			<Box py="20">
				<Flex wrap="wrap" gap="20" align="center">
					<Indicator disabled={!event.open} color="red" processing>
						<Button
							radius={50}
							w={250}
							component="a"
							href={event.externalRegister ?? event.register}
							target={event.externalRegister ? "_blank" : "_self"}
							rel={
								event.externalRegister
									? "noopener noreferrer"
									: undefined
							}
							onClick={(e) => {
								if (!event.open) {
									e.preventDefault();
								}
							}}
						>
							Register | Google Form
						</Button>
					</Indicator>

					<CopyButton
						value={`https://fossuok.org/events/${event.id}`}
						timeout={2000}
					>
						{({ copied, copy }) => (
							<Tooltip
								bg="teal"
								color="white"
								label={copied ? "Link Copied" : "Share"}
								withArrow
								position="right"
							>
								<ActionIcon
									color={copied ? "teal" : "gray"}
									variant="subtle"
									onClick={copy}
								>
									{copied ? (
										<IconCheck size={16} />
									) : (
										<IconShare size={16} />
									)}
								</ActionIcon>
							</Tooltip>
						)}
					</CopyButton>
				</Flex>
			</Box>

			<Grid pt={40}>
				<Grid.Col span={{ base: 12, sm: 8 }}>
					<Card radius="md" bg="transparent">
						<h2>About the Event</h2>
						<Box h={2} bg="teal" mb={30} />
						<Stack>
							{event.description.map((desc, idx) => (
								<Text key={idx} className={classes.description}>
									{desc}
								</Text>
							))}
							<Text>
								<Text span fw={700}>
									Join WhatsApp Group :
								</Text>{" "}
								<Link
									href="https://chat.whatsapp.com/C4GD0UtGziWLwI1sZUPbkn"
									target="_blank"
								>
									https://chat.whatsapp.com/C4GD0UtGziWLwI1sZUPbkn
								</Link>
							</Text>
							<Text>
								<Text span fw={700}>
									Organized by: FOSS UOK Community
								</Text>
							</Text>
						</Stack>
					</Card>
				</Grid.Col>

				<Grid.Col span={{ base: 12, sm: 4 }}>
					<Card radius="md" bg="transparent">
						<h2>Speakers</h2>
						<Box h={2} bg="teal" mb={30} />
						{event.speakers.map((speaker, index) => (
							<Box key={speaker.name || index} py={10}>
								<Flex direction="row" align="center" gap="10">
									<Avatar
										size={50}
										src={speaker.src}
										alt={speaker.name}
									/>
									<div>
										<Text fw={600}>{speaker.name}</Text>
										<Text fz={14} fw={400}>
											{speaker.role}
										</Text>
									</div>
								</Flex>
							</Box>
						))}
					</Card>

					<Card radius="md" bg="transparent">
						<h2>Agenda</h2>
						<Box h={2} bg="teal" mb={30} />
						<Stack gap={12}>
							{agendaItems.map((agendaItem) => (
								<Box key={agendaItem}>
									<Text>{agendaItem}</Text>
								</Box>
							))}
						</Stack>
					</Card>
				</Grid.Col>
			</Grid>
		</Container>
	);
}
