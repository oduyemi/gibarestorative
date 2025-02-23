"use client";
import { Box, Flex, Heading, Text, Input, Button, Stack, Link } from "@chakra-ui/react";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box as="footer" bg="#ccc" color="black" py={{ base: 12, md: 16 }} px={{ base: 6, md: 12 }}>
      <Box maxW="6xl" mx="auto">
        {/* Newsletter Subscription Section */}
        <Box mb={{ base: 8, md: 12 }} textAlign="center">
          <Heading as="h3" size="lg" mb={4}>
            Join Our Mailing List
          </Heading>
          <Text fontSize="lg" mb={6} opacity={0.8}>
            Stay up to date with the latest news, offers, and health tips.
          </Text>
          <Flex direction={{ base: "column", md: "row" }} justify="center" align="center">
            <Input
              placeholder="Enter email address"
              size="lg"
              maxW={{ base: "full", md: "400px" }}
              borderRadius="md"
              borderColor="#000"
              mb={{ base: 4, md: 0 }}
              mr={{ base: 0, md: 4 }}
              _focus={{ borderColor: "yellow.500" }}
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
            <Link href="/" display="flex" alignItems="center">
              <Image src="/assets/images/logo/sitelogo.png" alt="Logo" width={100} height={100}  />
            </Link>
            <Text mt={4} opacity={0.7}>
              We blend modern medicine with holistic wellness to help you look, feel, and live better.
            </Text>
          </Box>

          {/* Footer Links */}
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" wrap={{ base: "wrap", md: "nowrap" }}>
            <Box>
              <Heading as="h4" size="sm" mb={2}>
                Services
              </Heading>
              <Stack spacing={2}>
                <Link href="/weight-loss">Weight Loss Program</Link>
                <Link href="/hormone-replacement">Hormone Replacement</Link>
                <Link href="/virtual-visits">Virtual Visits</Link>
                <Link href="/patient-care">Direct Patient Care</Link>
              </Stack>
            </Box>

            <Box>
              <Heading as="h4" size="sm" mb={2}>
                Quick Links
              </Heading>
              <Stack spacing={2}>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/membership">Members</Link>
                <Link href="/urgent-care">Urgent Care</Link>
              </Stack>
            </Box>

            <Box>
              <Heading as="h4" size="sm" mb={2}>
                Social
              </Heading>
              <Stack spacing={2}>
                <Link href="">LinkedIn</Link>
                <Link href="">Facebook</Link>
                <Link href="">X</Link>
                <Link href="">Instagram</Link>
              </Stack>
            </Box>
          </Flex>
        </Stack>

        {/* Footer Bottom Section */}
        <Box mt={8} borderTop="1px" borderColor="gray.700" pt={6}>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text fontSize="sm" opacity={0.7}>
              &copy; {new Date().getFullYear()} Giba Restorative LTD | All rights reserved
            </Text>
            <Stack direction="row" spacing={6} fontSize="sm">
              <Link href="" color="yellow.400">Terms</Link>
              <Link href="" color="yellow.400">Privacy</Link>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
