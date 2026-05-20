import { EventCardProps } from "@/data/EventCardProp";

const imgUrl = process.env.NEXT_PUBLIC_CDN;

export const eventsData: EventCardProps[] = [
	{
		id: 20260524,
		title: "Building Production Ready Scalable Container Solutions",
		register:
			"/summit-26/building-production-ready-scalable-container-solutions",
		externalRegister: "https://forms.gle/ShPLzi3ivr7Dxuw68",
		open: true,
		record: false,
		date: "May 24",
		year: "2026",
		description: [
			"Explore how production-ready scalable container solutions are built using AWS ECS and AWS-native CI/CD workflows, along with practical insights into modern cloud deployment practices.",
		],
		imageUrl: {
			src: `${imgUrl}/flyers/summit-26/ds26-topic-tharindu.webp`,
			height: 0,
			width: 0,
		},
		speakers: [
			{
				name: "Tharindu Kalhara",
				role: "Cloud & DevOps Platforms Engineer (Intern)",
				alt: "Tharindu Kalhara",
				src: `${imgUrl}/images/speakers/summit-26/tharindu-kalhara.webp`,
			},
		],
		tags: ["DevOps", "AWS", "CI/CD"],
		contents: {
			weekday: "Sunday",
			timerange: "6.00 pm - 08.00 pm",
			location: "Online via ZOOM",
			agenda: ["06:00 PM - Event Starts"],
		},
	},
	{
		id: 20260503,
		title: "AI Agents & Workflow Automation",
		register: "/summit-26/ai-agents-and-workflow-automation",
		externalRegister: "https://forms.gle/yPbbrQwcdS3Tk3cx8",
		open: false,
		record: false,
		date: "May 03",
		year: "2026",
		description: [
			"Discover how AI agents and workflow automation are reshaping the way modern software is built, deployed, and scaled.",
		],
		imageUrl: {
			src: `${imgUrl}/flyers/summit-26/ds26-topic-mithushan.webp`,
			height: 0,
			width: 0,
		},
		speakers: [
			{
				name: "Mithushan Jalangan",
				role: "Co-Founder/Tech at Asyncdot Pvt Ltd",
				alt: "Mithushan Jalangan",
				src: `${imgUrl}/images/speakers/summit-26/mithushan-jalangan.webp`,
			},
		],
		tags: ["AI Agents", "Workflow Automation"],
		contents: {
			weekday: "Sunday",
			timerange: "6.00 pm - 08.00 pm",
			location: "Online via ZOOM",
			agenda: ["06:00 PM - Event Starts"],
		},
	},
];
