"use client";
import React, { useEffect, useState } from "react";
import { Flex, Box, Button, Container, Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import axios from "axios";

interface Admin {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  jobrole: string;
}

export const AdminProfile: React.FC = () => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const userData = localStorage.getItem("user"); // Get "user" object
        const adminID = userData ? JSON.parse(userData).adminID : null;
  
        if (!adminID) {
          throw new Error("Admin ID not found in localStorage");
        }
  
        console.log("Fetching data for Admin ID:", adminID);
  
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Authorization token is missing");
        }
  
        const response = await axios.get<{ data: Admin }>(
          `https://giba.vercel.app/api/v1/admin/${adminID}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
  
        console.log("API Response:", response.data);
        setAdmin(response.data.data);
      } catch (error: unknown) {
        console.error("Error fetching admin data:", error);
      
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchAdminData();
  }, []);
  

  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  if (loading) return <Text>Loading profile...</Text>;
  if (error) return <Text color="red.500">{error}</Text>;
  if (!admin) return <Text>No admin data found.</Text>;

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
                  <strong>Name:</strong> {admin.fname} {admin.lname}
                </Text>
                <Text fontSize="xl" color="gray.700">
                  <strong>Email:</strong> {admin.email}
                </Text>
                <Text fontSize="xl" color="gray.700">
                  <strong>Job Role:</strong> {admin.jobrole}
                </Text>
                <Text fontSize="xl" color="gray.700">
                  <strong>Phone:</strong> {admin.phone}
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
