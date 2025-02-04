"use client";
import React, { useState } from "react";
import { 
  Box, 
  Input, 
  FormControl, 
  FormLabel, 
  Button, 
  Heading, 
  Text, 
  VStack, 
  InputGroup, 
  InputLeftElement,
  useToast
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";

export const MembershipForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Simulated Success Notification
    toast({
      title: "Application Submitted!",
      description: "We will contact you shortly.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box 
      maxW={{ base: "90%", md: "450px" }} 
      mx="auto" 
      mt={8} 
      p={6} 
      bg="white" 
      boxShadow="xl" 
      borderRadius="lg"
      className="mb-5"
    >
      <Heading as="h2" size="lg" color="teal.600" textAlign="center" mb={2}>
        Starting At Just <Text as="span" color="teal.400">$79/Month</Text>
      </Heading>
      <Text textAlign="center" fontSize="md" color="gray.600" fontWeight="medium" mb={6}>
        🚀 FREE APPLICATION. NO CREDIT CARD REQUIRED.
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="gray.400" />
              </InputLeftElement>
              <Input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                focusBorderColor="teal.500"
                borderRadius="md"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type="email"
                name="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                focusBorderColor="teal.500"
                borderRadius="md"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type="tel"
                name="phone"
                placeholder="+1 234 567 890"
                value={formData.phone}
                onChange={handleChange}
                focusBorderColor="teal.500"
                borderRadius="md"
              />
            </InputGroup>
          </FormControl>

          <Button 
            type="submit" 
            colorScheme="yellow" 
            width="full" 
            mt={4} 
            borderRadius="md"
            // _hover={{ bg: "teal.700" }}
          >
            Apply Now
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
