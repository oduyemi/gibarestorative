"use client";
import {
  Box,
  Button,
  Heading,
  Text,
  SimpleGrid,
  Divider,
  ListItem,
  UnorderedList,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

export const Lipo = () => {
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 2 });

  return (
    <Box maxW="6xl" mx="auto" py={12} px={6}>
      <Heading as="h2" size="2xl" fontWeight="bold" color="teal.600" mb={8}>
        Boost Your Weight Loss With Lipo-C and Vitamin B12
      </Heading>
      <Text mb={8} fontSize="lg" textAlign="center">
        Lipo-C and Vitamin B12 injections are powerful amino acids and vitamins designed to enhance your weight loss efforts. These injections help to boost metabolism, increase energy levels, and promote fat burning, helping you achieve your weight loss goals more efficiently.
      </Text>

      {/* Lipo-C Section */}
      <Box mb={12}>
        <Heading as="h3" size="xl" fontWeight="bold" color="teal.600" mb={4}>
          LIPO-C "SKINNY SHOTS"
        </Heading>
        <SimpleGrid columns={gridColumns} spacing={8} alignItems="center">
          <Box>
            <Image
              src="/assets/images/lipo.jpg"
              alt="Lipo-C Injection"
              borderRadius="lg"
              boxSize="full"
              objectFit="cover"
            />
          </Box>
          <Box>
            <Text fontSize="lg" mb={4}>
              Lipo-C, also known as skinny shot or MIC, is a blend of lipotropic vitamins and nutrients that help break down fat in the liver. Lipo-C injections are commonly used to enhance fat loss while preserving lean muscles and improving overall health.
            </Text>
            <Heading as="h4" size="md" fontWeight="bold" color="teal.600" mb={2}>
              Ingredients of Lipo-C:
            </Heading>
            <UnorderedList mb={4} spacing={2}>
              <ListItem><strong>Methionine:</strong> An essential amino acid. An antioxidant that aids in fat breakdown.</ListItem>
              <ListItem><strong>Inositol:</strong> Helps with the metabolism of fats and reduces cholesterol.</ListItem>
              <ListItem><strong>Choline:</strong> Supports liver function and fat metabolism.</ListItem>
              <ListItem><strong>Carnitine:</strong> Increases energy levels by transporting fatty acids into the cells' mitochondria.</ListItem>
            </UnorderedList>

            <Divider my={4} />
            <Heading as="h4" size="md" fontWeight="bold" color="teal.600" mb={2}>
              Potential Benefits of Lipo-C:
            </Heading>
            <UnorderedList mb={4} spacing={2}>
              <ListItem>Improved weight loss by targeting fatty deposits.</ListItem>
              <ListItem>Increased energy level, making it easier to stay active and exercise.</ListItem>
              <ListItem>Improved mood through hormone and insulin regulation.</ListItem>
            </UnorderedList>

            <Heading as="h4" size="md" fontWeight="bold" color="teal.600" mb={2}>
              Common Side Effects:
            </Heading>
            <UnorderedList mb={4} spacing={2}>
              <ListItem>Pain/swelling at the injection site</ListItem>
              <ListItem>Nausea and vomiting</ListItem>
              <ListItem>Headache</ListItem>
              <ListItem>Dizziness/lightheadedness</ListItem>
              <ListItem>Allergic reaction</ListItem>
            </UnorderedList>

            <Heading as="h4" size="md" fontWeight="bold" color="teal.600" mb={2}>
              Are Lipo-C Injections for Everyone?
            </Heading>
            <Text mb={4}>
              Avoid Lipo-C injections if you are pregnant, breastfeeding, have a history of allergic reactions, or have liver disease. Speak with a healthcare provider to determine if Lipo-C injections are right for you.
            </Text>
            <Link href="/bookings">
              <Button colorScheme="yellow" size="lg" mt={4} width="full">
                Get Started
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Vitamin B12 Section */}
      <Box>
        <Heading as="h3" size="xl" fontWeight="bold" color="teal.600" mb={4}>
          VITAMIN B12
        </Heading>
        <SimpleGrid columns={gridColumns} spacing={8} alignItems="center">
          <Box>
            <Image
              src="/assets/images/lipodrug.png"
              alt="Vitamin B12"
              borderRadius="lg"
              boxSize="full"
              objectFit="cover"
            />
          </Box>
          <Box>
            <Text fontSize="lg" mb={4}>
              Vitamin B12, also known as Cobalamin, is a water-soluble vitamin that plays vital roles in the optimal functioning of the body.
            </Text>
            <Heading as="h4" size="md" fontWeight="bold" color="teal.600" mb={2}>
              Vital Roles of Vitamin B12:
            </Heading>
            <UnorderedList mb={4} spacing={2}>
              <ListItem>Helps your body produce healthy red blood cells</ListItem>
              <ListItem>Supports bone health and prevents bone diseases like osteoporosis</ListItem>
              <ListItem>Reduces the risk of macular degeneration (central vision disease)</ListItem>
              <ListItem>Improves mood and reduces depression</ListItem>
              <ListItem>Enhances brain function and reduces the risk of memory loss</ListItem>
              <ListItem>Crucial for energy production and overall well-being</ListItem>
            </UnorderedList>

            <Divider my={4} />
            <Heading as="h4" size="md" fontWeight="bold" color="teal.600" mb={2}>
              Symptoms of Vitamin B12 Deficiency:
            </Heading>
            <UnorderedList mb={4} spacing={2}>
              <ListItem>Fatigue, weakness, or lightheadedness</ListItem>
              <ListItem>Palpitations</ListItem>
              <ListItem>Shortness of breath</ListItem>
              <ListItem>Constipation or diarrhea</ListItem>
              <ListItem>Numbness or tingling sensation</ListItem>
              <ListItem>Vision loss</ListItem>
            </UnorderedList>

            <Heading as="h4" size="md" fontWeight="bold" color="teal.600" mb={2}>
              Side Effects of Vitamin B12 Injection:
            </Heading>
            <UnorderedList mb={4} spacing={2}>
              <ListItem>Pain/swelling/itching at injection sites</ListItem>
              <ListItem>Nausea and vomiting</ListItem>
              <ListItem>Diarrhea</ListItem>
              <ListItem>Headache</ListItem>
              <ListItem>Feeling dizzy</ListItem>
            </UnorderedList>

            <Text mb={4}>
              Speak with a healthcare provider to determine if Vitamin B12 injections are right for you.
            </Text>
            <Link href="/bookings">
              <Button colorScheme="yellow" size="lg" mt={4} width="full">
                Get Started
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
