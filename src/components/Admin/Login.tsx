"use client";
import React, { useState, useContext } from "react";
import { UserContext } from "@/app/context/UserContext";
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
  Image,
  Card,
  CardBody,
  HStack,
} from "@chakra-ui/react";

export const LoginForm: React.FC = () => {
  const { handleLogin, flashMessage } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    await handleLogin(formData.email, formData.password);
    if (flashMessage?.type === "success") {
      const requestedPath = localStorage.getItem("requestedPath") || "/dashboard";
      window.location.href = requestedPath;
    }
  };
  

  return (
    <Container maxW="lg" py={10}>
      <Card overflow="hidden" boxShadow="lg" borderRadius="lg">
        {flashMessage && (
          <Box className={`text-${flashMessage.type} text-center my-3 text-red-700`}>
            {flashMessage.message}
          </Box>
        )}
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Box flex={{ base: "none", md: 1 }}>
            <Image
              src="/assets/images/docc.jpg"
              alt="phone"
              objectFit="cover"
              width="100%"
              height="100%"
              borderTopLeftRadius="lg"
              borderBottomLeftRadius={{ base: "none", md: "lg" }}
            />
          </Box>
          <Box flex={1} p={6}>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <HStack justifyContent="space-between" width="100%">
                    <Checkbox>Remember me</Checkbox>
                    <Link color="blue.500" href="#">Forgot password?</Link>
                  </HStack>

                  <Button type="submit" colorScheme="yellow" width="full" isLoading={formSubmitted}>
                    Sign in
                  </Button>
                </VStack>
              </form>
            </CardBody>
          </Box>
        </Flex>
      </Card>
    </Container>
  );
};
