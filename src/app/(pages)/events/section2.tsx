// we can merge this to section 1 if redundent
"use client";
import { useState } from "react";
import { Pagination, Container } from "@mantine/core";
import { EventCard } from "@/components/EventCard/EventCard";
import { pastData } from "@/data/PastEvents";

// Utility function to chunk data into pages of a given size
function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) return [];
  return [array.slice(0, size), ...chunk(array.slice(size), size)];
}

const ITEMS_PER_PAGE = 3;
const paginatedData = chunk(pastData, ITEMS_PER_PAGE);

export function Section2() {
  const [activePage, setPage] = useState(1);
  const currentItems = paginatedData[activePage - 1] || [];

  return (
    <Container
      pb={50}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {currentItems.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}

      <Pagination
        total={paginatedData.length}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </Container>
  );
}
