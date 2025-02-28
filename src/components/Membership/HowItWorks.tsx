"use client";
import { Box, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import { StepCard } from "../StepCard";
import { BsSearch, BsCartPlus } from "react-icons/bs";

export const HowMembershipWorks: React.FC = () => {
  return (
    <Box py={10} bg="gray.50">
      <Box maxW="6xl" mx="auto" px={6}>
        <Heading as="h2" size="xl" textAlign="center" mb={12} color="teal.600">
          How It Works
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </SimpleGrid>

        <Box textAlign="center" mt={12}>
          <Button
            as="a"
            colorScheme="yellow"
            size="lg"
            px={10}
            py={6}
            borderRadius="full"
            _hover={{ bg: "yellow.500", transform: "scale(1.05)" }}
            transition="all 0.3s ease"
            onClick={() => window.location.href = "/bookings"}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const steps = [
  {
    title: "Apply For Free",
    icon: BsSearch,
    bgColor: "teal.500",
    description:
      "Complete the online application. It takes only a few minutes to complete. Our healthcare provider will review your information.",
  },
  {
    title: "Set up Initial Visit",
    icon: BsCartPlus,
    bgColor: "green.500",
    description:
      "Schedule your initial visit with one of our experienced provider. You will receive personalized care.",
  },
];
