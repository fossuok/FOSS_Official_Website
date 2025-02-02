"use client";
import {
	Container,
	Text,
	Paper,
	Flex,
	Image,
	Box,
	Avatar,
	Badge,
	Title,
} from "@mantine/core";

interface SpeakerProps {
	src: string;
	alt: string;
	name: string;
}

const SpeakerCard = ({ src, alt, name }: SpeakerProps) => (
	<Box py="10">
		<Flex direction="row" align="center" gap="10">
			<Avatar src={src} alt={alt} />
			<Text fw={600}>{name}</Text>
		</Flex>
	</Box>
);

export function Section1() {
	return (
		<Container size={800} py="60">
			<Paper radius="5" shadow="xl" p="12" withBorder={true}>
				<Flex direction="row" gap="20">
					<Image
						w="240"
						fit="cover"
						src="https://fossuok.org/images/events/post_summit_meetup_24/header.jpg"
						alt="University of Kelaniya"
					/>
					<Flex direction="column" gap="10" mt="10">
						<Title order={2}>POST SUMMIT MEETUP</Title>
						<Text mb="20">
							Join Us for the Post-Summit Meetup on October 9th at
							WSO2!.
						</Text>

						<SpeakerCard
							name="Joy Rathnayake"
							alt="Joy Rathnayake"
							src="https://fossuok.org/images/events/speakers/joy.jpg"
						/>
						<SpeakerCard
							name="Vivekvinushanth Christopher"
							alt="Vivekvinushanth Christopher"
							src="https://fossuok.org/images/events/speakers/christopher.jpg"
						/>
						<Box py="20">
							<Flex direction="row" gap="10">
								<Badge
									styles={{
										root: {
											backgroundColor:
												"var(--mantine-primary-color-filled)",
											color: "#fff",
										},
									}}
								>
									IAM
								</Badge>
							</Flex>
						</Box>
					</Flex>
				</Flex>
			</Paper>
		</Container>
	);
}
