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
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { Inquiries } from "./Inquiries";

interface Banner {
  _id: string;
  phone: string;
  email: string;
  message: string;
}

interface ServiceArea {
  _id: string;
  name: string;
}

export const General: React.FC = () => {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [areas, setAreas] = useState<ServiceArea[]>([]);
  const [loading, setLoading] = useState(true);
  const [newAreaName, setNewAreaName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    // Fetch banner data
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
  
    // Fetch service areas
    const fetchAreas = async () => {
      try {
        const response = await axios.get<ServiceArea[]>("https://giba.vercel.app/api/v1/area");
        setAreas(response.data);
      } catch (error) {
        console.error("Error fetching areas:", error);
        toast({
          title: "Error",
          description: "Failed to fetch service areas.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
  
    fetchBanner(); 
    fetchAreas(); 
  }, [toast]); 
  

  // Handle update banner functionality
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

  // Handle Add Area functionality
  const handleAddArea = async () => {
    if (!newAreaName) {
      toast({
        title: "Error",
        description: "Area name cannot be empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    try {
      const response = await axios.post<ServiceArea>(
        "https://giba.vercel.app/api/v1/area",
        { name: newAreaName }
      );
  
      // Append the new area to the existing list
      setAreas((prevAreas) => [...prevAreas, response.data]);
  
      toast({
        title: "Success",
        description: "Area added successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
  
      setNewAreaName(""); // Clear input
      onClose(); // Close modal
    } catch (error) {
      console.error("Error adding area:", error);
      toast({
        title: "Error",
        description: "Failed to add service area.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  

  // Handle Edit Area functionality
  const handleUpdateArea = async (id: string, newName: string) => {
    try {
      const response = await axios.put<ServiceArea>(`https://giba.vercel.app/api/v1/area/${id}`, {
        name: newName,
      });
      const updatedAreas = areas.map((area) =>
        area._id === id ? response.data : area
      );
      setAreas(updatedAreas);

      toast({
        title: "Success",
        description: "Area updated successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error updating area", error);
      toast({
        title: "Error",
        description: "Failed to update area.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Handle Delete Area functionality
  const handleDeleteArea = async (id: string) => {
    try {
      await axios.delete(`https://giba.vercel.app/api/v1/area/${id}`);
      setAreas(areas.filter((area) => area._id !== id));

      toast({
        title: "Success",
        description: "Area deleted successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error deleting area", error);
      toast({
        title: "Error",
        description: "Failed to delete area.",
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
                        colorScheme="yellow"
                        mr={2}
                        _hover={{ bg: "yellow.600" }}
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
            {loading ? (
              <Spinner size="lg" />
            ) : areas.length > 0 ? (
              <Flex direction="column" gap={4}>
                {areas.map((area) => (
                  <Flex key={area._id} justify="space-between" align="center">
                    <Box>{area.name}</Box>
                    <Box>
                      <IconButton
                        icon={<EditIcon />}
                        aria-label="Edit"
                        colorScheme="teal"
                        mr={2}
                        _hover={{ bg: "teal.600" }}
                        onClick={() => handleUpdateArea(area._id, prompt("Enter new area name:", area.name) || area.name)}
                      />
                      <IconButton
                        icon={<DeleteIcon />}
                        aria-label="Remove"
                        colorScheme="red"
                        _hover={{ bg: "red.600" }}
                        onClick={() => handleDeleteArea(area._id)}
                      />
                    </Box>
                  </Flex>
                ))}
              </Flex>
            ) : (
              <Text>No service areas available.</Text>
            )}
            <Button leftIcon={<AddIcon />} colorScheme="yellow" _hover={{ bg: "yellow.400" }} onClick={onOpen}>
              Add Area
            </Button>
          </Box>
        </Flex>

        {/* Inquiries Box */}
        <Box rounded="lg" bg="white" p={5} boxShadow="lg" _hover={{ boxShadow: "xl" }}>
          <Inquiries />
        </Box>
      </Grid>

      {/* Add Area Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Area</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Area Name</FormLabel>
              <Input value={newAreaName} onChange={(e) => setNewAreaName(e.target.value)} placeholder="Enter area name" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleAddArea}>
              Add Area
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box> 
  );

};
