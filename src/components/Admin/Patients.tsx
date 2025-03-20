"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  useToast,
  ChakraProvider,
} from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { SearchIcon } from "@chakra-ui/icons";

const API_BASE_URL = "https://giba.vercel.app/api/v1/patients"; 

interface PatientsData {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  age: number;
  gender: "male" | "female" | "other";
  address: string;
  medicalHistory: string;
  createdAt: Date;
}

export const Patients: React.FC = () => {
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState<PatientsData[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPatient, setNewPatient] = useState({
    fullname: "",
    email: "",
    phone: "",
    age: "",
    gender: "male",
    address: "",
    medicalHistory: "",
  });
  const toast = useToast();

  // Fetch patients from backend
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get<PatientsData[]>(API_BASE_URL);
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };
    fetchPatients();
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  // Add a new patient via API call
  const handleAddPatient = async () => {
    if (!newPatient.fullname || !newPatient.email || !newPatient.phone || !newPatient.age) {
      toast({
        title: "All fields are required.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
  
    try {
      const response = await axios.post<PatientsData>(API_BASE_URL, {
        ...newPatient,
        age: Number(newPatient.age), 
      });
  
      setPatients([...patients, response.data]); 
      setNewPatient({
        fullname: "",
        email: "",
        phone: "",
        age: "",
        gender: "male",
        address: "",
        medicalHistory: "",
      });
  
      onClose();
      toast({
        title: "Patient added successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error adding patient:", error);
      toast({
        title: "Failed to add patient.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };  

  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Box flex="1" p={5} bg="gray.50" minH="100vh" overflowX="auto">
          <Flex mb={4} justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="semibold" color="teal.600">
              Patients List
            </Text>
            <Button colorScheme="yellow" onClick={onOpen}>
              New Patient
            </Button>
          </Flex>

          {/* Search Input */}
          <Flex align="center" mb={6} borderWidth="1px" borderRadius="md" maxWidth="400px">
            <Input
              placeholder="   Search patients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="flushed"
              pl={10}
              bg="white"
              _hover={{ bg: "gray.100" }}
            />
            <IconButton
              icon={<SearchIcon />}
              aria-label="Search"
              colorScheme="teal"
              position="absolute"
              ml={2}
              zIndex={1}
              _hover={{ bg: "teal.500" }}
            />
          </Flex>

          {/* Patients Table */}
          <Box bg="white" borderRadius="md" overflow="hidden" boxShadow="md">
            <Table variant="striped" colorScheme="yellow">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Age</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Gender</Th>
                  <Th>Address</Th>
                  <Th>Medical History</Th>
                </Tr>
              </Thead>
              <Tbody>
                {patients
                  .filter((patient) =>
                    patient.fullname.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((patient, index) => (
                    <Tr key={patient._id} _hover={{ bg: "teal.50" }}>
                      <Td>{index + 1}</Td>
                      <Td>{patient.fullname}</Td>
                      <Td>{patient.age}</Td>
                      <Td>{patient.email}</Td>
                      <Td>{patient.phone}</Td>
                      <Td>{patient.gender}</Td>
                      <Td>{patient.address}</Td>
                      <Td>{patient.medicalHistory}</Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </Box>

          {/* New Patient Modal */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add New Patient</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl mb={4}>
                  <FormLabel>Full Name</FormLabel>
                  <Input name="fullname" value={newPatient.fullname} onChange={handleInputChange} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Email</FormLabel>
                  <Input name="email" value={newPatient.email} onChange={handleInputChange} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Phone</FormLabel>
                  <Input name="phone" value={newPatient.phone} onChange={handleInputChange} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Age</FormLabel>
                  <Input name="age" type="number" value={newPatient.age} onChange={handleInputChange} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Gender</FormLabel>
                  <Input name="gender" value={newPatient.gender} onChange={handleInputChange} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Address</FormLabel>
                  <Input name="address" value={newPatient.address} onChange={handleInputChange} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Medical History</FormLabel>
                  <Input name="medicalHistory" value={newPatient.medicalHistory} onChange={handleInputChange} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="yellow" onClick={handleAddPatient}>
                  Add Patient
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
