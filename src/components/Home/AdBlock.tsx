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
      py={{ base: 20, md: 28 }}
    >
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bgGradient="linear(to-r, rgba(52, 89, 149, 0.85), rgba(52, 89, 149, 0.7))"
      />

      <Flex
        maxW="7xl"
        mx="auto"
        position="relative"
        zIndex={2}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={8}
        color="white"
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Text Content */}
        <Box flex={1} mb={{ base: 8, md: 0 }}>
          <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" letterSpacing="wide">
            We Provide Free Health Care Consultation
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} mt={4} opacity={0.95} lineHeight="tall">
            Request to book a free <strong>(10min)</strong> virtual consultation today!
            During this visit, we will explain our weight loss program and see if you are a good fit.
            We will order labs to ensure these medications are safe for you to start. At the end of the visit,
            we will set up your initial visit and send you our intake forms.
          </Text>
        </Box>

        {/* CTA Button */}
        <Box>
          <Link href="#" passHref>
            <Button
              as="a"
              colorScheme="yellow.400"
              size="lg"
              px={10}
              py={6}
              fontWeight="bold"
              borderRadius="full"
              boxShadow="xl"
              _hover={{ bg: "yellow.500", color: "white", transform: "scale(1.05)" }}
              _active={{ transform: "scale(0.98)" }}
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
