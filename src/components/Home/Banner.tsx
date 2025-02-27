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
      background: "url(assets/images/hero.jpg)",
      title: "Welcome to Giba Medical Clinic",
      subtitle:
        "We help you achieve your weight loss goal and improve your quality of life with a holistic approach.",
      link: "/about",
    },
    {
      id: 2,
      background: "url(assets/images/hero1.jpg)",
      title: "Rework Your Hormones",
      subtitle: "Specially for women who are ready to restore their hormones naturally.",
      link: "/hormone-replacement",
    },
    {
      id: 3,
      background: "url(assets/images/hero2.jpg)",
      title: "Free Consultation",
      subtitle:
        "Let's get to know each other during a 15-minute video call. You can ask questions and we will explain how I can assist you.",
      link: "/bookings",
    },
  ];

  return (
    <Box position="relative" overflow="hidden" height={{ base: "50vh", md: "90vh", lg: "100vh" }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
        className="home-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              height={{ base: "50vh", md: "90vh", lg: "100vh" }}
              backgroundImage={slide.background}
              backgroundSize="cover"
              backgroundPosition="center"
              position="relative"
              // className="slide"
            >
              {/* Overlay */}
              <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="blackAlpha.600" />

              {/* Content */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={2}
                width={{ base: "90%", sm: "85%", md: "600px" }}
                px={{ base: 4, md: 10 }}
                color="white"
                textAlign={{ base: "center", md: "left" }}
              >
                <VStack
                  spacing={{ base: 4, md: 6 }}
                  alignItems={{ base: "center", md: "flex-start" }}
                >
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
                    fontWeight="bold"
                    color="teal.200"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    lineHeight="1.2"
                    className="bHead"
                  >
                    {slide.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "md", sm: "lg", md: "2xl" }}
                    fontWeight="normal"
                    lineHeight="1.4"
                    maxWidth={{ base: "80%", sm: "85%", md: "100%" }}  // Adjust maxWidth to prevent overflow
                    textAlign={{ base: "center", md: "left" }}
                    px={{ base: 4, sm: 6, md: 0 }}  // Adjust padding for mobile
                    mx="auto"
                  >
                    {slide.subtitle}
                  </Text>

                  <HStack
                    spacing={{ base: 2, md: 5 }}
                    mt={4}
                    justify={{ base: "center", md: "flex-start" }}
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
                        _hover={{
                          bg: "yellow.500",
                          color: "black",
                          transform: "scale(1.05)",
                        }}
                        transition="all 0.3s ease-in-out"
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
                        _hover={{
                          bg: "gray.100",
                          color: "black",
                          transform: "scale(1.05)",
                        }}
                        transition="all 0.3s ease-in-out"
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
