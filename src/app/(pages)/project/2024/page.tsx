import { Container, Group } from "@mantine/core";

import classes from "./page.module.css";
import "./page.global.css";
import GradientBack from "@/components/Gradient/GradientBack";
import { NavbarTimeline } from "../timeline";

const resourceUrl = "/2024";

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
				<section className={classes.inner}>
					<div className={classes.grid}></div>
				</section>
			</Container>
		</div>
	);
}
