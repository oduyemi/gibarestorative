"use client";

import React from "react";
import { Box, Text, Heading, Divider, Container, VStack } from "@chakra-ui/react";
import { MembershipBenefits } from "./Benefits"; 

export const Membership: React.FC = () => {
  return (
    <Box as="section"  py={{ base: 12, md: 20 }} px={6}>
      <Container maxW="4xl">
        <VStack spacing={6} textAlign="center">
          {/* Section Title */}
          <Heading as="h2" fontSize="xl" fontWeight="bold" color="teal.700" textTransform="uppercase">
            JOIN OUR VIRTUAL CARE DISCOUNT MEMBERSHIP
          </Heading>

          {/* Section Description */}
          <Text fontSize="lg" color="gray.700" maxW="3xl" lineHeight="1.8">
            Enjoy unlimited access to healthcare professionals and a range of services designed to keep you and 
            your family healthy—all from the comfort of your home. <br /><br /> 
            No need to skip work, no waiting rooms, and receive quality care anytime, anywhere through a 
            secure virtual platform.
          </Text>

          {/* Divider */}
          <Divider borderColor="gray.400" w="50%" />
        </VStack>
      </Container>

      {/* Membership Benefits Section */}
      <Box mt={12}>
        <MembershipBenefits />
      </Box>
    </Box>
  );
};
