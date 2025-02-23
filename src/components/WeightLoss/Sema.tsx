"use client";
import { Box, Heading, Text, Flex, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";

export const Sema = () => {
  return (
    <Box maxW="6xl" mx="auto" py={12} px={6}>
      {/* Section: Semaglutide */}
      <Box bg="gray.50" p={8} borderRadius="xl" boxShadow="lg" mb={10}>
        <Heading as="h2" size="2xl" fontWeight="bold" color="teal.600" mb={4}>
          Semaglutide
        </Heading>
        <Text fontSize="lg" color="gray.700" mb={4}>
          Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist. It has trade names as Wegovy and Ozempic.
        </Text>
        <Text fontSize="lg" color="gray.700" mb={4}>
          It mimics the GLP-1 hormone that is released in the gastrointestinal tract in response to eating. GLP-1 prompts the body to produce more insulin, which reduces blood glucose (sugar).
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="teal.500" mb={4}>
          Invest in your health for just $299/month. No more excuses.
        </Text>
        <Link href="/bookings">
            <Button 
            colorScheme="yellow" 
            size="lg" 
            borderRadius="full" 
            _hover={{ bg: "yellow.500", transform: "scale(1.05)" }}
            >
            Get Started
            </Button>
        </Link>
      </Box>

      {/* Section: Tirzepatide */}
      <Box bg="gray.50" p={8} borderRadius="xl" boxShadow="lg" mb={10}>
        <Heading as="h2" size="2xl" fontWeight="bold" color="yellow.600" mb={4}>
          Tirzepatide
        </Heading>
        <Text fontSize="lg" color="gray.700" mb={4}>
          Tirzepatide is a dual agonist that mimics the action of GLP-1 and GIP receptors to regulate appetite, insulin secretion, and glucose metabolism. 
          It is also known as Zepbound and the FDA-approved trade name Mounjaro.
        </Text>
        <Text fontSize="lg" color="gray.700" mb={4}>
          The dual-action mechanism of Tirzepatide makes it a powerful tool for weight management.
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="yellow.500" mb={4}>
          Invest in your health for just $499/month. No more excuses.
        </Text>
        <Link href="/bookings">
            <Button 
            colorScheme="yellow" 
            size="lg" 
            borderRadius="full" 
            _hover={{ bg: "yellow.500", transform: "scale(1.05)" }}
            >
            Get Started
            </Button>
        </Link>
      </Box>

      <Divider my={12} />

      {/* Section: How They Work */}
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        {/* Semaglutide Benefits */}
        <Box 
          flex={1} 
          bg="teal.50" 
          p={6} 
          borderRadius="xl" 
          boxShadow="md" 
          _hover={{ boxShadow: "lg" }}
        >
          <Heading as="h3" size="lg" color="teal.600" mb={4}>
            How Does Semaglutide Support Weight Loss?
          </Heading>
          <Text fontSize="md" color="gray.700" mb={3}><strong>Appetite Suppression:</strong> Reduces hunger by acting on brain receptors.</Text>
          <Text fontSize="md" color="gray.700" mb={3}><strong>Increased Satiety:</strong> Slows down gastric emptying for prolonged fullness.</Text>
          <Text fontSize="md" color="gray.700" mb={3}><strong>Improved Blood Sugar Control:</strong> Stabilizes blood sugar levels.</Text>
          <Text fontSize="md" color="gray.700"><strong>Fat Reduction:</strong> Stimulates brown adipose tissue for fat burning.</Text>
        </Box>

        {/* Tirzepatide Benefits */}
        <Box 
          flex={1} 
          bg="yellow.50" 
          p={6} 
          borderRadius="xl" 
          boxShadow="md" 
          _hover={{ boxShadow: "lg" }}
        >
          <Heading as="h3" size="lg" color="yellow.600" mb={4}>
            How Does Tirzepatide Work?
          </Heading>
          <Text fontSize="md" color="gray.700" mb={3}><strong>Appetite Suppression:</strong> Reduces hunger by acting on brain receptors.</Text>
          <Text fontSize="md" color="gray.700" mb={3}><strong>Increased Satiety:</strong> Slows down gastric emptying for prolonged fullness.</Text>
          <Text fontSize="md" color="gray.700" mb={3}><strong>Improved Blood Sugar Control:</strong> Stabilizes blood sugar levels.</Text>
          <Text fontSize="md" color="gray.700"><strong>Fat Reduction:</strong> Triggers fat metabolism via MC4R binding.</Text>
        </Box>
      </Flex>
    </Box>
  );
};
