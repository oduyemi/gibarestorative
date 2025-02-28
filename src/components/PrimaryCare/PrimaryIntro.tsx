"use client";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Button,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaRegHeart, FaUsers } from "react-icons/fa";

export const PrimaryIntro = () => {
  return (
    <Box py={{ base: 6, md: 12 }} bg="gray.50">
      <Box maxW="7xl" mx="auto" px={{ base: 6, md: 8 }}>
        <Grid templateColumns={{ base: "1fr", md: "5fr 7fr" }} gap={10} alignItems="center">
          {/* Image Section */}
          <GridItem>
            <Image
              src="/assets/images/pry-care.png"
              alt="Direct Primary Care"
              h={{ base: "300px", md: "450px" }}
              borderRadius="xl"
              boxShadow="lg"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
            />
          </GridItem>

          {/* Content Section */}
          <GridItem w="100%" display="block">
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              mb={4}
              textAlign={{ base: "center", md: "left" }}
              maxWidth="700px"
              mx="auto"
            >
              Direct Primary Care (DPC) offers comprehensive healthcare for routine check-ups and the management of chronic conditions like diabetes. Our goal is to provide personalized and continuous care to improve your overall well-being.
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              mb={4}
              textAlign={{ base: "center", md: "left" }}
              maxWidth="700px"
              mx="auto"
            >
              Whether you need regular screenings, preventive care, or ongoing treatment for chronic illnesses, our DPC model ensures accessible and affordable healthcare without the hassle of insurance-based limitations.
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              mb={6}
              textAlign={{ base: "center", md: "left" }}
              maxWidth="700px"
              mx="auto"
            >
              With GIBA’s Direct Primary Care, you receive high-quality, uninterrupted medical attention tailored to your unique needs.
            </Text>

            {/* Features Section */}
            <Flex direction={{ base: "column", md: "row" }} gap={6} justify="center" mt={6}>
              {/* Feature 1 */}
              <Flex align="center" mb={{ base: 4, md: 0 }} justify="center">
                <Box
                  w={12}
                  h={12}
                  bg="teal.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  mr={4}
                  boxShadow="lg"
                >
                  <Icon as={FaRegHeart} color="teal.500" boxSize={{ base: 5, md: 6 }} />
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="gray.600" textAlign="left">
                    Routine check-ups and preventive screenings to maintain long-term health.
                  </Text>
                </Box>
              </Flex>

              {/* Feature 2 */}
              <Flex align="center" justify="center">
                <Box
                  w={12}
                  h={12}
                  bg="green.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  mr={4}
                  boxShadow="lg"
                >
                  <Icon as={FaUsers} color="green.500" boxSize={{ base: 5, md: 6 }} />
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="gray.600" textAlign="left">
                    Chronic disease management, including diabetes, hypertension, and more.
                  </Text>
                </Box>
              </Flex>
            </Flex>

            {/* CTA Button */}
            <Button
              mt={8}
              size="lg"
              colorScheme="yellow"
              borderRadius="full"
              px={8}
              _hover={{ bg: "yellow.500", transform: "scale(1.05)" }}
              transition="all 0.3s ease"
              display="block"
              mx="auto"
              onClick={() => window.location.href = "/bookings"}
            >
              Schedule a Consultation
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
