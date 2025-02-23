"use client";
import { Box, Text, Heading, Button, VStack } from "@chakra-ui/react";
import Link  from "next/link";

export const Adipex: React.FC = () => {
  return (
    <Box
      bg="gray.50"
      py={{ base: 8, md: 12 }}
      px={{ base: 6, md: 8 }}
      textAlign="center"
      borderRadius="lg"
      boxShadow="lg"
    >
      <VStack spacing={6}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="teal.500"
        >
          ADIPEX/Phentermine: Your Partner in Effective Weight Loss
        </Heading>

        <Text
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          color="gray.600"
          maxWidth="800px"
          mx="auto"
          lineHeight="1.6"
        >
          Phentermine is a prescription medicine designed to help you achieve your weight
          loss goals. It acts as an appetite suppressant. Phentermine can enhance your
          weight loss journey significantly when combined with a healthy diet plan and exercise.
        </Text>

        <Text
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          color="gray.600"
          maxWidth="800px"
          mx="auto"
          lineHeight="1.6"
        >
          Let’s help you stop the late-night cravings that stop you from achieving your weight
          loss goal.
        </Text>

        <Link href="/bookings" passHref>
          <Button
            colorScheme="yellow"
            size="lg"
            fontWeight="bold"
            borderRadius="full"
            px={{ base: 8, sm: 10 }}
            py={{ base: 4, sm: 5 }}
            transition="all 0.3s ease"
            _hover={{
              bg: "teal.600",
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
          >
            Get Started Now
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

