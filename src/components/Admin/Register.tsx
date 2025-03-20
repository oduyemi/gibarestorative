"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  VStack,
  Card,
  CardBody,
  HStack,
  Text,
} from "@chakra-ui/react";

export const RegisterForm: React.FC = () => {
  const [flashMessage, setFlashMessage] = useState<{ type: string; message: string } | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    jobrole: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Both Passwords must match!");
      }
  
      const response = await fetch("https://giba.vercel.app/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data?.detail || data?.message || "Something went wrong.");
      }
  
      console.log(data);
  
      setFlashMessage({
        type: "success",
        message: "Admin registered successfully. Redirecting to Login.",
      });
  
      setFormSubmitted(true);
  
      setTimeout(() => {
        window.location.href = "/admin/login";
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
  
      let errorMessage = "An unexpected error occurred.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
  
      setFlashMessage({ type: "error", message: errorMessage });
    }
  };
  
  return (
    <Container maxW="lg" py={10}>
      <Card overflow="hidden" boxShadow="lg" borderRadius="lg">
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Box flex={1} p={6}>
            <CardBody>
              {flashMessage && (
                <Text color={flashMessage.type === "success" ? "green.500" : "red.500"} textAlign="center" mb={3}>
                  {flashMessage.message}
                </Text>
              )}

              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name="fname" placeholder="Enter first name" onChange={handleChange} value={formData.fname} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name="lname" placeholder="Enter last name" onChange={handleChange} value={formData.lname} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" name="email" placeholder="Enter email" onChange={handleChange} value={formData.email} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Job Role</FormLabel>
                    <Input type="text" name="jobrole" placeholder="Job role" onChange={handleChange} value={formData.jobrole} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type="tel" name="phone" placeholder="Enter phone number" onChange={handleChange} value={formData.phone} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" placeholder="Enter your password" onChange={handleChange} value={formData.password} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" name="confirmPassword" placeholder="Confirm your password" onChange={handleChange} value={formData.confirmPassword} />
                  </FormControl>

                  <HStack justifyContent="space-between" width="100%">
                    <Checkbox>I agree to the terms and conditions</Checkbox>
                  </HStack>

                  <Button type="submit" colorScheme="yellow" width="full" isLoading={formSubmitted}>
                    Register
                  </Button>

                  <Box textAlign="center">
                    <Link color="teal.500" href="/admin/login">Already have an account? Sign in</Link>
                  </Box>
                </VStack>
              </form>
            </CardBody>
          </Box>
        </Flex>
      </Card>
    </Container>
  );
};
