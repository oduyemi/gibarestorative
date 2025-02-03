"use client";
import { Box, Text, Heading, Button, SimpleGrid, Icon, Flex } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";
import { GiHealthNormal, GiLifeSupport, GiStethoscope, GiWeightLiftingUp } from "react-icons/gi"; // Updated import
import Link from "next/link";

export const Services: React.FC = () => {
  return (
    <section className="bg-light py-3 py-md-5 py-xl-8 mx-auto">
      <Flex
        className="container overflow-hidden"
        direction="column"
        alignItems="center"
        justifyContent="center"
        mx="auto"
      >
        <Box className="row gy-4 gy-md-5 gy-lg-0 align-items-center mx-auto">
          <Box className="col-12 col-lg-5">
            <Heading as="h2" color="teal.600" mb={4} textTransform="uppercase">
              What We Do?
            </Heading>
            <Heading as="h3" size="xl" mb={4}>
              We provide comprehensive, telemedicine-based healthcare designed to help you achieve lasting wellness.
            </Heading>
            <Text mb={4}>
              Our expert team specializes in weight management, hormone optimization, and virtual urgent care,
              offering personalized treatment plans tailored to your unique health goals.
              <br /><br />
              With a holistic approach that blends modern medicine with proven wellness strategies, we empower you
              to take control of your health—anytime, anywhere.
              <br /><br />
              Explore our services below and discover how we can support your journey to a healthier, happier you.
            </Text>
            <Link href="/about">
              <Button bg="#BDA023" size="lg" borderRadius="full" rightIcon={<BiRightArrowAlt />}>
                About Us
              </Button>
            </Link>
          </Box>
          <Box className="col-12 col-lg-7 overflow-hidden">
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 2 }} spacing={6}>
              <Box bg="white" p={5} borderRadius="md" boxShadow="lg" _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}>
                <Icon as={GiLifeSupport} boxSize={12} color="teal.500" mb={4} />
                <Heading as="h4" size="md" mb={2} color="gray.800">
                  Hormone Therapy Replacement
                </Heading>
                <Text mb={4} color="gray.600">
                  We offer personalized BHRT services tailored to meet the unique needs of each patient, ensuring
                  optimal health and well-being.
                </Text>
                <Link href="/hormone-replacement" passHref>
                  <Button variant="link" colorScheme="teal" rightIcon={<BiRightArrowAlt />}>
                    Learn More
                  </Button>
                </Link>
              </Box>

              <Box bg="white" p={5} borderRadius="md" boxShadow="lg" _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}>
                <Icon as={GiStethoscope} boxSize={12} color="teal.500" mb={4} />
                <Heading as="h4" size="md" mb={2} color="gray.800">
                  Patient Care
                </Heading>
                <Text mb={4} color="gray.600">
                  Our team offers dedicated care, ensuring that your health needs are met with the utmost professionalism and empathy.
                </Text>
                <Link href="/patient-care" passHref>
                  <Button variant="link" colorScheme="teal" rightIcon={<BiRightArrowAlt />}>
                    Learn More
                  </Button>
                </Link>
              </Box>

              <Box bg="white" p={5} borderRadius="md" boxShadow="lg" _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}>
                <Icon as={GiHealthNormal} boxSize={12} color="teal.500" mb={4} />
                <Heading as="h4" size="md" mb={2} color="gray.800">
                  Virtual Visits
                </Heading>
                <Text mb={4} color="gray.600">
                  Consult with our healthcare professionals virtually, giving you the convenience and accessibility you need to stay on top of your health.
                </Text>
                <Link href="/virtual-care" passHref>
                  <Button variant="link" colorScheme="teal" rightIcon={<BiRightArrowAlt />}>
                    Learn More
                  </Button>
                </Link>
              </Box>

              {/* Updated Weight Loss Program Section */}
              <Box bg="white" p={5} borderRadius="md" boxShadow="lg" _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}>
                <Icon as={GiWeightLiftingUp} boxSize={12} color="teal.500" mb={4} />
                <Heading as="h4" size="md" mb={2} color="gray.800">
                  Weight Loss Program
                </Heading>
                <Text mb={4} color="gray.600">
                  Our Weight Loss Program combines personalized meal plans, exercise routines, and continuous support to help you reach your weight loss goals effectively.
                </Text>
                <Link href="/weight-loss" passHref>
                  <Button variant="link" color="teal.500" rightIcon={<BiRightArrowAlt />}>
                    Learn More
                  </Button>
                </Link>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </section>
  );
};
