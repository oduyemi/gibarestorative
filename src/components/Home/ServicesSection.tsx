"use client";
import { Box, Text, Heading, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaFirstAid } from "react-icons/fa";

export const ServicesSection: React.FC = () => {
  const services = [
    { icon: FaAppleAlt, title: "Package 1" },
    { icon: FaDumbbell, title: "Package 2" },
    { icon: FaHeartbeat, title: "Package 3" },
    { icon: FaFirstAid, title: "Package 4" },
  ];

  return (
    <Box as="section" py={20} bgGradient="linear(to-r, blue.50, white)">
      <Box maxW="6xl" mx="auto" textAlign="center" px={6}>
        {/* Section Title */}
        <Box mb={12}>
          <Text fontSize="lg" fontWeight="semibold" color="blue.600" mb={2}>
            Our Services
          </Text>
          <Heading size="xl" fontWeight="bold" color="gray.800">
            Our Affordable Packages
          </Heading>
        </Box>

        {/* Service Packages */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {services.map((pkg, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              p={8}
              bg="white"
              boxShadow="lg"
              borderRadius="2xl"
              transition="all 0.3s ease-in-out"
              minH="280px"
              _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
            >
              <Flex
                justify="center"
                align="center"
                w={20}
                h={20}
                bg="blue.500"
                color="white"
                borderRadius="full"
                boxShadow="lg"
                transition="0.3s"
                _hover={{ bg: "blue.600", transform: "rotate(10deg)" }}
                mb={5}
              >
                <Icon as={pkg.icon} boxSize={10} />
              </Flex>
              <Heading size="md" mb={3} fontWeight="semibold">
                {pkg.title}
              </Heading>
              <Text textAlign="center" color="gray.600" px={4}>
                Discover premium services tailored to meet your needs with
                reliability and affordability.
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
