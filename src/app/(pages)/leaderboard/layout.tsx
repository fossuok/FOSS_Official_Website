import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard | FOSS Community UOK ",
  description: "Latest Events from FOSS Comunity at UOK.",
  openGraph: {
    title: "FOSS Community - University of Kelaniya",
    description: "Welcome to the Offical Web Page of FOSS Comunity at UOK.",
    type: "website",
    url: "https://fossuok.org/leaderboard", //update
    images: [{ url: "https://fossuok.org/FOSS.webp" }],
  },
};
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
