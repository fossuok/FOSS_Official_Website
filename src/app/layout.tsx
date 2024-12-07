"use client";
import "../styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store);

  return (
    <html lang="en">
      <head>
        <title>Foss UOK official Website</title>
        <meta name="description" content="This is the official website of Foss UOK" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gradient-to-b from-[#020c1b] via-[#0d1b2a] to-[#112240] text-gray-600 m-[40px]">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
