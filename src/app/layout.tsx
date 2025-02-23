"use client";

import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { TopHeader } from "@/navigation/TopHeader";
import { Header } from "@/navigation/Header";
import { Footer } from "@/navigation/Footer";

export default function RootLayout({
  children,
  hideLayout = false,
}: {
  children: React.ReactNode;
  hideLayout?: boolean;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Giba Restorative Clinic</title>
        <meta name="description" content="Best Weight Loss Clinic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon & Icons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </Head>
      <body style={{ margin: 0, padding: 0 }}>
        <ChakraProvider>
          <Box minH="100vh" display="flex" flexDirection="column" m={0} p={0}>
            {/* Conditionally Render Header */}
            {!hideLayout && (
              <>
                <TopHeader />
                <Header />
              </>
            )}

            <Box flex="1" m={0} p={0}>
              {children}
            </Box>

            {/* Conditionally Render Footer */}
            {!hideLayout && (
              <Box className="mt-5">
                <Footer />
              </Box>
            )}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
