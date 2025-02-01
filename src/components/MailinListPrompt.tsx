"use client";
import { Box, Heading, Text, Input, Button, Flex } from "@chakra-ui/react";

export const MailingListPrompt = () => {
  return (
    <Box
      as="section"
      bg="blue.700"
      color="white"
      py={{ base: 12, md: 16 }}
      px={{ base: 6, md: 12 }}
      borderRadius="md"
      boxShadow="lg"
      maxW="6xl"
      mx="auto"
    >
      <Flex direction="column" align="center" textAlign="center">
        {/* Heading and Description */}
        <Heading as="h2" size="xl" fontWeight="bold" mb={4}>
          Join Our Mailing List
        </Heading>
        <Text fontSize="lg" mb={6}>
          Stay updated with the latest news, offers, and updates from us. Enter your email below to subscribe.
        </Text>

        {/* Email Input Form */}
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" w="full">
          <Input
            placeholder="Enter your email"
            size="lg"
            borderRadius="full"
            mb={{ base: 4, md: 0 }}
            maxW="400px"
            mr={{ base: 0, md: 4 }}
          />
          <Button
            bg="yellow.400"
            color="blue.700"
            size="lg"
            px={8}
            borderRadius="full"
            _hover={{ bg: "yellow.500" }}
            transition="all 0.3s ease"
          >
            Subscribe
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
