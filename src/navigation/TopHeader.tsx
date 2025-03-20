"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Link as ChakraLink, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

export const TopHeader: React.FC = () => {
  const [banner, setBanner] = useState<{ phone: string; email: string; message: string } | null>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch("https://giba.vercel.app/api/v1/banners");
        const data = await response.json();
        if (data.length > 0) {
          setBanner(data[0]);
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };
    fetchBanner();
  }, []);

  return (
    <Box
      bg="#008B8B"
      py={2}
      position="sticky"
      top="0"
      zIndex="10"
      width="100%"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="white"
        maxW="container.xl"
        mx="auto"
        px={{ base: 2, md: 4 }}
        fontSize={{ base: "sm", md: "md" }}
      >
        <Box
          display="flex"
          flex="1"
          alignItems="center"
          justifyContent="flex-start"
          whiteSpace="nowrap"
          overflow="hidden"
          position="relative"
        >
          <Text
            display="inline-block"
            ml={4}
            animation={isMobile ? "marquee 10s linear infinite" : "none"}
            fontSize={{ base: "sm", md: "md" }}
          >
            {banner ? (
              <>
                <strong>Phone no:</strong>
                <ChakraLink as={Link} href={`tel:${banner.phone}`} ml={1} color="white" isExternal>
                  {banner.phone}
                </ChakraLink>
                <strong className="ms-3">Email us:</strong>
                <ChakraLink as={Link} href={`mailto:${banner.email}`} ml={1} color="white" isExternal>
                  {banner.email}
                </ChakraLink>
                <span className="ms-3 font-weight-light">{banner.message}</span>
              </>
            ) : (
              <Text>Loading...</Text>
            )}
          </Text>
        </Box>
        {!isMobile && (
          <HStack spacing={4}>
            <ChakraLink as={Link} href="#" color="white">
              <IconButton icon={<FaFacebook />} aria-label="Facebook" variant="link" color="white" size="sm" isRound />
            </ChakraLink>
            <ChakraLink as={Link} href="#" color="white">
              <IconButton icon={<FaTwitter />} aria-label="Twitter" variant="link" color="white" size="sm" isRound />
            </ChakraLink>
            <ChakraLink as={Link} href="#" color="white">
              <IconButton icon={<FaInstagram />} aria-label="Instagram" variant="link" color="white" size="sm" isRound />
            </ChakraLink>
            <ChakraLink as={Link} href="#" color="white">
              <IconButton icon={<FaDribbble />} aria-label="Dribbble" variant="link" color="white" size="sm" isRound />
            </ChakraLink>
          </HStack>
        )}
      </Box>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};