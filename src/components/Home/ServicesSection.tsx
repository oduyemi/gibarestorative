"use client";
import { Box, Text, Heading, SimpleGrid, Flex, Icon, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaWeight, FaUserMd, FaLaptopMedical, FaHeartbeat } from "react-icons/fa";

export const ServicesSection: React.FC = () => {
  const services = [
    { 
      icon: FaWeight, 
      title: "Weight Loss Program", 
      description: "Schedule your free consultation with one of our providers now to learn more and ask questions.",
      link: "/weight-loss"
    },
    { 
      icon: FaUserMd, 
      title: "Hormone Replacement Therapy", 
      description: "Are you ready to improve your fertility and eliminate acne, fatigue, hair loss, weight gain, unwanted hair growth and mood swings?", 
      link:"/hormone-replacement"
    },
    { 
      icon: FaLaptopMedical, 
      title: "Virtual Visits", 
      description: "Get started right away at your own pace with a course that suits you, including a community of like-minded women.",
      link:"/virtual-visits" 
    },
    { 
      icon: FaHeartbeat, 
      title: "Direct Patient Care", 
      description: "We will personalize your care. This includes weekly dosing of medication, diet, and exercise plan.",
      link:"/patient-care" 
    },
  ];

  return (
    <Box as="section" py={20} bgGradient="linear(to-r, blue.50, white)">
      <Box maxW="6xl" mx="auto" textAlign="center" px={6}>
        {/* Section Title */}
        <Box mb={12}>
          <Text fontSize="lg" fontWeight="semibold" color="#008B8B" mb={2}>
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
              boxShadow="xl"
              borderRadius="2xl"
              transition="all 0.3s ease-in-out"
              minH="340px"
              _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
            >
              <Flex
                justify="center"
                align="center"
                w={20}
                h={20}
                bgColor="#008B8B"
                color="white"
                borderRadius="full"
                boxShadow="lg"
                transition="0.3s"
                _hover={{ transform: "rotate(10deg) scale(1.1)" }}
                mb={5}
              >
                <Icon as={pkg.icon} boxSize={10} />
              </Flex>
              <Heading size="md" mb={3} fontWeight="semibold" color="gray.800">
                {pkg.title}
              </Heading>
              <Text textAlign="center" color="gray.600" px={4} mb={4}>
                {pkg.description}
              </Text>
              <Link href={pkg.link}>
                <Button
                  colorScheme="yellow"
                  variant="solid"
                  size="lg"
                  px={6}
                  py={4}
                  fontWeight="semibold"
                  borderRadius="full"
                  transition="all 0.3s ease"
                  // _hover={{ bgGradient: "linear(to-r, blue.600, blue.700)" }}
                >
                  Learn More
                </Button>
              </Link>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};