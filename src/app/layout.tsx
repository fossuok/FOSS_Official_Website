"use client";

import "@mantine/core/styles.css";
import "./globals.css";
import "@mantine/carousel/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  createTheme,
} from "@mantine/core";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "@/store/store";

import { HeaderMegaMenu } from "@/components/Header/HeaderMegaMenu";
import { FooterLinks } from "@/components/Footer/FooterLinks";

const theme = createTheme({
  fontFamily:
    "Outfit, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
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
