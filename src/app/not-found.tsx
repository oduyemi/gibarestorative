"use client";

import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import RootLayout from "./layout";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function NotFound() {
  const router = useRouter();

  return (
    <RootLayout hideLayout={true}>
      <HStack
        minH="100vh"
        w="full"
        px={8}
        spacing={10}
        justify="center"
        align="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/assets/images/void.png"
            alt="Not Found"
            boxSize={{ base: "250px", md: "350px" }}
          />
        </MotionBox>

        <VStack align="start" spacing={4} maxW="400px" textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" size="2xl" className="d-inline">
            Oops.&nbsp;
            <Text as="span" color="#345995" className="d-inline">
                Nothing&nbsp;
            </Text> 
            here...
          </Heading>

          <Text fontSize="lg" opacity={0.8}>
            Uh-oh! We can't seem to find the page you're looking for. Let's take you home.
          </Text>

          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            bgColor="#BDA023"
            size="lg"
            onClick={() => router.push("/")}
            fontWeight="semibold"
            borderRadius="full"
          >
            Go Home
          </MotionButton>
        </VStack>
      </HStack>
    </RootLayout>
  );
}
