"use client";
import React, { useState } from "react";
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
  Input as ChakraInput,
  useToast,
} from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { SearchIcon } from "@chakra-ui/icons";

const initialPatientData = [
  { id: 1, name: "John Doe", age: 34, condition: "Diabetes", lastVisit: "2024-03-01" },
  { id: 2, name: "Jane Smith", age: 28, condition: "Hypertension", lastVisit: "2024-02-20" },
  { id: 3, name: "Alice Johnson", age: 40, condition: "Asthma", lastVisit: "2024-02-15" },
];

export const Patients: React.FC = () => {
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState(initialPatientData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    condition: "",
    lastVisit: "",
  });
  const toast = useToast();

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleAddPatient = () => {
    if (!newPatient.name || !newPatient.age || !newPatient.condition || !newPatient.lastVisit) {
      toast({
        title: "All fields are required.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    // Convert age to a number here
    const newPatientData = { ...newPatient, id: patients.length + 1, age: Number(newPatient.age) };
    setPatients([...patients, newPatientData]);
    setNewPatient({ name: "", age: "", condition: "", lastVisit: "" });
    onClose();
    toast({
      title: "Patient added successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p={5} bg="gray.50" minH="100vh" overflowX="auto">
        <Flex mb={4} justify="space-between" align="center">
          <Text fontSize="2xl" fontWeight="semibold" color="teal.600">
            Patients List
          </Text>
          <Button colorScheme="teal" onClick={onOpen}>
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
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Age</Th>
                <Th>Condition</Th>
                <Th>Last Visit</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredPatients.map((patient) => (
                <Tr key={patient.id} _hover={{ bg: "teal.50" }}>
                  <Td>{patient.id}</Td>
                  <Td>{patient.name}</Td>
                  <Td>{patient.age}</Td>
                  <Td>{patient.condition}</Td>
                  <Td>{patient.lastVisit}</Td>
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
                <FormLabel>Name</FormLabel>
                <ChakraInput
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                  placeholder="Enter patient's name"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Age</FormLabel>
                <ChakraInput
                  name="age"
                  type="number"
                  value={newPatient.age}
                  onChange={handleInputChange}
                  placeholder="Enter patient's age"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Condition</FormLabel>
                <ChakraInput
                  name="condition"
                  value={newPatient.condition}
                  onChange={handleInputChange}
                  placeholder="Enter condition"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Last Visit</FormLabel>
                <ChakraInput
                  name="lastVisit"
                  type="date"
                  value={newPatient.lastVisit}
                  onChange={handleInputChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="teal" onClick={handleAddPatient}>
                Add Patient
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};
