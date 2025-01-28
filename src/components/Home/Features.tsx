"use client";
import { Box, Text, Heading, Grid, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export const Features: React.FC = () => {
  const services = [
    {
      title: "Weight Loss",
      description:
        "It is time to stop struggling to achieve your weight loss goals. At GIBA Medical Clinic, we understand your struggle. That's why we provide personalized care and professional guidance. We offer long-term and sustainable medical weight loss plans.",
      image: "/assets/images/weightLoss.jpg",
    },
    {
      title: "Hormone Optimization",
      description:
        "About 80% of women suffer from hormonal imbalances. Fatigue? Weight gain? Hair Loss? Depression? These are all clinical signs of hormone imbalance. Call us and let us work with you to get rid of these. You deserve to be happy.",
      image: "/assets/images/hormone.jpg",
    },
    {
      title: "Virtual Care/Membership",
      description:
        "We understand that life doesn't have to follow a schedule and health issues can arise at any time. That's why GIBA Medical Clinic is providing you with immediate access to trusted medical professionals from the comfort of your own home. Your health can no longer be placed on hold.",
      image: "/assets/images/healthcare.jpg",
    },
  ];

  return (
    <Box as="section" py={12} bg="gray.50">
      <Box maxW="7xl" mx="auto" px={6}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8} marginTop="-7%" style={{ position: "relative", zIndex: "1000", }}>
          {services.map((service, index) => (
            <Box
              key={index}
              bg="white"
              boxShadow="md"
              borderRadius="lg"
              overflow="hidden"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box position="relative" w="full" h="200px">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  className="img-responsive"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
              <Box p={6} textAlign="center">
                <Heading size="md" mb={4} color="#345995">
                  {service.title}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {service.description}
                </Text>
                <Button
                  as={Link}
                  href="#"
                  mt={4}
                  color="#BDA023"
                  variant="outline"
                  size="sm"
                >
                  Read More
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
