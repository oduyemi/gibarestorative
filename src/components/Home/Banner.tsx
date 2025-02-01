"use client";

import { Box, Text, Heading, Button, VStack, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Banner: React.FC = () => {
  const slides = [
    {
      id: 1,
      background: "url(assets/images/hero0.jpg)",
      title: "Welcome to Giba Medical Clinic",
      subtitle: "We help you achieve your weight loss goal and improve your quality of life with a holistic approach.",
      link:"/about"
    },
    {
      id: 2,
      background: "url(assets/images/hero1.jpg)",
      title: "Rework Your Hormones",
      subtitle: "Specially for women who are ready to restore their hormones naturally.",
      link: "/hormone-replacement"
    },
    {
      id: 3,
      background: "url(assets/images/hero2.jpg)",
      title: "Free Consultation",
      subtitle: "Let's get to know each other during a 15-minute video call. You can ask questions and we will explain how I can assist you.",
      link: "/bookings"
    },
  ];

  return (
    <Box position="relative" overflow="hidden" height="100vh">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="home-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              height="100vh"
              backgroundImage={slide.background}
              backgroundSize="cover"
              backgroundPosition="center"
              position="relative"
            >
              {/* Overlay */}
              <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="blackAlpha.600" />

              {/* Content */}
              <Box position="relative" zIndex={2} height="100%" display="flex" alignItems="center" justifyContent="center">
                <VStack
                  spacing={{ base: 4, md: 6 }}
                  textAlign="center"
                  maxW={{ base: "70%", md: "600px" }}
                  color="white"
                >
                  <Heading
                    as="h2"
                    size={{ base: "md", md: "2xl" }} 
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    {slide.title}
                  </Heading>
                  <Text fontSize={{ base: "sm", md: "xl" }} fontWeight="medium">
                    {slide.subtitle}
                  </Text>

                  <HStack spacing={{ base: 2, md: 4 }} mt={4} justify="center">
                    <Link href={slide.link} passHref>
                      <Button
                        variant="outline"
                        color="#BDA023"
                        px={{ base: 4, md: 6 }}
                        py={3}
                        size="lg"
                        fontWeight="semibold"
                        borderRadius="full"
                        transition="all 0.3s ease"
                        fontSize={{ base: "sm", md: "lg" }} 
                        _hover={{ bg: "gray.600" }}
                      >
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/contact" passHref>
                      <Button
                        bg="#BDA023"
                        color="white"
                        px={{ base: 4, md: 6 }}
                        py={3}
                        size="lg"
                        fontWeight="semibold"
                        borderRadius="full"
                        transition="all 0.3s ease"
                        fontSize={{ base: "sm", md: "lg" }} 
                        _hover={{ bg: "gray.200", color: "black" }}
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
