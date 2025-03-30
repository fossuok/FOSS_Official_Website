// components/Committee.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "./Committee.module.css";
import { workshopCommitee, summitCommitee } from "./committeeList";

const resourceUrl = process.env.NEXT_PUBLIC_CDN + "/2024";

interface CommitteeMember {
	name: string;
	image: string;
	title: string;
	linkedin?: string;
	twitter?: string;
}

interface CommitteeProps {
	members: CommitteeMember[];
}

const Committee: React.FC<CommitteeProps> = ({ members }) => {
	return (
		<section className={styles.committeeSection}>
			<div className={styles.committeeGrid}>
				{members.map((member, index) => (
					<div key={index} className={styles.committeeCard}>
						<Image
							src={`${resourceUrl}${member.image}`}
							alt={member.name}
							width={100}
							height={100}
							className={styles.committeeImage}
						/>
						<h3 className={styles.committeeName}>{member.name}</h3>
						<p className={styles.committeeRole}>{member.title}</p>
						{/* <div className={styles.committeeLinks}>
							{member.linkedin && (
								<Link
									href={member.linkedin}
									className={styles.committeeLink}
									target="_blank"
								>
									LinkedIn
								</Link>
							)}
							{member.twitter && (
								<Link
									href={member.twitter}
									className={styles.committeeLink}
									target="_blank"
								>
									Twitter
								</Link>
							)}
						</div> */}
					</div>
				))}
			</div>
		</section>
	);
};

export const SummitCommittee = () => <Committee members={summitCommitee} />;
export const WorkshopCommittee = () => <Committee members={workshopCommitee} />;
