// components/EventCard/EventCard.tsx

import Image from "next/image";
import styles from "./EventCard.module.css"; // Import the CSS Module
import { FC } from "react";
import Link from "next/link";

const resourceUrl = process.env.NEXT_PUBLIC_CDN + "/2024";

interface Speaker {
	name: string;
	title: string;
	linkedin: string;
	image: string;
}

interface EventCardProps {
	imageUrl: string;
	title: string;
	description: string;
	speakers: Speaker[];
	tag: string;
}

const EventCard: FC<EventCardProps> = ({
	imageUrl,
	title,
	description,
	speakers,
	tag,
}) => {
	return (
		<div className={styles.eventCard}>
			<div className={styles.eventImageWrapper}>
				<Image
					src={imageUrl}
					alt={title}
					className={styles.eventImage}
					width={350}
					height={200}
				/>
			</div>
			<div className={styles.eventCardContent}>
				<h3 className={styles.eventTitle}>{title}</h3>
				<p className={styles.eventDescription}>{description}</p>
				<div className={styles.eventSpeakers}>
					{speakers.map((speaker, idx) => (
						<div key={idx} className={styles.eventSpeaker}>
							<Image
								src={`${resourceUrl}${speaker.image}`}
								alt={speaker.name}
								className={styles.eventSpeakerImage}
								width={60}
								height={60}
							/>
							<div className={styles.eventSpeakerDetails}>
								<p className={styles.eventSpeakerName}>
									{speaker.name}
								</p>
								<p className={styles.eventSpeakerTitle}>
									{speaker.title}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className={styles.eventTag}>{tag}</div>
			</div>
		</div>
	);
};

export default EventCard;
