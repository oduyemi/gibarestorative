"use client";
import React, { useState } from "react";
import { Box, Flex, Heading, Text, Input, Button, Stack, Link } from "@chakra-ui/react";
import Image from "next/image";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://giba.vercel.app/api/v1/mailinglist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed. Please try again.");
      }

      setMessage("Subscription successful! Thank you for signing up.");
      setEmail("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box as="footer" bgGradient="linear(to-t, #EAEAEA, #F1F1F1)" color="gray.600" py={{ base: 10, md: 14 }} px={{ base: 6, md: 12 }} boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
      <Box maxW="6xl" mx="auto">
        {/* Newsletter Subscription Section */}
        <Box mb={{ base: 6, md: 10 }} textAlign="center">
          <Heading as="h3" size="lg" mb={4} color="yellow.400" fontWeight="bold">
            Join Our Mailing List
          </Heading>
          <Text fontSize="lg" mb={6} opacity={0.8} color="gray.600">
            Stay up to date with the latest news, offers, and health tips.
          </Text>
          <Flex direction={{ base: "column", md: "row" }} justify="center" align="center">
            <Input
              placeholder="Enter email address"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxW={{ base: "full", md: "400px" }}
              borderRadius="md"
              borderColor="yellow.400"
              mb={{ base: 4, md: 0 }}
              mr={{ base: 0, md: 4 }}
              _focus={{ borderColor: "yellow.500", boxShadow: "0 0 0 3px rgba(255, 255, 0, 0.5)" }}
            />
            <Button
              size="lg"
              bg="yellow.400"
              color="yellow.700"
              _hover={{ bg: "yellow.500" }}
              isLoading={isLoading}
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </Flex>
          {message && <Text mt={3} color={message.includes("successful") ? "green.500" : "red.500"}>{message}</Text>}
        </Box>
        {/* Footer Links Section */}
        <Stack direction={{ base: "column", md: "row" }} spacing={8} justify="space-between">
          {/* Logo and Description */}
          <Box flex="1" textAlign={{ base: "left", md: "left" }}>
            <Link href="/" display="flex" alignItems="center" mb={-3} mt={-6}>
              <Image src="/assets/images/logo/sitelogo.png" alt="Logo" width={80} height={80} />
            </Link>
            <Text mt={4} opacity={0.8} color="gray.600" fontSize="sm">
              We blend modern medicine with holistic wellness to help you look, feel, and live better.
            </Text>
          </Box>

          {/* Footer Links */}
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" flex={2}>
            <Box>
              <Heading as="h4" size="sm" mb={2} color="yellow.400" fontWeight="semibold">
                Services
              </Heading>
              <Stack spacing={2} fontSize="sm">
                <Link href="/weight-loss" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Weight Loss Program</Link>
                <Link href="/hormone-replacement" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Hormone Replacement</Link>
                <Link href="/virtual-care" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Virtual Visits</Link>
                <Link href="/care" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Direct Patient Care</Link>
              </Stack>
            </Box>

            <Box>
              <Heading as="h4" size="sm" mb={2} color="yellow.400" fontWeight="semibold">
                Quick Links
              </Heading>
              <Stack spacing={2} fontSize="sm">
                <Link href="/about" _hover={{ textDecoration: "underline", color: "yellow.500" }}>About</Link>
                <Link href="/contact" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Contact</Link>
                <Link href="/membership" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Members</Link>
                <Link href="/bookings" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Bookings</Link>
              </Stack>
            </Box>
          </Flex>
        </Stack>

        {/* Footer Bottom Section */}
        <Box mt={6} borderTop="1px" borderColor="gray.600" pt={4}>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text fontSize="sm" opacity={0.7} color="gray.700">
              &copy; {new Date().getFullYear()} Giba Medical Clinic | All rights reserved
            </Text>
            <Stack direction="row" spacing={6} fontSize="sm">
              <Link href="" color="teal.500" _hover={{ textDecoration: "underline", color: "teal.600" }}>Terms</Link>
              <Link href="/privacy-policy" color="teal.500" _hover={{ textDecoration: "underline", color: "teal.600" }}>Privacy</Link>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
