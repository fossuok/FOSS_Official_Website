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
			agenda: [
				"9.00 am - Addressing the Attendees",
				"9.02 am - Welcome Speech",
				"9.07 am - Presentation of Annual Minutes",
				"9.15 am - Introduction to FOSS Community, Summary of Events & Achievements from Previous Term",
				"9.25 am - Annual Budget Report for Previous Term",
				"9.35 am - Senior Treasurer’s Speech",
				"9.40 am - Community Constitution Amendments",
				"9.45 am - Introducing the Upcoming President & their Speech",
				"9.55 am - Introduction of Upcoming Board of Officers",
				"10.05 am - Vote of Thanks",
				"10.10 am - Conclusion of the AGM",
			],
		},
	},
];
