"use client";

import { Container, Group, Button, Timeline, Text } from "@mantine/core";
import classes from "../page.module.css";

export default function EventSection() {
	return (
		<div>
			<Container>
				<Group justify="center" className={classes.controls}>
					<Container py={100} size={500}>
						{/* update */}
						<Timeline
							color="teal"
							active={6}
							bulletSize={24}
							align="left"
						>
							<Timeline.Item
								title="Building Production Ready Scalable Container Solutions"
								className={classes.time}
							>
								{/* <Text c="dimmed" size="md">
								Command Line, File System & Process Management
							  </Text> */}
								<Text>24 May 2026, 6:00 PM</Text>
								<Button
									// disabled
									mt={10}
									mb={20}
									size="md"
									radius="0 50 50 0"
									component="a"
									href={`https://www.fossuok.org/summit-26/building-production-ready-scalable-container-solutions`}
									target="_self"
								>
									Register Now
								</Button>
							</Timeline.Item>

							<Timeline.Item
								title="AI Agents and Workflow Automation"
								className={classes.time}
							>
								{/* <Text c="dimmed" size="md">
								Command Line, File System & Process Management
							  </Text> */}
								<Text>03 May 2026, 6:00 PM</Text>
								<Button
									disabled
									mt={10}
									mb={20}
									size="md"
									radius="0 50 50 0"
									component="a"
									href={`https://www.fossuok.org/summit-26/ai-agents-and-workflow-automation`}
									target="_self"
								>
									Successfully Concluded
								</Button>
							</Timeline.Item>

							<Timeline.Item
								title="Stay tuned!"
								className={classes.time}
							>
								{/* <Text c="dimmed" size="md">
								Spark, Hadoop, and Airflow{" "}
							  </Text> */}
								{/* <Text>3 May 2025, 9:00 AM</Text> */}
								<Button
									disabled
									mt={10}
									mb={20}
									size="md"
									radius="0 50 50 0"
									component="a"
									href={`https://fossuok.org/events/ods25-workshop-02`}
									target="_blank"
								>
									Updates Arriving Soon...
								</Button>
							</Timeline.Item>
						</Timeline>
					</Container>
				</Group>
			</Container>
		</div>
	);
}
