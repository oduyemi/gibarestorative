"use client";
import { Box, Heading, Text, Grid, Flex, GridItem } from "@chakra-ui/react";

export const AboutIntro = () => {
  return (
    <Box as="section" bg="gray.100" py={{ base: 12, md: 16 }}>
      <Box maxW="6xl" mx="auto" px={6}>
        <Grid templateColumns={{ base: "1fr", md: "5fr 7fr" }} gap={10} alignItems="center">
          {/* Image Section */}
          <GridItem>
            <Box
              bgImage="url(/assets/images/child.jpg)"
              bgSize="cover"
              bgPosition="center"
              h={{ base: "250px", md: "400px" }}
              borderRadius="lg"
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
            />
          </GridItem>

          {/* Text Section */}
          <GridItem>
            <Flex direction="column" textAlign={{ base: "center", md: "left" }}>
              <Text
                fontSize="sm"
                color="blue.500"
                fontWeight="bold"
                textTransform="uppercase"
                mb={2}
                letterSpacing="wide"
              >
                About Us
              </Text>
              <Heading as="h2" size="xl" fontWeight="bold" mb={4} color="gray.800">
                GIBA Medical Clinic is committed to delivering personalized, telemedicine-based healthcare
                that fits seamlessly into your lifestyle.
              </Heading>
              <Text fontSize="lg" opacity={0.9} color="gray.600" maxW="2xl">
                Based in Rosenberg, Texas, we specialize in weight management, hormone optimization, and
                virtual urgent care, providing expert medical guidance from the comfort of your home.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
