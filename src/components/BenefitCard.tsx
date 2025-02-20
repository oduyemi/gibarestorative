"use client";
import { Box, Text, Heading, VStack, Stack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: IconType; 
  items: string[];
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon: IconComponent, items }) => {
  return (
    <Box
      bg="white"
      p={8}
      boxShadow="xl"
      borderRadius="lg"
      textAlign="left"
      _hover={{ transform: "scale(1.03)", transition: "0.3s ease-in-out" }}
      backdropFilter="blur(10px)"
      border="1px solid rgba(0, 0, 0, 0.1)"
    >
      <Stack direction="row" align="center" mb={4}>
        <Icon as={IconComponent} boxSize={8} color="teal.500" /> {/* Use "as" prop */}
        <Heading as="h3" fontSize="2xl" color="teal.500">
          {title}
        </Heading>
      </Stack>
      <Text fontSize="lg" fontWeight="medium" color="gray.700" mb={5}>
        {description}
      </Text>
      <VStack as="ul" align="start" spacing={4}>
        {items.map((item, index) => (
          <Text as="li" key={index}>✅ {item}</Text>
        ))}
      </VStack>
    </Box>
  );
};
