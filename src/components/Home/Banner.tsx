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
    },
    {
      id: 2,
      background: "url(assets/images/hero1.jpg)",
      title: "A Fresh Approach to Healthy Living",
      subtitle: "Unlock your potential with good nutrition and balanced wellness.",
    },
    {
      id: 3,
      background: "url(assets/images/hero2.jpg)",
      title: "Welcome to Giba Mediacl Clinic",
      subtitle: "Transform your health through mindful habit changes.",
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
                  maxW={{ base: "70%", md: "600px" }} // Reduced width further on mobile to 70%
                  color="white"
                >
                  <Heading
                    as="h2"
                    size={{ base: "md", md: "2xl" }} // Reduced heading size on mobile
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
                    <Link href="" passHref>
                      <Button
                        variant="outline"
                        color="#BDA023"
                        px={{ base: 4, md: 6 }}
                        py={3}
                        size="lg"
                        fontWeight="semibold"
                        borderRadius="full"
                        transition="all 0.3s ease"
                        fontSize={{ base: "sm", md: "lg" }} // Adjusted button font size for mobile
                        _hover={{ bg: "gray.600" }}
                      >
                        Learn More
                      </Button>
                    </Link>
                    <Link href="" passHref>
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
