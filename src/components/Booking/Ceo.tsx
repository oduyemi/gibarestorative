"use client";
import { Box, Text, Heading, Flex, IconButton, HStack } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";



export const Ceo: React.FC = () => {
  return (
    <Box py={10} bgGradient="linear(to-r, gray.50, white)">
      <Flex direction="column" align="center" maxW="6xl" mx="auto" px={4}>
        <Heading as="h3" size="xl" mb={4} textAlign="center" color="gray.700">
          Meet Chinyerem
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          bg="white"
          boxShadow="xl"
          borderRadius="xl"
          overflow="hidden"
          maxW="4xl"
          w="full"
        >
          <Box
            bgImage={`url(assets/images/ceo.jpg)`}
            bgPosition="center"
            bgSize="cover"
            minH={{ base: "300px", md: "auto" }}
            w={{ base: "full", md: "40%" }}
            position="relative"
          >
            <HStack
              spacing={3}
              position="absolute"
              bottom={4}
              left="50%"
              transform="translateX(-50%)"
            >
              {[FaFacebookF, FaTwitter, FaInstagram, FaBehance].map((Icon, idx) => (
                <IconButton
                  key={idx}
                  as="a"
                  href="#"
                  icon={<Icon />}
                  aria-label="Social Media Link"
                  colorScheme="teal"
                  variant="ghost"
                  size="lg"
                  _hover={{ transform: "scale(1.2)", transition: "0.3s" }}
                />
              ))}
            </HStack>
          </Box>

          <Box p={6} w={{ base: "full", md: "60%" }}>
            <Heading as="h4" size="md" mb={3} color="teal.600">
              Chinyerem Ariole, FNP-C
            </Heading>
            <Text fontSize="sm" color="gray.600" lineHeight="1.8">
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
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};