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
      image: "/assets/images/weight.jpg",
      link:"/weightloss"
    },
    {
      title: "Hormone Optimization",
      description:
        "About 80% of women suffer from hormonal imbalances. Fatigue? Weight gain? Hair Loss? Depression? These are all clinical signs of hormone imbalance. Call us and let us work with you to get rid of these. You deserve to be happy.",
      image: "/assets/images/doctor3.jpg",
      link: "/hormone-replacement"
    },
    {
      title: "Virtual Care/Membership",
      description:
        "We understand that life doesn't have to follow a schedule and health issues can arise at any time. That's why GIBA Medical Clinic is providing you with immediate access to trusted medical professionals from the comfort of your own home. Your health can no longer be placed on hold.",
      image: "/assets/images/vcare.jpg",
      link:"/virtual-care"
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
              <Box position="relative" w="full" h="200px" className="b">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  className="img-responsive img-fluid"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
              <Box p={6} textAlign="center" className="b space">
                <Heading size="md" mb={4} color="#008B8B" className="dHead">
                  {service.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" className="dHead">
                  {service.description}
                </Text>
                <Button
                  as={Link}
                  href={service.link}
                  mt={4}
                  color="yellow.400"
                  borderColor="yellow.400"
                  variant="outline"
                  size="lg"
                  fontWeight="semibold"
                  borderRadius="full"
                  transition="all 0.3s ease"
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