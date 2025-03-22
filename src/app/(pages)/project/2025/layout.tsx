import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Dev Summit'25 | FOSS Community UOK ",
  description:
    "The biggest developer conference about free and open source software at the university of kelaniya.",
  openGraph: {
    title: "FOSS Community - University of Kelaniya",
    description: "Welcome to the Offical Web Page of FOSS Comunity at UOK.",
    type: "website",
    url: "https://dev.fossuok.org/project/2025", //update
    images: [{ url: "https://dev.fossuok.org/FOSS.webp" }],
  },
};
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
