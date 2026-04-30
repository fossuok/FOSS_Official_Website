import { EventCard } from "@/components/EventCard/EventCard";
import { eventsData } from "../EventsData";
import classes from "../page.module.css";

export default function EventCards() {
	// Render a list of EventCard components from eventsData
	return (
		<>
			<h3 className={classes.eventCardHeader}>
				Discover the Summit — Events That Spark Curiosity
			</h3>
			{eventsData.map((event, idx) => (
				<EventCard key={event.id ?? idx} {...event} />
			))}
		</>
	);
}
