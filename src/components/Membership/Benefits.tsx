"use client";
import { Box, Heading, Grid, GridItem, Text, Button } from "@chakra-ui/react";
import { FaPersonBooth, FaNotesMedical } from "react-icons/fa";
import { BenefitCard } from "../BenefitCard"; 

export const MembershipBenefits: React.FC = () => {
  return (
    <Box as="section" bgGradient="linear(to-b, teal.50, white)" py={{ base: 12, md: 20 }} px={6}>
      <Box maxW="5xl" mx="auto" textAlign="center" mb={12}>
        <Heading 
          as="h2" 
          fontSize={{ base: "2xl", md: "4xl" }} 
          fontWeight="bold" 
          color="teal.600"
          mb={4}
        >
          Membership Benefits
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" maxW="700px" mx="auto">
          Discover the many benefits you receive as a valued member of our health care plan. We are here to provide you with easy access to essential health services.
        </Text>
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} maxW="5xl" mx="auto">
        <GridItem>
          <BenefitCard
            title="Benefits"
            description="Here's what you deserve as a member:"
            icon={FaPersonBooth}
            items={[
              "Unlimited Consultations: Speak with healthcare providers as often as you need.",
              "24/7 Access: Get medical advice and treatment any time, day or night.",
              "No Co-pays or Hidden Fees: Enjoy transparent pricing with no surprises.",
              "Prescription Services: Receive prescriptions and refills conveniently.",
              "Specialist Referrals: Get referrals to specialists when necessary.",
              "Family Plans: Affordable options for you and your loved ones."
            ]}
          />
        </GridItem>

        <GridItem>
          <BenefitCard
            title="Services Included"
            description="Our membership covers a wide range of healthcare needs, including but not limited to:"
            icon={FaNotesMedical}
            items={[
              "Primary Care: Routine check-ups, ongoing health management, and wellness advice.",
              "Urgent Care: Immediate care for minor illnesses and injuries.",
              "Chronic Condition Management: Support for conditions like diabetes, hypertension, and asthma.",
              "Preventive Care: Screenings and health education.",
              "Blood Testing (Additional Fee): Blood tests are available, but the fee depends on the lab ordered."
            ]}
          />
        </GridItem>
      </Grid>

      <Box mt={8} textAlign="center">
        <Text color="teal.600" fontSize="sm">
          * Blood testing is not included in the membership fee. Charges for blood tests depend on the lab ordered.
        </Text>

       
      </Box>
    </Box>
  );
};
