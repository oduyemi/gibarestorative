"use client";
import { useState, useEffect } from "react";
import { Box, Heading, Text, Grid, Flex, GridItem, Stack,Spinner, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const AboutIntro = () => {
  const [areas, setAreas] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch("https://giba.vercel.app/api/v1/area");
        if (!response.ok) {
          throw new Error("Failed to fetch areas");
        }
        const data = await response.json();
        setAreas(data.map((area: { name: string }) => area.name));
        setError(null);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false); // ✅ Now using setLoading to update state
      }
    };
  
    fetchAreas();
  }, []);

  return (
    <Box
      as="section"
      bgGradient="linear(to-r, teal.50, gray.100)"
      py={{ base: 12, md: 16 }}
      position="relative"
      overflow="hidden"
    >
      {/* Hero Background Animation */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
        bgGradient="linear(to-r, teal.100, teal.300)"
        animation="pulseBackground 3s infinite"
      />
      <Box maxW="7xl" mx="auto" px={6}>
        <Grid templateColumns={{ base: "1fr", md: "5fr 7fr" }} gap={12} alignItems="center">
          {/* Image Section with Parallax Effect */}
          <GridItem>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ overflow: "hidden" }}
            >
              <Box
                bgImage="url(/assets/images/abtt.png)"
                bgSize="cover"
                bgPosition="center"
                h={{ base: "300px", md: "450px" }}
                borderRadius="lg"
                boxShadow="lg"
                position="relative"
                zIndex={1}
                transition="all 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "xl",
                  filter: "brightness(1.1)",
                }}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgGradient: "linear(to-t, rgba(0, 0, 0, 0.6), transparent)",
                  zIndex: 0,
                }}
              />
            </motion.div>
          </GridItem>

          {/* Text Section */}
          <GridItem>
            <Flex direction="column" textAlign={{ base: "center", md: "left" }} color="gray.700">
              <Text
                fontSize="sm"
                color="teal.500"
                fontWeight="bold"
                textTransform="uppercase"
                mb={2}
                letterSpacing="wide"
                textShadow="0 1px 3px rgba(0, 0, 0, 0.1)"
              >
                About Us
              </Text>
              <Heading
                as="h2"
                size="2xl"
                fontWeight="extrabold"
                mb={4}
                color="gray.700" // Softer gray instead of black
                lineHeight="short"
                textShadow="1px 1px 3px rgba(0, 0, 0, 0.1)"
              >
                GIBA Medical Clinic is committed to delivering personalized healthcare
                that fits seamlessly into your lifestyle.
              </Heading>
              <Text fontSize="lg" opacity={0.85} color="gray.600" maxW="2xl" mb={6}>
                We specialize in weight management, hormone optimization, and
                virtual urgent care, providing expert medical guidance from the comfort of your home.
              </Text>

              {/* Service Areas Section */}
              <Heading as="h3" size="lg" color="teal.600" mb={4}>
                Service Areas
              </Heading>
              {loading ? (
                <Spinner color="teal.500" />
              ) : error ? (
                <Text color="red.500">{error}</Text>
              ) : (
                <Stack
                  direction={{ base: "column", md: "row" }}
                  spacing={8}
                  align="center"
                  justify="center"
                >
                  {areas.map((area) => (
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
              )}
            </Flex>
          </GridItem>
        </Grid>

        {/* Call to Action Button, fixed bottom with responsive margin */}
        <Flex justify="center" mt={12}>
          <Button
            size="lg"
            colorScheme="yellow"
            variant="solid"
            mb={{ base: 8, md: 16 }}
            _hover={{
              bg: "yellow.600",
              transform: "scale(1.05)",
            }}
            _focus={{ boxShadow: "0 0 0 3px" }}
            borderRadius="full"
            p={{ base: 4, md: 6 }}
            fontWeight="bold"
          >
            Get Started
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
