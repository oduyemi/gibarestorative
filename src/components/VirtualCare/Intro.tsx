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

export const VirtualIntro = () => {
  return (
    <Box py={{ base: 5, md: 10 }}>
      <Box maxW="7xl" mx="auto" px={6}>
        <Grid templateColumns={{ base: "1fr", md: "5fr 7fr" }} gap={10} alignItems="center">
          {/* Image Section */}
          <GridItem>
            <Image
              src="/assets/images/vcare1.jpeg"
              alt="Virtual Consultation"
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
              Our Virtual Visit service provides convenient 
              access to expert healthcare from the comfort 
              of your home. With secure video consultations, 
              you can connect with our specialists to receive 
              personalized care and medical advice.
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              mb={4}
              textAlign={{ base: "center", md: "left" }}
              maxWidth="700px"
              mx="auto"
            >
              Whether you need follow-up consultations, 
              prescription refills, or medical guidance, 
              our virtual care platform ensures seamless 
              and timely assistance tailored to your needs.
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              mb={6}
              textAlign={{ base: "center", md: "left" }}
              maxWidth="700px"
              mx="auto"
            >
              Experience hassle-free healthcare with 
              GIBA&apos;s Virtual Visit—bringing quality 
              medical expertise to your doorstep.
            </Text>

            {/* Features Section */}
            <Flex direction={{ base: "column", md: "row" }} gap={6} justify="center" mt={6}>
              {/* Feature 1 */}
              <Flex align="center" mb={{ base: 4, md: 0 }} justify="center">
                <Box
                  w={12}
                  h={12}
                  bg="blue.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  mr={4}
                  boxShadow="lg"
                >
                  <Icon as={FaRegHeart} color="blue.500" boxSize={{ base: 5, md: 6 }} />
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="gray.600" textAlign="left">
                    Secure and private virtual consultations 
                    with experienced healthcare providers.
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
                    Convenient access to expert medical care without leaving your home.
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
              _hover={{ bg: "blue.500", transform: "scale(1.05)" }}
              transition="all 0.3s ease"
              display="block"
              mx="auto"
            >
              Schedule a Virtual Visit
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
