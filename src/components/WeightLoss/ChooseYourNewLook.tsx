"use client";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaCog, FaFire } from "react-icons/fa";

export const ChooseYourNewLook = () => {
  return (
    <Box py={{ base: 5, md: 10 }}>
      <Box maxW="7xl" mx="auto" px={6}>
        <Grid templateColumns={{ base: "1fr", md: "5fr 7fr" }} gap={10} alignItems="center">
          {/* Image Section */}
          <GridItem>
            <Image
              src="/assets/images/child.jpg"
              alt="Child"
              h={{ base: "300px", md: "450px" }}
              borderRadius="xl"
              boxShadow="lg"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
            />
          </GridItem>

          {/* Text Section */}
          <GridItem>
            <Heading as="h2" mb={4} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              Understanding Obesity & Management
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={4}>
              Obesity is a complex condition caused by excessive body fat, leading to serious health risks such as heart disease, diabetes, and high blood pressure. Traditional weight loss methods may not be sufficient, making medically supervised programs more effective.
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" mb={4}>
              At Giba, we analyze underlying causes like hormonal imbalances and health conditions to create personalized weight-loss plans for better results.
            </Text>

            {/* Features Section */}
            <Flex direction={{ base: "column", md: "row" }} gap={6} mt={6}>
              {/* Feature 1 */}
              <Flex align="center">
                <Box
                  w={12}
                  h={12}
                  bg="yellow.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  mr={4}
                >
                  <Icon as={FaCog} color="yellow.500" boxSize={6} />
                </Box>
                <Box>
                  <Heading as="h3" fontSize="lg" mb={1}>Versatile Brand</Heading>
                  <Text color="gray.600">We craft digital solutions that thrive across all platforms.</Text>
                </Box>
              </Flex>

              {/* Feature 2 */}
              <Flex align="center">
                <Box
                  w={12}
                  h={12}
                  bg="red.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  mr={4}
                >
                  <Icon as={FaFire} color="red.500" boxSize={6} />
                </Box>
                <Box>
                  <Heading as="h3" fontSize="lg" mb={1}>Digital Agency</Heading>
                  <Text color="gray.600">We drive innovation by blending bold and intricate ideas.</Text>
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
            >
              Learn More
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
