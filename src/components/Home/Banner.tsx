"use client";

import { Box, Text, Heading, Button, VStack, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Banner: React.FC = () => {
  const slides = [
    {
      id: 1,
      background: "url(assets/images/doctor.jpg)",
      title: "Welcome to Giba Medical Clinic",
      subtitle:
        "We help you achieve your weight loss goal and improve your quality of life with a holistic approach.",
      link: "/about",
    },
    {
      id: 2,
      background: "url(assets/images/doctor3.jpg)",
      title: "Rework Your Hormones",
      subtitle: "Specially for women who are ready to restore their hormones naturally.",
      link: "/hormone-replacement",
    },
    {
      id: 3,
      background: "url(assets/images/doctor2.jpg)",
      title: "Free Consultation",
      subtitle:
        "Let's get to know each other during a 15-minute video call. You can ask questions and we will explain how I can assist you.",
      link: "/bookings",
    },
  ];

  return (
    <Box position="relative" overflow="hidden" height={{ base: "75vh", md: "90vh", lg: "100vh" }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="home-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              height={{ base: "75vh", md: "90vh", lg: "100vh" }}
              backgroundImage={slide.background}
              backgroundSize="cover"
              backgroundPosition="center"
              position="relative"
            >
              {/* Overlay */}
              <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="blackAlpha.600" />

              {/* Content */}
              <Box
                position="absolute"
                top="50%"
                left={{ base: "5%", md: "10%" }}
                transform="translateY(-50%)"
                zIndex={2}
                width={{ base: "90%", sm: "85%", md: "600px" }}
                px={{ base: 6, md: 10 }}
                color="white"
              >
                <VStack spacing={{ base: 4, md: 6 }} textAlign="left" alignItems="flex-start">
                  <Heading
                    as="h2"
                    fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                    fontWeight="bold"
                    color="teal.200"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    lineHeight="1.2"
                  >
                    {slide.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                    fontWeight="normal"
                    lineHeight="1.4"
                  >
                    {slide.subtitle}
                  </Text>

                  <HStack
                    spacing={{ base: 3, md: 5 }}
                    mt={6}
                    justify="flex-start"
                    flexWrap="wrap"
                    width="100%"
                  >
                    <Link href={slide.link} passHref>
                      <Button
                        variant="outline"
                        color="yellow.400"
                        borderColor="yellow.400"
                        px={{ base: 4, md: 6 }}
                        py={{ base: 2, md: 3 }}
                        size={{ base: "sm", md: "md", lg: "lg" }}
                        fontWeight="semibold"
                        borderRadius="full"
                        transition="all 0.3s ease"
                        _hover={{
                          bg: "yellow.500",
                          color: "black",
                          transform: "scale(1.05)",
                          boxShadow: "lg",
                        }}
                      >
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/contact" passHref>
                      <Button
                        colorScheme="yellow"
                        px={{ base: 4, md: 6 }}
                        py={{ base: 2, md: 3 }}
                        size={{ base: "sm", md: "md", lg: "lg" }}
                        fontWeight="semibold"
                        borderRadius="full"
                        transition="all 0.3s ease"
                        _hover={{
                          bg: "gray.100",
                          color: "black",
                          transform: "scale(1.05)",
                          boxShadow: "lg",
                        }}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </HStack>
                </VStack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
