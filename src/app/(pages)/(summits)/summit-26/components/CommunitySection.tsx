"use client";

import { Container, Text, Title, Button, Group, Paper } from "@mantine/core";

export default function CommunitySection() {
	return (
		<div style={{ paddingTop: 36, paddingBottom: 36 }}>
			<Container size={900}>
				<Title
					order={2}
					style={{ marginBottom: 12, textAlign: "center" }}
				>
					Join the Community
				</Title>

				<Text
					size="md"
					style={{ marginBottom: 12, textAlign: "center" }}
				>
					Connect with the Developer Summit community and get
					real-time updates.
				</Text>

				<Paper
					radius="md"
					shadow="sm"
					p="sm"
					style={{ textAlign: "center" }}
				>
					<Group
						align="center"
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							marginTop: "1rem",
						}}
					>
						<Button
							component="a"
							href="https://chat.whatsapp.com/C4GD0UtGziWLwI1sZUPbkn"
							target="_blank"
							rel="noopener noreferrer"
							color="green"
							radius="xl"
							style={{ minWidth: 220, whiteSpace: "nowrap" }}
						>
							Developer Summit '26 WhatsApp Group
						</Button>

						<Button
							component="a"
							href="https://whatsapp.com/channel/0029Va99Q394IBh7yTvh8Q1L"
							target="_blank"
							rel="noopener noreferrer"
							color="teal"
							radius="xl"
							style={{ minWidth: 220, whiteSpace: "nowrap" }}
						>
							FOSSUOK WhatsApp Channel
						</Button>
					</Group>

					<Text size="sm" color="dimmed" mt="md">
						Stay connected throughout the summit and beyond.
					</Text>
				</Paper>
			</Container>
		</div>
	);
}
