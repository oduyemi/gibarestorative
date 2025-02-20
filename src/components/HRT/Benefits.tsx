"use client";
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import { FaHeartbeat, FaNotesMedical } from "react-icons/fa";
import { BenefitCard } from "../BenefitCard"; 

export const HRTBenefits: React.FC = () => {
  return (
    <Box as="section" bgGradient="linear(to-b, teal.50, white)" py={{ base: 12, md: 20 }} px={6}>
      <Box maxW="5xl" mx="auto" textAlign="center" mb={12}>
        <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="teal.600">
          Benefits & Treatment Plans
        </Heading>
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} maxW="5xl" mx="auto">
        <GridItem>
          <BenefitCard
            title="Benefits of HRT"
            description="A scientifically backed treatment improving well-being."
            icon={FaHeartbeat}
            items={[
              "Reduces menopausal symptoms like hot flashes & night sweats.",
              "Improves bone health, preventing osteoporosis.",
              "Boosts mood, reduces anxiety & depression.",
              "Enhances sleep quality & relaxation.",
              "Supports sexual health & libido."
            ]}
          />
        </GridItem>

        <GridItem>
          <BenefitCard
            title="Personalized Treatment Plans"
            description="Tailored solutions designed for optimal results."
            icon={FaNotesMedical} // No need to wrap in JSX
            items={[
              "Comprehensive medical & lifestyle assessment.",
              "Advanced hormone testing & diagnosis.",
              "Custom HRT plans tailored to individual needs.",
              "Continuous progress monitoring & plan adjustments.",
              "Lifestyle recommendations for best results."
            ]}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
