"use client";

import { useRef, useEffect, useState } from "react";
import { Text, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "@/app/(pages)/home/CardsCarousel.module.css";
import { eventsData } from "../EventsData";
import { EventCard } from "@/components/EventCard/EventCard";
import GradientBack from "@/components/Gradient/GradientBack";
import Autoplay from "embla-carousel-autoplay";

export default function EventCards() {
	const [inView, setInView] = useState(false);
	const autoplay = useRef(
		Autoplay({ delay: 3000, stopOnInteraction: false }),
	);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true);
					}
				});
			},
			{ threshold: 0.3 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	// Ensure enough slides for smooth looping — duplicate events when list is small
	const minSlides = 6;
	const displayList: typeof eventsData = [];
	if (eventsData.length === 0) {
		// nothing
	} else {
		while (displayList.length < minSlides) {
			displayList.push(...eventsData);
		}
	}

	const slides = (displayList.length ? displayList : eventsData)
		.slice(0, Math.max(minSlides, eventsData.length))
		.map((evt, idx) => (
			<Carousel.Slide key={`${evt.id ?? evt.title}-${idx}`}>
				<EventCard {...evt} />
			</Carousel.Slide>
		));

	return (
		<div className={classes.wrapper} ref={sectionRef}>
			<GradientBack />
			<Container size={1200} pt={100} pb={100}>
				<h1 className={classes.title}>
					<Text
						component="span"
						variant="gradient"
						gradient={{ from: "violet", to: "grape" }}
						inherit
					>
						Events That Spark Curiosity
					</Text>
				</h1>
				<Text className={classes.discription}>
					A collection of sessions and talks designed for developers
					to explore ideas and deepen technical expertise
				</Text>
				<Carousel
					controlsOffset="-100px"
					controlSize={40}
					slideSize={{ base: "100%", sm: "80%" }}
					slideGap={{ base: 2, sm: "xl" }}
					align="start"
					slidesToScroll={1}
					loop
					withIndicators={false}
					plugins={inView ? [autoplay.current] : []}
					onMouseEnter={autoplay.current.stop}
					onMouseLeave={autoplay.current.reset}
				>
					{slides}
				</Carousel>
			</Container>
		</div>
	);
}
