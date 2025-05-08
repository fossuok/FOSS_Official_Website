//separated to keep the layout as server render
"use client";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MantineProvider } from "@mantine/core";
import { store, persistor } from "@/store/store";
import { theme } from "../../../theme";
import { HeaderMegaMenu } from "@/components/Header/HeaderMegaMenu";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <HeaderMegaMenu />
        <PersistGate loading={null} persistor={persistor}>
          {children}
          <FooterLinks />
        </PersistGate>
      </MantineProvider>
      <SpeedInsights />
      <Analytics />
    </Provider>
  );
}
