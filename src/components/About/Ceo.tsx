"use client";
import { Box, Text, Heading, Flex, IconButton, HStack, useBreakpointValue } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const Ceo: React.FC = () => {
  const bgColor = useBreakpointValue({ base: "gray.50", md: "white" });

  return (
    <Box py={10} bgGradient="linear(to-r, gray.50, white)">
      <Flex direction="column" align="center" maxW="7xl" mx="auto" px={4}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Heading as="h3" size="xl" mb={4} textAlign="center" color="gray.700" letterSpacing="wider">
            Meet Chinyerem
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            bg={bgColor}
            boxShadow="xl"
            borderRadius="xl"
            overflow="hidden"
            maxW="6xl"
            w="full"
            _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
            mx="auto"
          >
            <Box
              bgImage={`url(assets/images/ceo.jpg)`}
              bgPosition="center"
              bgSize="cover"
              minH={{ base: "300px", md: "auto" }}
              w={{ base: "full", md: "40%" }}
              position="relative"
              borderRadius="lg"
              boxShadow="md"
            >
              <HStack
                spacing={3}
                position="absolute"
                bottom={4}
                left="50%"
                transform="translateX(-50%)"
                opacity={0.8}
              >
                {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    key={idx}
                  >
                    <IconButton
                      as="a"
                      href=""
                      icon={<Icon />}
                      aria-label="Social Media Link"
                      colorScheme="teal"
                      variant="ghost"
                      size="lg"
                      _hover={{ transform: "scale(1.2)", transition: "0.3s" }}
                    />
                  </motion.div>
                ))}
              </HStack>
            </Box>

            <Box p={6} w={{ base: "full", md: "60%" }}>
              <Heading as="h4" size="md" mb={3} color="teal.600" letterSpacing="wide">
                Chinyerem Ariole, FNP-C
              </Heading>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1.2 }}
              >
                <Text fontSize="md" color="gray.600" lineHeight="1.8" textAlign="justify">
                  Chinyerem Ariole is a board-certified Family Nurse Practitioner with over five years of
                  experience as a provider and 17 years of nursing experience. Areas of expertise encompass
                  Urgent Care, Family Medicine, Chronic Care, Correctional Medicine, Weight Loss, and
                  women&apos;s health.
                  <br /><br />
                  She provides virtual consultations on services such as allergy, birth control, STD
                  management, weight loss, women&apos;s health, hormone therapy, prescription refills, chronic
                  disease, COVID-19 visits, and consultations for UTIs, ED, premature ejaculation, vaginal
                  infections, and yeast infections.
                  <br /><br />
                  A dedicated provider passionate about helping individuals achieve optimal health and
                  wellness, Chinyerem focuses on personalized care to manage weight, restore hormonal
                  balance, and improve well-being. She is committed to evidence-based treatments that
                  empower her patients to lead healthier, more fulfilling lives.
                </Text>
              </motion.div>
            </Box>
          </Flex>
        </motion.div>
      </Flex>
    </Box>
  );
};
