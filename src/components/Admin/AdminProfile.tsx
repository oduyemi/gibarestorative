"use client";
import React from "react";
import { Flex, Box, Button, Container, Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

interface AdminProfileProps {
  name: string;
  email: string;
  role: string;
  phone: string;
}

export const AdminProfile: React.FC<AdminProfileProps> = ({ name, email, role, phone }) => {
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Flex>
        <Sidebar />        
        <Box flex="1" p={5} bg="gray.100" minH="100vh">
            <Container maxW="lg" py={6}>
                <Box
                    borderWidth="1px"
                    borderRadius="lg"
                    boxShadow="lg"
                    p={6}
                    backgroundColor="white"
                    transition="all 0.3s ease"
                    _hover={{
                      boxShadow: "xl",
                      transform: "scale(1.02)",
                    }}
                >
                    <Stack spacing={6}>
                    <Heading as="h2" color="teal.500" size="lg" textAlign="center" fontWeight="bold">
                        Profile Information
                    </Heading>

                    <Stack spacing={4} textAlign="left">
                        <Text fontSize="xl" color="gray.700">
                        <strong>Name:</strong> {name}
                        </Text>
                        <Text fontSize="xl" color="gray.700">
                        <strong>Email:</strong> {email}
                        </Text>
                        <Text fontSize="xl" color="gray.700">
                        <strong>Job Role:</strong> {role}
                        </Text>
                        <Text fontSize="xl" color="gray.700">
                        <strong>Phone:</strong> {phone}
                        </Text>
                    </Stack>

                    <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify="center">
                        <Button 
                          colorScheme="yellow" 
                          size={buttonSize} 
                          width="200px"
                          _hover={{ bg: "yellow.500", transform: "scale(1.05)" }}
                          transition="all 0.2s ease-in-out"
                        >
                          Edit Profile
                        </Button>
                        <Button 
                          variant="outline" 
                          colorScheme="red" 
                          size={buttonSize} 
                          width="200px"
                          _hover={{ bg: "red.500", color: "white", transform: "scale(1.05)" }}
                          transition="all 0.2s ease-in-out"
                        >
                          Logout
                        </Button>
                    </Stack>
                    </Stack>
                </Box>
            </Container>
        </Box>
    </Flex>
  );
};
