"use client";
import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";

export const Intro: React.FC = () => {
  return (
    <Box as="section" bg="gray.50" py={{ base: 10, md: 20 }}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6 }}>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 6, md: 12 }}
          flexWrap="wrap"
        >
          {/* Right Content (First on Mobile) */}
          <Box flex="1" textAlign={{ base: "center", md: "left" }} maxW={{ base: "100%", md: "80%" }}>
            <Box mb={6}>
              <Text fontSize="sm" color="#345995" fontWeight="bold" mb={2}>
                Welcome to Giba Medical Clinic
              </Text>
              <Heading size={{ base: "md", md: "lg" }} mb={4} color="gray.800">
                Your virtual gateway to comprehensive health and well-being.
              </Heading>
            </Box>

            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb={4}>
              GIBA is more than just a clinic – It’s a sanctuary for healing, restoration, and transformation.
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              At GIBA, we believe that true health encompasses not only the absence of disease but also the balance of mind, body, and spirit. Our integrative approach combines modern medical advances with time-tested holistic therapies to promote lasting vitality.
            </Text>

            {/* Founder Section */}
            <Flex align="center" mt={8} bg="white" p={4} borderRadius="lg" boxShadow="md" flexWrap="wrap" justify={{ base: "center", md: "start" }}>
              <Image
                src="/assets/images/ceo.jpg"
                alt="Cynthia Hunter"
                boxSize={{ base: "50px", md: "60px" }}
                borderRadius="full"
                objectFit="cover"
              />
              <Box ml={{ base: 2, md: 4 }} textAlign={{ base: "center", md: "left" }}>
                <Heading size="sm" color="gray.700">
                  Chinyerem Ariole
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  FNP-C
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Left Image (Below on Mobile) */}
          <Box
            flex="1"
            position="relative"
            w="100%"
            maxW={{ base: "100%", md: "450px" }}
            aspectRatio="16/9"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
          >
            <Image
              src="/assets/images/health0.jpg"
              alt="CEO"
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
