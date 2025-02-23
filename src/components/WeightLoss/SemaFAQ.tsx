import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

export const SemaFAQ = () => {
  return (
    <Box maxW="6xl" mx="auto" py={{ base: 8, md: 12 }} px={{ base: 4, md: 6 }} bg="gray.50" borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size={{ base: "xl", md: "2xl" }} fontWeight="bold" color="teal.600" mb={8} textAlign="center">
        Frequently Asked Questions (FAQ)
      </Heading>
      <Text textAlign="center" color="gray.600" mb={6}>
        Please reach us if you cannot find an answer to your question.
      </Text>
      <Accordion allowMultiple>
        {/* Question 1 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                What is Semaglutide/Tirzepatide?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Semaglutide is a medication approved by the FDA 
            (Food and Drug Administration) for the treatment 
            of obesity. It belongs to a class of drugs called 
            GLP-1 receptor agonists, which work by regulating 
            appetite and promoting feelings of fullness. 
            Tirzepatide is a GLP-1/GIP receptor, so it has an 
            additional mechanism of action. Studies have shown 
            that tirzepatide may lead to greater weight loss; 
            however, it is more expensive.
          </AccordionPanel>
        </AccordionItem>

        {/* Question 2 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                Is Semaglutide/Tirzepatide Safe for Everyone?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Semaglutide/Tirzepatide are prescribed for 
            adults with a BMI (Body Mass Index) of 30 
            or higher, or those with a BMI of 27 or 
            higher who have at least one weight-related 
            health condition, such as type 2 diabetes, 
            high blood pressure, or high cholesterol.
            <br /><br />
            It is not safe if you have the following:
            <ul>
              <li>Kidney disease</li>
              <li>Pancreatitis</li>
              <li>Family history of medullary thyroid carcinoma</li>
              <li>Hypoglycemia</li>
              <li>Multiple endocrine neoplasia (type 2)</li>
              <li>Diabetic retinopathy</li>
              <li>Diabetes type 1</li>
              <li>Pregnancy, or breastfeeding</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        {/* Question 3 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                What are the common side effects of Semaglutide/Tirzepatide?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            The most common side effects of Semaglutide/Tirzepatide include:
            <ul>
              <li>Nausea/vomiting</li>
              <li>Diarrhea</li>
              <li>Constipation</li>
              <li>Bloating</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        {/* Question 4 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                How is Semaglutide/Tirzepatide administered?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Semaglutide/Tirzepatide is given subcutaneously (under the skin); fatty areas such as abdomen, arms, or thighs. It can be self-administered. It is given once weekly.
          </AccordionPanel>
        </AccordionItem>

        {/* Question 5 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                Do I need to go to a mortar and brick clinic?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            No. With Giba Health and Wellness, all 
            visits are virtual. All you need is an 
            internet connection and a phone or computer. 
            You can do your visit anywhere in Texas.
          </AccordionPanel>
        </AccordionItem>

        {/* Question 6 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                Where will my Semaglutide/Tirzepatide come from?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Semaglutide/Tirzepatide will come from 
            a high-quality, compounding pharmacy. 
            They are licensed by their state board 
            of pharmacy, or FDA-licensed facilities.
          </AccordionPanel>
        </AccordionItem>

        {/* Question 7 */}
        <AccordionItem border="none" bg="white" borderRadius="md" boxShadow="sm" mb={4}>
          <h2>
            <AccordionButton _expanded={{ bg: "teal.500", color: "white" }} borderRadius="md" px={6}>
              <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold">
                Can I use insurance for 
                Semaglutide/Tirzepatide?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={6} color="gray.600">
            Giba is a cash-pay clinic and does 
            not accept insurance. Most times, 
            these medications are not covered 
            by insurance.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
