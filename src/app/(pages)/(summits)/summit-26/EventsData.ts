import { EventCardProps } from "@/data/EventCardProp";

const imgUrl = process.env.NEXT_PUBLIC_CDN;

export const eventsData: EventCardProps[] = [
	{
		id: 23,
		title: "AI Agents & Workflow Automation",
		register: "/summit-26/ai-agents-and-workflow-automation",
		externalRegister: "https://forms.gle/vtyp9dAS8hSuhJ896",
		open: true,
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
