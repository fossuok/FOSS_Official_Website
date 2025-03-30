import { Container, Group } from "@mantine/core";

import classes from "./page.module.css";
import "./page.global.css";
import GradientBack from "@/components/Gradient/GradientBack";
import { NavbarTimeline } from "../timeline";

const resourceUrl = "/2024";

import EventCard from "./EventCard";
import speakerList from "./speakerList";
import workshops from "./workshopList";

import { SummitCommittee, WorkshopCommittee } from "./Comittee";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog | FOSS Community UOK ",
	description: "Latest Blogs from FOSS Comunity at UOK.",
	openGraph: {
		title: "FOSS Community - University of Kelaniya",
		description: "Welcome to the Offical Web Page of FOSS Comunity at UOK.",
		type: "website",
		url: "https://fossuok.org/blog", //update
		images: [{ url: "https://fossuok.org/FOSS.webp" }],
	},
};

export default function Summit24() {
	const getSpeakers = (speakerSlugs: string[]) => {
		return speakerSlugs
			.map((slug) => {
				const speaker = speakerList.find((s) => s.slug === slug);
				return speaker
					? {
							name: speaker.name,
							title: speaker.title,
							linkedin: speaker.linkedin,
							image: speaker.image,
					  }
					: null;
			})
			.filter((speaker) => speaker !== null);
	};
	return (
		<div className={classes.wrapper}>
			<GradientBack />
			<NavbarTimeline label={"OPEN DEV SUMMIT '24"} />
			<Container size={900}>
				<div className={classes.inner}>
					{/* OSS'24 Logo */}
					<div className={classes.logo}></div>

					{/* Event Date & Location */}
					<Group justify="center" className={classes.controls}>
						<p className={classes.description}>
							April 27<sup>th</sup> 2024 <br />
							University of Kelaniya, Sri Lanka
						</p>
					</Group>

					{/* Title */}
					<h1 className={classes.title}>
						Open-Source Dev <br />
						Summit at &nbsp;
						<span className={classes.highlight}>
							University of <br />
							Kelaniya
						</span>
					</h1>

					{/* CTA Buttons */}
					<div className={classes.ctaButtons}>
						<a
							href={`${resourceUrl}/assets/oss24-transparency-report.pdf`}
							className={`${classes.btn} ${classes.primary}`}
						>
							<span>Download Transparency Report</span>
						</a>

						<a
							href="#speakers"
							className={`${classes.btn} ${classes.secondary}`}
						>
							<span>Speakers</span>
						</a>

						<a
							href="/summit/sponsorships"
							className={`${classes.btn} ${classes.secondary}`}
						>
							<span>Sponsorship Opportunity</span>
						</a>
					</div>

					{/* Stat Cards */}
					<div className={classes.statsContainer}>
						<dl className={classes.statsGrid}>
							<div className={classes.statCard}>
								<dt className={classes.statTitle}>Speakers</dt>

								<dd className={classes.statValue}>10+</dd>
							</div>

							<div className={classes.statCard}>
								<dt className={classes.statTitle}>Workshops</dt>

								<dd className={classes.statValue}>5</dd>
							</div>

							<div className={classes.statCard}>
								<dt className={classes.statTitle}>Days</dt>

								<dd className={classes.statValue}>6</dd>
							</div>
						</dl>
					</div>
					<div className={classes.rect}></div>
				</div>
			</Container>

			<Container size={900}>
				<div className={classes.partners}>
					<div>
						<h3 className={classes.partnerTitle}>
							Diamond Sponsors
						</h3>
						<div className={classes.partnerLogoRow}>
							<div>
								<img
									src={`${resourceUrl}/images/summit/sponsors/zone24x7_light.png`}
									alt="https://zone24x7.com"
									className={classes.partnerLogo}
								></img>
							</div>
							<img
								src={`${resourceUrl}/images/summit/sponsors/wso2_light.png`}
								alt="https://wso2.com/"
								className={classes.partnerLogo}
							></img>
						</div>
						<h3 className={classes.partnerTitle}>
							Beverage Partner
						</h3>
						<div className={classes.partnerLogoRow}>
							<div>
								<img
									src={`${resourceUrl}/images/summit/sponsors/barista.png`}
									alt="https://www.barista.lk/"
									className={classes.partnerLogo}
								></img>
							</div>
						</div>
						<h3 className={classes.partnerTitle}>
							Community Partners
						</h3>
						<div className={classes.partnerLogoRow}>
							<div>
								<img
									src={`${resourceUrl}/images/summit/fosslk.png`}
									alt="https://foss.lk/"
									className={classes.partnerLogo}
								></img>
							</div>
							<div>
								<img
									src={`${resourceUrl}/images/summit/cnsl.png`}
									alt="https://meetup.com/Cloud-Native-Sri-Lanka/"
									className={classes.partnerLogo}
								></img>
							</div>
							<div>
								<img
									src={`${resourceUrl}/images/summit/ghcsl.png`}
									alt="https://gcsrilanka.github.io/"
									className={classes.partnerLogo}
								/>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<Container size={1200}>
				<h2 className={classes.speakerSectionTitle}>Speakers</h2>
				<div className={classes.speakers}>
					{speakerList.map((speaker) => {
						return (
							<div
								className={classes.speakerCard}
								key={speaker.slug}
							>
								<div className={classes.speakerImgContainer}>
									<img
										className={classes.speakerImg}
										src={`${resourceUrl}${speaker.image}`}
										alt={`${speaker.name}`}
									/>
									<div className={classes.speakerLink}>
										<a href={speaker.linkedin}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className={
													classes.speakerLinkedin
												}
												viewBox="-4 0 52 52"
											>
												<title>LinkedIn</title>
												<path d="M8.421 14h.052 0C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5 5.789 5 4 6.945 4 9.5 4 12 5.736 14 8.421 14zM4 17H13V43H4zM44 26.5c0-5.247-4.253-9.5-9.5-9.5-3.053 0-5.762 1.446-7.5 3.684V17h-9v26h9V28h0c0-2.209 1.791-4 4-4s4 1.791 4 4v15h9C44 43 44 27.955 44 26.5z" />
											</svg>
										</a>
									</div>
								</div>

								<span className={classes.speakerName}>
									{speaker.name}
								</span>
								<span className={classes.speakerTitle}>
									{speaker.title} at {speaker.company}
								</span>
							</div>
						);
					})}
				</div>
			</Container>

			<Container size={1200}>
				<h2 className={classes.eventSectionTitle}>
					Pre-Summit Workshop Series{" "}
				</h2>
				<span className={classes.eventSectionDes}>
					Join us for a series of workshops to learn from the best in
					the industry.
				</span>

				{workshops.map((workshop, index) => (
					<EventCard
						key={index}
						imageUrl={`${resourceUrl}${workshop.image}`}
						title={workshop.title}
						description={workshop.description}
						speakers={getSpeakers(workshop.speakers)}
						tag={workshop.tag}
					/>
				))}
			</Container>

			<Container size={1200}>
				<h2 className={classes.commiteeSectionTitle}>
					Summit Committee
				</h2>

				<SummitCommittee />
			</Container>

			<Container size={1200}>
				<h2 className={classes.commiteeSectionTitle}>
					Workshop Committee
				</h2>
				<WorkshopCommittee />
			</Container>

			<Container size={1200}>
				<section className={classes.inner}>
					<div className={classes.grid}></div>
				</section>
			</Container>
		</div>
	);
}
