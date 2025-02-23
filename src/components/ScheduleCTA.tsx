"use client";
import { Box, Heading, Button, Flex, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Schedule = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box py={5} bg="gray.900">
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6 }}>
        {isClient && (
          <Box
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"
            bgImage="url('/assets/images/healthcare.jpg')"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: "rgba(17, 178, 178, 0.7)",
            }}
          >
            <Box position="relative" zIndex={1} py={16} px={{ base: 4, md: 6 }}>
              <VStack spacing={6} align="center" justify="center">
                {/* Animated Heading */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Heading
                    as="h2"
                    size="sm"
                    color="white"
                    textTransform="uppercase"
                    fontWeight="bold"
                    letterSpacing="wide"
                    mb={4}
                  >
                    Choose Your New Look And We Partner With You
                  </Heading>
                </motion.div>

                {/* Animated Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="light"
                    color="white"
                    maxW="2xl"
                    mx="auto"
                    mb={6}
                    lineHeight={1.4}
                  >
                    Schedule your free consultation with one of our providers now to
                    learn more and ask questions.
                  </Heading>
                </motion.div>

                {/* Animated Button */}
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="/bookings" passHref>
                    <Button colorScheme="yellow" size="lg" px={8} borderRadius="full">
                      Book Now
                    </Button>
                  </Link>
                </motion.div>
              </VStack>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
