"use client";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { StepCard } from "../StepCard"; 
import { BsSearch, BsCartPlus, BsCreditCard } from "react-icons/bs";


export const HowItWorks: React.FC = () => {
  return (
    <Box py={10} bg="gray.100">
      <Box maxW="6xl" mx="auto" px={6}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          How It Works
        </Heading>

        <Flex wrap="wrap" justify="space-between" gap={8}>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </Flex>
      </Box>
        <Box className="mx-auto text-center mt-3">
          <Button
              as="a"
              colorScheme="yellow"
              size="lg"
              px={8}
              borderRadius="full"
              onClick={() => window.location.href = "/bookings"}
              _hover={{ bg: "yellow.500" }}
              transition="all 0.3s ease"
          >
              Book Now
          </Button>
        </Box>
    </Box>
  );
};

const steps = [
  {
    title: "Free Consultation",
    icon: BsSearch,
    bgColor: "blue.500",
    description:
      "Request a free (10min) virtual consultation. We'll explain our weight loss program, assess your fit, and order labs to ensure safety. Afterward, we'll schedule your initial visit and send intake forms.",
  },
  {
    title: "Initial Visit",
    icon: BsCartPlus,
    bgColor: "green.500",
    description:
      "After reviewing your lab results and intake forms, we’ll personalize your care plan, including medication, diet, and exercise. Your medication will be shipped for self-administration with a demo provided.",
  },
  {
    title: "Follow-Up Visit",
    icon: BsCreditCard,
    bgColor: "cyan.500",
    description:
      "You'll have 15-minute virtual visits every month to track progress. Your provider will always be available to address any concerns and ensure continued success on your journey.",
  },
];
