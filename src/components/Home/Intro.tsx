"use client";
import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";

export const Intro: React.FC = () => {
  return (
    <Box as="section" bg="gray.50" py={{ base: 12, md: 20 }}>
      <Box maxW="7xl" mx="auto" px={6}>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 8, md: 12 }}
        >
          {/* Right Content (Now First on Mobile) */}
          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            <Box mb={6}>
              <Text fontSize="sm" color="#345995" fontWeight="bold" mb={2}>
                Welcome to Giba Medical Clinic
              </Text>
              <Heading size={{ base: "lg", md: "xl" }} mb={4} color="gray.800">
                Your virtual gateway to comprehensive health and well-being.
              </Heading>
            </Box>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={4}>
              GIBA is more than just a clinic – It’s a sanctuary for healing, restoration, and transformation.
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              At GIBA, we believe that true health encompasses not only the absence of disease but also the balance of mind, body, and spirit. Our integrative approach combines modern medical advances with time-tested holistic therapies to promote lasting vitality.
            </Text>

            {/* Founder Section */}
            <Flex align="center" mt={8} bg="white" p={4} borderRadius="lg" boxShadow="md" flexWrap="wrap">
              <Image
                src="/assets/images/ceo.jpg"
                alt="Cynthia Hunter"
                boxSize="60px"
                borderRadius="full"
                objectFit="cover"
              />
              <Box ml={4}>
                <Heading size="sm" color="gray.700">
                  Chinyerem Ariole
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  FNP-C
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Left Image (Now Below on Mobile) */}
          <Box
            flex="1"
            position="relative"
            maxW="100%"
            aspectRatio={{ base: 4 / 3, md: 16 / 9 }}
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
