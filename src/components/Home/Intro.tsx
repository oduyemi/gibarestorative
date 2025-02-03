"use client";
import { Box, Text, Heading, Flex, Image, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

export const Intro: React.FC = () => {
  return (
    <Box as="section" bg="gray.50" py={{ base: 12, md: 24 }}>
      <Box maxW="7xl" mx="auto" px={{ base: 6, md: 12 }}>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 8, md: 16 }}
          flexWrap="wrap"
        >
          {/* Right Content (Text Section) */}
          <MotionBox
            flex="1"
            textAlign={{ base: "center", md: "left" }}
            maxW={{ base: "100%", md: "50%" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box mb={6}>
              <Text fontSize="sm" color="blue.600" fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
                Welcome to Giba Medical Clinic
              </Text>
              <Heading size={{ base: "lg", md: "xl" }} mb={4} color="gray.800" lineHeight="short">
                Your Virtual Gateway to Comprehensive Health & Well-Being
              </Heading>
            </Box>

            <VStack align={{ base: "center", md: "start" }} spacing={4}>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" maxW="600px">
                GIBA is more than just a clinic – It’s a sanctuary for healing, restoration, and transformation.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="600px">
                We believe that true health is not just the absence of disease but a **harmonious balance** of **mind, body, and spirit**. Our **integrative approach** blends **modern medical advancements** with **holistic therapies** to create lasting vitality.
              </Text>
            </VStack>

            {/* Call-to-Action Button */}
            <Link href="/about">
              <Button 
                mt={6}
                color="white" 
                bgColor="#BDA023" 
                size="lg" 
                px={8} 
                py={6} 
                borderRadius="full"
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                transition="all 0.3s"
              >
                Learn More
              </Button>
            </Link>
          </MotionBox>

          {/* Left Image */}
          <MotionBox
            flex="1"
            position="relative"
            w="100%"
            maxW={{ base: "100%", md: "450px" }}
            h={{ base: "250px", md: "500px" }} 
            borderRadius="xl"
            overflow="hidden"
            boxShadow="2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/assets/images/health0.jpg"
              alt="Medical Team"
              objectFit="cover"
              w="100%"
              h="100%" 
              transition="transform 0.4s"
              _hover={{ transform: "scale(1.05)" }}
            />
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  );
};
