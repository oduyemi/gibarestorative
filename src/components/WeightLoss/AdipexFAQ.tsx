import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

export const AdipexFAQ = () => {
  return (
    <Box maxW="6xl" mx="auto" py={{ base: 8, md: 12 }} px={{ base: 4, md: 6 }} bg="gray.50" borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size={{ base: "xl", md: "2xl" }} fontWeight="bold" color="teal.600" mb={8} textAlign="center">
        Frequently Asked Questions (FAQ)
      </Heading>
      <Text textAlign="center" color="gray.600" mb={6}>
        Please reach us at info@gibarestorative.com if you cannot find an answer to your question.
      </Text>
      <Accordion allowMultiple>
        {/* Question 1 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                How Phentermine Works?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Phentermine stimulates the release of brain 
            chemicals that control appetite, helping 
            you feel full longer and reduce the urge to eat. 
            <b>Benefits of Using Phentermine</b>
            <ul>
              <li>Effective Weight Loss: Proven results when combined with diet and exercise.</li>
              <li>Boosts Metabolism: Helps increase the rate at which your body burns calories.</li>
              <li>Supports Healthy Lifestyle: Encourages long-term healthy habits.</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        {/* Question 2 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                Is Phentermine Right for You?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Phentermine is typically prescribed to 
            individuals who are overweight or obese (BMI 
            of 30 or higher, or 27 or higher with 
            weight-related health conditions) 
            and have not been able to lose weight through 
            diet and exercise alone. <br />
            It is not recommended for:<br/>
            <ul>
              <li>Individuals with a history of drug abuse</li>
              <li>Individuals with extreme restlessness and agitation</li>
              <li>Women who are pregnant, breastfeeding, or planning to become pregnant.</li>
              <li>Individuals with heart conditions such as uncontrolled hypertension</li>
              <li>Individuals with overactive thyroid</li>
              <li>Individuals with glaucoma</li>
              <li>Individuals who are taking certain medications such as monoamine oxidase inhibitor (MAOI)</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        {/* Question 3 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                How long can I take Phentermine?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            ADIPEX/Phentermine: Your Partner in Effective
            Weight Loss. Phentermine is typically prescribed 
            for short-term use, usually up to 12 weeks. We 
            have an experienced state board license provider 
            who will guide you through the appropriate duration.
          </AccordionPanel>
        </AccordionItem>

        {/* Question 4 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                Are there any side effects?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Common side effects include dry mouth, 
            insomnia, increased in high blood pressure, 
            and increased heart rate.
          </AccordionPanel>
        </AccordionItem>

        {/* Question 5 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                How much weight can I expect to lose?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Weight loss varies among individuals, but 
            when combined with diet and exercise, many 
            users experience significant weight loss 
            within the first few months.
          </AccordionPanel>
        </AccordionItem>

        {/* Question 6 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                How Can I start Phentermine?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Our experienced provider is happy to help you!<br/>
          <ul>
              <li>Schedule your weight loss consultation with our provider.</li>
              <li>
                The visit will include a comprehensive physical exam 
                with measurements, EKG*, Baseline Lab Work*, dietary 
                recommendations, and access to the private 
                patient-provider portal for messaging.
                </li>
              <li>Requires a 3-month commitment.</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
