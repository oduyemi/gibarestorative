"use client";
import React from "react";
import { Box, Text, Link as ChakraLink, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

export const TopHeader: React.FC = () => {
  // Use breakpoint value for responsive layout
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      bg="#008B8B"
      py={2}
      position="sticky"  // Sticky behavior
      top="0"  // Sticks to the top
      zIndex="10"  // Keeps it above other elements
      width="100%"  // Ensure full width
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
    >
      <Box
        as="div"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="white"
        maxW="container.xl"
        mx="auto"
        px={{ base: 2, md: 4 }}
        fontSize={{ base: "sm", md: "md" }}
        height="auto"
      >
        {/* Marquee Effect for smaller screens */}
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
            as="div"
            className="marquee-text"
            display="inline-block"
            ml={4}
            animation={isMobile ? "marquee 10s linear infinite" : "none"}
            fontSize={{ base: "sm", md: "md" }}
          >
            <strong>Phone no:</strong>
            <ChakraLink as={Link} href="tel:(346)545-1355" ml={1} color="white" isExternal>
              (346) 545-1355
            </ChakraLink>
            <strong className="ms-3">Email us:</strong>
            <ChakraLink as={Link} href="mailto:info@gibarestorative.com" ml={1} color="white" isExternal>
              info@gibarestorative.com
            </ChakraLink>
            <span className="ms-3 font-weight-light">Summer sale - 10% off any Weight Loss Program</span>
          </Text>
        </Box>

        {/* Social Media Icons (Visible only on larger screens) */}
        {!isMobile && (
          <HStack spacing={4} display="flex">
            <ChakraLink as={Link} href="" color="white">
              <IconButton
                icon={<FaFacebook />}
                aria-label="Facebook"
                variant="link"
                color="white"
                size="sm"
                isRound
              />
            </ChakraLink>
            <ChakraLink as={Link} href="" color="white">
              <IconButton
                icon={<FaTwitter />}
                aria-label="Twitter"
                variant="link"
                color="white"
                size="sm"
                isRound
              />
            </ChakraLink>
            <ChakraLink as={Link} href="" color="white">
              <IconButton
                icon={<FaInstagram />}
                aria-label="Instagram"
                variant="link"
                color="white"
                size="sm"
                isRound
              />
            </ChakraLink>
            <ChakraLink as={Link} href="#" color="white">
              <IconButton
                icon={<FaDribbble />}
                aria-label="Dribbble"
                variant="link"
                color="white"
                size="sm"
                isRound
              />
            </ChakraLink>
          </HStack>
        )}
      </Box>

      {/* Adding CSS for Marquee */}
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
