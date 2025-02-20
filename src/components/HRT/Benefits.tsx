"use client";
import { 
  Box, Text, Heading, Grid, GridItem, VStack, Icon, Stack 
} from "@chakra-ui/react";
import { FaHeartbeat, FaNotesMedical } from "react-icons/fa";

export const HRTBenefits: React.FC = () => {
  return (
    <Box 
      as="section" 
      bgGradient="linear(to-b, teal.50, white)" 
      py={{ base: 12, md: 20 }} 
      px={6}
    >
      {/* Section Header */}
      <Box maxW="5xl" mx="auto" textAlign="center" mb={12}>
        <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="teal.600">
          Benefits & Treatment Plans
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mt={3}>
          Discover how our hormone replacement therapy can enhance your well-being.
        </Text>
      </Box>

      {/* Benefits Grid */}
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
        gap={8} 
        maxW="5xl" 
        mx="auto"
      >
        {/* Benefits of HRT */}
        <GridItem>
          <Box
            bg="white"
            p={8}
            boxShadow="xl"
            borderRadius="lg"
            textAlign="left"
            _hover={{ transform: "scale(1.03)", transition: "0.3s ease-in-out" }}
            backdropFilter="blur(10px)"
            border="1px solid rgba(0, 0, 0, 0.1)"
          >
            <Stack direction="row" align="center" mb={4}>
              <Icon as={FaHeartbeat} boxSize={8} color="teal.500" />
              <Heading as="h3" fontSize="2xl" color="teal.500">
                Benefits of HRT
              </Heading>
            </Stack>
            <Text fontSize="lg" fontWeight="medium" color="gray.700" mb={5}>
              A scientifically backed treatment improving well-being.
            </Text>
            <VStack as="ul" align="start" spacing={4}>
              <Text as="li">✅ Reduces menopausal symptoms like hot flashes & night sweats.</Text>
              <Text as="li">✅ Improves bone health, preventing osteoporosis.</Text>
              <Text as="li">✅ Boosts mood, reduces anxiety & depression.</Text>
              <Text as="li">✅ Enhances sleep quality & relaxation.</Text>
              <Text as="li">✅ Supports sexual health & libido.</Text>
            </VStack>
          </Box>
        </GridItem>

        {/* Personalized Treatment Plans */}
        <GridItem>
          <Box
            bg="white"
            p={8}
            boxShadow="xl"
            borderRadius="lg"
            textAlign="left"
            _hover={{ transform: "scale(1.03)", transition: "0.3s ease-in-out" }}
            backdropFilter="blur(10px)"
            border="1px solid rgba(0, 0, 0, 0.1)"
          >
            <Stack direction="row" align="center" mb={4}>
              <Icon as={FaNotesMedical} boxSize={8} color="teal.500" />
              <Heading as="h3" fontSize="2xl" color="teal.500">
                Personalized Treatment Plans
              </Heading>
            </Stack>
            <Text fontSize="lg" fontWeight="medium" color="gray.700" mb={5}>
              Tailored solutions designed for optimal results.
            </Text>
            <VStack as="ul" align="start" spacing={4}>
              <Text as="li">🔹 Comprehensive medical & lifestyle assessment.</Text>
              <Text as="li">🔹 Advanced hormone testing & diagnosis.</Text>
              <Text as="li">🔹 Custom HRT plans tailored to individual needs.</Text>
              <Text as="li">🔹 Continuous progress monitoring & plan adjustments.</Text>
              <Text as="li">🔹 Lifestyle recommendations for best results.</Text>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
