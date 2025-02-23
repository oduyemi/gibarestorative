"use client";

import { Box, ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { TopHeader } from "@/navigation/TopHeader";
import { Header } from "@/navigation/Header";
import { Footer } from "@/navigation/Footer";

export default function RootLayout({
  children,
  hideLayout = false, // Default is false
}: {
  children: React.ReactNode;
  hideLayout?: boolean;
}) {
  return (
    <html lang="en">
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
