//separated to keep the layout as server render
"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MantineProvider } from "@mantine/core";
import { store, persistor } from "@/store/store";
import { theme } from "../../../theme";
import { HeaderMegaMenu } from "@/components/Header/HeaderMegaMenu";
import { FooterLinks } from "@/components/Footer/FooterLinks";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <HeaderMegaMenu />
          {children}
          <FooterLinks />
        </PersistGate>
      </MantineProvider>
    </Provider>
  );
}
