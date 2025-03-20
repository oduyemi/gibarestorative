"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Text,
  Flex,
  Heading,
  Button,
  IconButton,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { Inquiries } from "./Inquiries";

interface Banner {
  _id: string;
  phone: string;
  email: string;
  message: string;
}

export const General: React.FC = () => {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get<Banner[]>("https://giba.vercel.app/api/v1/banners");
        setBanner(response.data[0]);
      } catch (error) {
        console.error("Error fetching banner:", error);
        toast({
          title: "Error",
          description: "Failed to fetch banner data.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBanner(); 
  }, [toast]); 

  // Handle update functionality
  const handleUpdate = async (field: keyof Banner) => {
    if (!banner) return;

    const newValue = prompt(`Enter new ${field}:`, banner[field]);
    if (!newValue) return;

    try {
      const response = await axios.put<Banner>(
        `https://giba.vercel.app/api/v1/banners/${banner._id}`,
        { [field]: newValue }
      );
      setBanner(response.data);

      toast({
        title: "Success",
        description: `${field} updated successfully!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error updating banner item", error);
      toast({
        title: "Error",
        description: `Failed to update ${field}.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box flex="1" p={5} mt={3}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={6}>
        <Flex direction="column" gap={6}>
          <Box rounded="lg" bg="white" p={5} boxShadow="lg" _hover={{ boxShadow: "xl" }}>
            <Heading size="md" mb={6} color="teal.800" fontWeight="semibold">
              Top Banner
            </Heading>
            {loading ? (
              <Spinner size="lg" />
            ) : banner ? (
              <Flex direction="column" gap={4}>
                {["phone", "email", "message"].map((field) => (
                  <Flex key={field} justify="space-between" align="center">
                    <Box>
                      <Heading size="sm" color="teal.600">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </Heading>
                      <Text color="gray.500" noOfLines={1}>
                        {banner[field as keyof Banner]}
                      </Text>
                    </Box>
                    <Box>
                      <IconButton
                        icon={<EditIcon />}
                        onClick={() => handleUpdate(field as keyof Banner)}
                        aria-label="Edit"
                        colorScheme="teal"
                        mr={2}
                        _hover={{ bg: "teal.600" }}
                      />
                    </Box>
                  </Flex>
                ))}
              </Flex>
            ) : (
              <Text>No banner available.</Text>
            )}
          </Box>

          <Box rounded="lg" bg="white" p={5} boxShadow="lg" _hover={{ boxShadow: "xl" }}>
            <Heading size="md" mb={6} color="teal.800" fontWeight="semibold">
              Service Areas
            </Heading>
            <Flex direction="column" gap={4}>
              {["Arizona", "Delaware", "Texas", "Vermont"].map((area) => (
                <Flex key={area} justify="space-between" align="center">
                  <Box>{area}</Box>
                  <Box>
                    <IconButton
                      icon={<EditIcon />}
                      aria-label="Edit"
                      colorScheme="teal"
                      mr={2}
                      _hover={{ bg: "teal.600" }}
                    />
                    <IconButton
                      icon={<DeleteIcon />}
                      aria-label="Remove"
                      colorScheme="red"
                      _hover={{ bg: "red.600" }}
                    />
                  </Box>
                </Flex>
              ))}
              <Button leftIcon={<AddIcon />} colorScheme="yellow" _hover={{ bg: "yellow.400" }}>
                Add Area
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Box rounded="lg" bg="white" p={5} boxShadow="lg" _hover={{ boxShadow: "xl" }}>
          <Inquiries />
        </Box>
      </Grid>
    </Box>
  );
};
