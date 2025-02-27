"use client";
import { Box, Flex, Heading, Text, Input, Button, Stack, Link } from "@chakra-ui/react";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box as="footer" bgGradient="linear(to-t, #EAEAEA, #F1F1F1)" color="gray.600" py={{ base: 12, md: 16 }} px={{ base: 6, md: 12 }} boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
      <Box maxW="6xl" mx="auto">
        {/* Newsletter Subscription Section */}
        <Box mb={{ base: 8, md: 12 }} textAlign="center">
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
              maxW={{ base: "full", md: "400px" }}
              borderRadius="md"
              borderColor="yellow.400"
              mb={{ base: 4, md: 0 }}
              mr={{ base: 0, md: 4 }}
              _focus={{ borderColor: "yellow.500", boxShadow: "0 0 0 3px rgba(255, 255, 0, 0.5)" }}
              transition="all 0.3s ease"
            />
            <Button
              size="lg"
              bg="yellow.400"
              color="blue.700"
              _hover={{ bg: "yellow.500" }}
              transition="all 0.3s ease"
              borderRadius="md"
            >
              Subscribe
            </Button>
          </Flex>
        </Box>

        {/* Footer Links Section */}
        <Stack direction={{ base: "column", md: "row" }} spacing={12} justify="space-between">
          {/* Logo and Description */}
          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            <Link href="/" display="flex" alignItems="center" justifyContent="center">
              <Image src="/assets/images/logo/sitelogo.png" alt="Logo" width={120} height={120} />
            </Link>
            <Text mt={4} opacity={0.8} color="gray.600" fontSize="sm">
              We blend modern medicine with holistic wellness to help you look, feel, and live better.
            </Text>
          </Box>

          {/* Footer Links */}
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" wrap={{ base: "wrap", md: "nowrap" }}>
            <Box>
              <Heading as="h4" size="sm" mb={2} color="yellow.400" fontWeight="semibold">
                Services
              </Heading>
              <Stack spacing={2} fontSize="sm">
                <Link href="/weight-loss" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Weight Loss Program</Link>
                <Link href="/hormone-replacement" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Hormone Replacement</Link>
                <Link href="/virtual-visits" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Virtual Visits</Link>
                <Link href="/patient-care" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Direct Patient Care</Link>
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
                <Link href="/urgent-care" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Urgent Care</Link>
              </Stack>
            </Box>

            <Box>
              <Heading as="h4" size="sm" mb={2} color="yellow.400" fontWeight="semibold">
                Social
              </Heading>
              <Stack spacing={2} fontSize="sm">
                <Link href="" _hover={{ textDecoration: "underline", color: "yellow.500" }}>LinkedIn</Link>
                <Link href="" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Facebook</Link>
                <Link href="" _hover={{ textDecoration: "underline", color: "yellow.500" }}>X</Link>
                <Link href="" _hover={{ textDecoration: "underline", color: "yellow.500" }}>Instagram</Link>
              </Stack>
            </Box>
          </Flex>
        </Stack>

        {/* Footer Bottom Section */}
        <Box mt={8} borderTop="1px" borderColor="gray.600" pt={6}>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text fontSize="sm" opacity={0.7} color="gray.700">
              &copy; {new Date().getFullYear()} Giba Restorative LTD | All rights reserved
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
