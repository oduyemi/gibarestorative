"use client";
import { Box, Text, Flex, VStack, Divider } from "@chakra-ui/react";

export const WorkingHours = () => {
  const workingHours = [
    { day: "Mon", hours: "09:00 am – 05:00 pm" },
    { day: "Tue", hours: "09:00 am – 05:00 pm" },
    { day: "Wed", hours: "09:00 am – 05:00 pm" },
    { day: "Thu", hours: "09:00 am – 05:00 pm" },
    { day: "Fri", hours: "09:00 am – 05:00 pm" },
    { day: "Sat", hours: "Closed" },
    { day: "Sun", hours: "Closed" },
  ];

  return (
    <Box p={6} bg="gray.50" boxShadow="lg" borderRadius="lg" maxW="600px" mx="auto">
      <VStack spacing={6}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="#345995">
          Our Working Hours
        </Text>
        
        {/* Display working hours */}
        <Box width="full" borderWidth={1} borderRadius="md" overflow="hidden" bg="white">
          {workingHours.map((entry, index) => (
            <Box 
              key={entry.day} 
              p={4} 
              _hover={{ bg: "blue.50" }} 
              bg={index % 2 === 0 ? "gray.100" : "white"}
              transition="background-color 0.2s ease"
            >
              <Flex justify="space-between" align="center">
                <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                  {entry.day}
                </Text>
                <Text fontSize="lg" color={entry.hours === "Closed" ? "red.500" : "gray.600"}>
                  {entry.hours}
                </Text>
              </Flex>
              <Divider my={2} />
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};
