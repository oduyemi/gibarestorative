"use client";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { StepCard } from "../StepCard"; 
import { BsSearch, BsCartPlus } from "react-icons/bs";


export const HowMembershipWorks: React.FC = () => {
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
                    _hover={{ bg: "yellow.500" }}
                    transition="all 0.3s ease"
                    onClick={() => window.location.href = "/bookings"}
                >
                    Book Now
                </Button>
        </Box>
    </Box>
  );
};

const steps = [
  {
    title: "Apply For Free",
    icon: BsSearch,
    bgColor: "blue.500",
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
