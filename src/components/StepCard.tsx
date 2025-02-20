"use client";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface StepCardProps {
  title: string;
  description: string;
  icon: IconType;
  bgColor: string;
}

export const StepCard: React.FC<StepCardProps> = ({ title, description, icon, bgColor }) => {
  return (
    <Box
      flex={{ base: "1 1 100%", md: "1 1 30%" }}
      bg="white"
      p={8}
      borderRadius="xl"
      boxShadow="lg"
      textAlign="center"
      position="relative"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "2xl",
        _before: {
          background: "linear-gradient(135deg, teal, yellow)",
        },
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "xl",
        padding: "2px",
        background: "linear-gradient(135deg, teal, yellow)",
        zIndex: -1,
        transition: "background 0.3s ease",
      }}
    >
      <Box
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        bg={bgColor}
        color="white"
        borderRadius="full"
        p={5}
        mb={5}
        boxShadow="md"
      >
        <Icon as={icon} boxSize={12} />
      </Box>
      <Heading as="h3" size="lg" fontWeight="bold" mb={3}>
        {title}
      </Heading>
      <Text color="gray.600" fontSize="md">
        {description}
      </Text>
    </Box>
  );
};
