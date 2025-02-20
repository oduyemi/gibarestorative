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
import { FaRegHeart, FaUsers } from "react-icons/fa";

export const HRTIntro = () => {
  return (
    <Box py={{ base: 5, md: 10 }}>
      <Box maxW="7xl" mx="auto" px={6}>
        <Grid templateColumns={{ base: "1fr", md: "5fr 7fr" }} gap={10} alignItems="center">
          {/* Image Section */}
          <GridItem>
            <Image
              src="/assets/images/hormone.jpg"
              alt="Child"
              h={{ base: "300px", md: "450px" }}
              borderRadius="xl"
              boxShadow="lg"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
            />
          </GridItem>
      <GridItem w="100%" display="block">
        {/* <Heading
          as="h2"
          mb={4}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="teal.600"
          textAlign={{ base: "center", md: "left" }}
        >
          Understanding Obesity & Management
        </Heading> */}
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          mb={4}
          textAlign={{ base: "center", md: "left" }}
          maxWidth="700px"
          mx="auto"
        >
          HRT is a medical therapy for hormonal imbalances. It is designed to alleviate symptoms associated with hormonal imbalances or deficiencies.
        </Text>
     


            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              mb={4}
              textAlign={{ base: "center", md: "left" }}
              maxWidth="700px"
              mx="auto"
            >
              BHRT is commonly used to treat symptoms of 
              menopause, but it can also be beneficial for 
              individuals with other hormonal disorders or 
              deficiencies, including hypogonadism, 
              thyroid disorders, and more.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              mb={6}
              textAlign={{ base: "center", md: "left" }}
              maxWidth="700px"
              mx="auto"
            >
              At GIBA, we offer personalized BHRT services 
              tailored to meet the unique needs of each 
              patient, ensuring optimal health and well-being.
            </Text>

            {/* Features Section */}
            <Flex direction={{ base: "column", md: "row" }} gap={6} justify="center" mt={6}>
              {/* Feature 1 */}
              <Flex align="center" mb={{ base: 4, md: 0 }} justify="center">
                <Box
                  w={12}
                  h={12}
                  bg="yellow.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  mr={4}
                  boxShadow="lg"
                >
                  <Icon as={FaRegHeart} color="yellow.500" boxSize={{ base: 5, md: 6 }} />
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="gray.600" textAlign="left">
                    Hormone imbalance affects your 
                    physical, emotional, or mental well-being.
                  </Text>
                </Box>
              </Flex>

              {/* Feature 2 */}
              <Flex align="center" justify="center">
                <Box
                  w={12}
                  h={12}
                  bg="red.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  mr={4}
                  boxShadow="lg"
                >
                  <Icon as={FaUsers} color="red.500" boxSize={{ base: 5, md: 6 }} />
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="gray.600" textAlign="left">
                    Weight gain, mood disorders, fatigue, 
                    sexual dysfunction, acne, hair loss, 
                    and hot flashes are some of the 
                    signs of hormonal imbalance.
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
            >
              Book Now
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
