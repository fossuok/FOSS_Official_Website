import "@mantine/core/styles.css";
import "./globals.css";
import "@mantine/carousel/styles.css";

import React from "react";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import Providers from "@/components/Providers/Providers";

export const metadata = {
  title: "FOSS Community - University of Kelaniya",
  description: "Welcome to the Official Web Page of FOSS Community at UOK.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
