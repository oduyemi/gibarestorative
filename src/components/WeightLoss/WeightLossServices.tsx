"use client";
import { Box, Text, Heading, Button, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const WeightLossServices = () => {
  return (
    <Box maxW="7xl" mx="auto" py={{ base: 10, md: 14 }} px={{ base: 6, md: 10 }}>
      {/** HEADER SECTION */}
      <Heading
        as="h1"
        size="2xl"
        textAlign="center"
        mb={8}
        bgGradient="linear(to-r, teal.500, yellow.400)"
        bgClip="text"
        fontWeight="bold"
      >
        Weight Loss Services
        <Text as="small" display="block" fontSize="lg" color="gray.500">
          Transform Your Health & Well-being
        </Text>
      </Heading>

      {/** SERVICE LIST */}
      {[
        {
          title: "Semaglutide/Tirzepatide",
          description:
            "Cutting-edge medications designed to help you achieve and maintain long-term weight loss goals effectively.",
          image: "/assets/images/sema.jpg",
          link: "/weightloss/semaglutide-tirzepatide",
        },
        {
          title: "ADIPEX/Phentermine",
          description:
            "A powerful appetite suppressant that works best when combined with a healthy diet and exercise.",
          image: "/assets/images/adipex.jpg",
          link: "/weightloss/adipex-phentermine",
        },
        {
          title: "Lipo-C and Vitamin B12",
          description:
            "Boost your metabolism with Lipo-C and Vitamin B12 injections, designed to enhance fat-burning and energy levels.",
          image: "/assets/images/lipo.jpg",
          link: "/weightloss/lipo-c",
        },
      ].map((service, index) => (
        <Flex
          key={index}
          direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
          align="center"
          gap={10}
          mb={{ base: 12, md: 14 }}
        >
          {/** IMAGE */}
          <Box
            flex={{ base: "1", md: "0.6" }}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            transition="transform 0.4s ease, box-shadow 0.4s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "2xl",
            }}
          >
            <Link href={service.link}>
              <Image
                src={service.image}
                alt={service.title}
                width="100%"
                height="auto"
                objectFit="cover"
                loading="lazy"
              />
            </Link>
          </Box>

          {/** TEXT CONTENT */}
          <Box
            flex="1"
            p={{ base: 6, md: 8 }}
            bg="rgba(255, 255, 255, 0.85)"
            borderRadius="xl"
            boxShadow="lg"
            backdropFilter="blur(10px)"
            textAlign={{ base: "center", md: "left" }}
            transition="all 0.3s ease"
            _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
          >
            <Heading as="h3" size="lg" mb={4} color="teal.600">
              {service.title}
            </Heading>
            <Text color="gray.700" mb={6} fontSize={{ base: "md", md: "lg" }}>
              {service.description}
            </Text>
            <Link href={service.link} passHref>
              <Button
                as="a"
                colorScheme="yellow"
                size="lg"
                px={10}
                borderRadius="full"
                _hover={{
                  bg: "yellow.500",
                  transform: "scale(1.05)",
                  boxShadow: "md",
                }}
                _active={{
                  transform: "scale(0.97)",
                }}
                transition="all 0.3s ease"
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
