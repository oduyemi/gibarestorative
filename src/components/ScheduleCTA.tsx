"use client";
import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const Schedule = () => {
  return (
    <Box py={5} bg="gray.900">
      <Box maxW="7xl" mx="auto" px={6}>
        <Box
          borderRadius="lg"
          overflow="hidden"
          textAlign="center"
          bgImage="url('/assets/images/healthcare.jpg')"
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: "rgba(17, 178, 178, 0.85)",
          }}
        >
          <Box position="relative" zIndex={1} py={16} px={6}>
            <Flex direction="column" align="center">
              <Heading
                as="h2"
                size="sm"
                color="white"
                textTransform="uppercase"
                mb={4}
              >
                Choose Your New Look And We Partner With You
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="light"
                color="white"
                mb={6}
              >
                Schedule your free consultation with one of our providers now to
                learn more and ask questions.
              </Heading>
              <Link href="/bookings" passHref>
                <Button
                  as="a"
                  colorScheme="yellow"
                  size="lg"
                  px={8}
                  borderRadius="full"
                  _hover={{ bg: "yellow.500" }}
                  transition="all 0.3s ease"
                >
                  Book Now
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
