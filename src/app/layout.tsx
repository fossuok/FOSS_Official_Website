"use client"

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/carousel/styles.css";
import "./globals.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  createTheme,
} from "@mantine/core";
import { HeaderMegaMenu } from "../components/Header/HeaderMegaMenu";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let persistor = persistStore(store);

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Provider store={store}>
          <MantineProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}>
              <HeaderMegaMenu />
              {children}
              <FooterLinks />
            </PersistGate>
          </MantineProvider>
        </Provider>
      </body>
    </html>
  );
}
