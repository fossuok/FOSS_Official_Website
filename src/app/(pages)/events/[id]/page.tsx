"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { EventCardProps } from "@/data/EventCardProp";
import { eventsData } from "@/data/EventsData";
import Link from "next/link";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState<EventCardProps | null>(null);

  useEffect(() => {
    if (id) {
      for (const ev of eventsData) {
        if (ev.id.toString() === id) {
          setEvent(ev);
          break;
        }
      }
    }
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <Link href="/events">Go Back to events</Link>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      {/* Render other event details here */}
    </div>
  );
}
