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
  Card,
  CardBody,
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
              src="/assets/images/weightscale.jpg"
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
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" mb={6}>
              At Giba, we analyze underlying causes like hormonal imbalances and health conditions to create personalized weight-loss plans for better results.
            </Text>

            {/* Features Section */}
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
              {/* Feature 1 */}
              <Card borderRadius="xl" boxShadow="md" p={4} transition="all 0.3s" _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}>
                <CardBody>
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
                      <Heading as="h3" fontSize="lg" mb={1}>Semaglutide/Tirzepatide</Heading>
                      <Text color="gray.600" fontSize="sm">Invest in your health for just <b>$299/month</b>.</Text>
                    </Box>
                  </Flex>
                    <Button
                      mt={4}
                      size="md"
                      colorScheme="yellow"
                      borderRadius="full"
                      w="full"
                      onClick={() => window.location.href = "/bookings"}
                      _hover={{ bg: "yellow.500", transform: "scale(1.05)" }}
                    >
                      Start Now
                    </Button>
                </CardBody>
              </Card>

              {/* Feature 2 */}
              <Card borderRadius="xl" boxShadow="md" p={4} transition="all 0.3s" _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}>
                <CardBody>
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
                      <Heading as="h3" fontSize="lg" mb={1}>Adipex/Phentermine</Heading>
                      <Text color="gray.600" fontSize="sm">Invest in your health for just <b>$299/month</b>.</Text>
                    </Box>
                  </Flex>
                    <Button
                      mt={4}
                      size="md"
                      colorScheme="yellow"
                      borderRadius="full"
                      w="full"
                      onClick={() => window.location.href = "/bookings"}
                      _hover={{ bg: "yellow.500", transform: "scale(1.05)" }}
                    >
                      Start Now
                    </Button>
                </CardBody>
              </Card>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
