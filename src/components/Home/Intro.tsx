"use client";
import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";

export const Intro: React.FC = () => {
  return (
    <Box as="section" bg="gray.50" py={{ base: 10, md: 20 }}>
      <Box maxW="7xl" mx="auto" px={6}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={10}
        >
          {/* Left Image */}
          <Box
            flex="1"
            position="relative"
            w="full"
            h={{ base: "300px", md: "450px" }}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
          >
            <Image
              src="/assets/images/health0.jpg"
              alt="CEO"
            //   layout="fill"
              objectFit="cover"
            />
          </Box>

          {/* Right Content */}
          <Box flex="1">
            <Box mb={8}>
              <Text fontSize="sm" color="#345995" fontWeight="bold" mb={2}>
                Welcome to Giba Medical Clinic
              </Text>
              <Heading size="lg" mb={4} color="gray.800">
			  	Your virtual gateway to comprehensive health and well-being.
              </Heading>
            </Box>

            <Text fontSize="md" color="gray.600" mb={4}>
              GIBA is more than just a clinic – It’s a sanctuary for healing, restoration, and transformation.
            </Text>
            <Text fontSize="md" color="gray.600">
              At GIBA, we believe that true health encompasses not only the absence of disease but also the balance of mind, body, and spirit. Our integrative approach combines the latest advances in modern medicine with time-tested holistic therapies to address the root causes of health issues and promote lasting vitality.
            </Text>

            {/* Founder Section */}
            <Flex align="center" mt={8} bg="white" p={4} borderRadius="lg" boxShadow="md">
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
        </Flex>
      </Box>
    </Box>
  );
};
