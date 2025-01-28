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
      title: "Welcome to Giba Clinic",
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
      title: "Welcome to Giba Restoratives",
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
                <VStack spacing={4} textAlign="center" maxW="600px" color="white">
                  <Heading as="h2" size="2xl" fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
                    {slide.title}
                  </Heading>
                  <Text fontSize="xl" fontWeight="medium">{slide.subtitle}</Text>

                  <HStack spacing={4} mt={4}>
                    <Link href="" passHref>
                      <Button variant="outline" color="#BDA023" px={6} py={3} fontSize="lg" _hover={{ bg: "gray.600" }}>
                        Learn More
                      </Button>
                    </Link>
                    <Link href="" passHref>
                      <Button bg="#BDA023" color="black" px={6} py={3} fontSize="lg" _hover={{ bg: "gray.200" }}>
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
