"use client";
import React from "react";
import { Box, Text, Heading, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const AdBlock: React.FC = () => {
  return (
    <Box
      as="section"
      position="relative"
      bgImage="url('/images/bg_1.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={{ base: 16, md: 24 }}
    >
      {/* Overlay */}
      <Box position="absolute" top={0} left={0} w="full" h="full" bg="#345995" />

      <Flex
        maxW="6xl"
        mx="auto"
        position="relative"
        zIndex={2}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={6}
        color="white"
      >
        {/* Text Content */}
        <Box flex={1} textAlign={{ base: "center", md: "left" }} mb={{ base: 6, md: 0 }}>
          <Heading as="h2" size="xl" fontWeight="bold">
            We Provide Free Health Care Consultation
          </Heading>
          <Text fontSize="lg" mt={3} opacity={0.9}>
            Your health is our top priority with comprehensive, affordable care.
          </Text>
        </Box>

        {/* CTA Button */}
        <Box>
          <Link href="#" passHref>
            <Button
              as="a"
              bg="#BDA023"
              color="blue.600"
              size="lg"
              px={8}
              py={6}
              fontWeight="bold"
              _hover={{ bg: "blue.500", color: "white" }}
              transition="all 0.3s ease"
            >
              Free Consultation
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
