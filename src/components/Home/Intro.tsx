"use client";
import { Box, Text, Heading, Flex, Stack, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

export const Intro: React.FC = () => {
  return (
    <Box as="section" bg="gray.50" py={{ base: 12, md: 24 }} px={{ base: 6, md: 12 }}>
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
            maxW={{ base: "100%", md: "600px" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box mb={6} className="b">
              <Text
                fontSize="sm"
                color="teal.600"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Welcome to Giba Medical Clinic
              </Text>
              <Heading
                size={{ base: "lg", md: "xl" }}
                mb={4}
                color="gray.800"
                lineHeight="short"
                fontWeight="bold"
              >
                Your Virtual Gateway to Comprehensive Health & Well-Being
              </Heading>
            </Box>

            <VStack align={{ base: "center", md: "start" }} spacing={6} mb={6} className="b">
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" maxW="600px">
                GIBA is more than just a clinic – It&apos;s a sanctuary for healing, restoration, and transformation.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="600px">
                We believe that true health is not just the absence of disease but a <b>harmonious balance</b> 
                of <b>mind, body, and spirit</b>. Our <b>integrative approach</b> blends <b>modern medical advancements</b> 
                with <b>holistic therapies</b> to create lasting vitality.
              </Text>
              <Heading as="h3" size="lg" color="teal.600" mb={4}>
          Service Areas
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          align="center"
          justify="center"
        >
          {["Texas", "Vermont", "Arizona", "Delaware"].map((area) => (
            <motion.div
              key={area}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <Box
                bg="white"
                px={6}
                py={4}
                borderRadius="lg"
                boxShadow="lg"
                _hover={{
                  bg: "teal.50",
                  boxShadow: "xl",
                  transform: "scale(1.05)",
                }}
                transition="transform 0.3s ease, box-shadow 0.3s ease"
              >
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  color="teal.500"
                  textAlign="center"
                >
                  {area}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Stack>
            </VStack>

            {/* Call-to-Action Button */}
            <Box className="b">
              <Link href="/about">
                <Button
                  mt={6}
                  colorScheme="yellow"
                  size="lg"
                  px={8}
                  py={6}
                  borderRadius="full"
                  _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                  transition="all 0.3s"
                  fontWeight="semibold"
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </MotionBox>

          {/* Left Image as Background */}
          <MotionBox
            flex="1"
            position="relative"
            w="100%"
            maxW={{ base: "100%", md: "450px" }}
            h={{ base: "250px", md: "500px" }}
            bgImage="url('/assets/images/health0.jpg')"
            bgSize="cover"
            bgPosition="center"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </Flex>
      </Box>
    </Box>
  );
};
