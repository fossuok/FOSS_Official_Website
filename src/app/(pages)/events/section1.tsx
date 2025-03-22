import { Container, Pagination, Box, Paper } from "@mantine/core";
import { EventCard } from "@/components/EventCard/EventCard";
import { EventCardProps } from "@/data/EventCardProp";
import { useState } from "react";

// Utility function to chunk data into pages of a given size
function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) return [];
  return [array.slice(0, size), ...chunk(array.slice(size), size)];
}

const ITEMS_PER_PAGE = 4;

export function Section1({ events }: { events: EventCardProps[] }) {
  const [activePage, setPage] = useState(1);
  const paginatedData = chunk(events, ITEMS_PER_PAGE);
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
      {currentItems.length > 0 ? (
        currentItems.map((event) => <EventCard key={event.id} {...event} />)
      ) : (
        <Paper h={400} p="md">
          <h1 style={{ textAlign: "center" }}>Coming Soon</h1>
        </Paper>
      )}

      {paginatedData.length > 1 && (
        <Pagination
          total={paginatedData.length}
          value={activePage}
          onChange={setPage}
          mt="sm"
        />
      )}
    </Container>
  );
}
