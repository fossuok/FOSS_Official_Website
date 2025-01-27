import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/carousel/styles.css";
// import '@mantine/notifications/styles.css'
import "./globals.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  createTheme,
} from "@mantine/core";
import { HeaderMegaMenu } from "../components/Header/HeaderMegaMenu";
import { FooterLinks } from "@/components/Footer/FooterLinks";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
});

export const metadata = {
  title: "FOSS Community - University of Kelaniya",
  description: "FOSS UoK Official Website",
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
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderMegaMenu />
          {children}
          <FooterLinks />
        </MantineProvider>
      </body>
    </html>
  );
}
