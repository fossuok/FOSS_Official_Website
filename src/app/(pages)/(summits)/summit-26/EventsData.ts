import { EventCardProps } from "@/data/EventCardProp";

const imgUrl = process.env.NEXT_PUBLIC_CDN;

export const eventsData: EventCardProps[] = [
	{
		id: 20260620,
		title: "Developer Summit '26 - Register Now",
		register: "/summit-26/summit",
		externalRegister: "https://forms.gle/RgKye5hzx1gsrHQn6",
		open: true,
		record: false,
		date: "June 20",
		year: "2026",
		description: [
			"Join industry professionals and technology enthusiasts for an insightful day of learning and knowledge sharing at Developer Summit '26.",
			"Featured sessions:",
			"- Agile in Practice: How Software Is Built in the Real World",
			"- Building Meaningful Academic Work: From Problem to Publication",
			"- Business and Technology: The Role of a Business Analyst",
			"Complete this form to reserve your spot at the summit. Limited seats available.",
		],
		imageUrl: {
			src: `${imgUrl}/flyers/summit-26/ds26-topic-gimhani.webp`,
			height: 0,
			width: 0,
		},
		speakers: [
			{
				name: "Gimhani Uthpala Kankanamge",
				role: "Associate Architect at LSEG",
				alt: "Gimhani Uthpala Kankanamge",
				src: `${imgUrl}/images/speakers/summit-26/gimhani-uthpala.webp`,
			},
		],
		tags: ["Agile", "Software Engineering", "Architecture"],
		contents: {
			weekday: "Saturday",
			timerange: "8:30 AM - 1:30 PM",
			location: "University of Kelaniya",
			agenda: [
				"08:30 AM - Opening Ceremony & Welcome Speech",
				"08:45 AM - Introduction to the FOSS Community and Developer Summit",
				"09:00 AM - Session 1: Ms. Gimhani Uthpala Kankanamge - Agile in Practice: How Software Is Built in the Real World",
				"10:30 AM - Session 2: Mr. Frank Cronemberg - Building Meaningful Academic Work: From Problem to Publication",
				"11:45 AM - Refreshment Break",
				"12:00 PM - Session 3: Mr. Nushan Vitharana - Business and Technology: The Role of a Business Analyst",
				"01:30 PM - Vote of Thanks",
			],
		},
	},
	{
		id: 20260524,
		title: "Building Production Ready Scalable Container Solutions",
		register:
			"/summit-26/building-production-ready-scalable-container-solutions",
		externalRegister: "https://forms.gle/ShPLzi3ivr7Dxuw68",
		open: false,
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
			timerange: "7.30 pm - 09.30 pm",
			location: "Online via ZOOM",
			agenda: ["07:30 PM - Event Starts"],
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
