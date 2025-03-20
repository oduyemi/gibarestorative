"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input as ChakraInput,
  Select,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface Inquiry {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "pending" | "working" | "resolved" | "rejected";
}

export const Inquiries: React.FC = () => {
  const [entries, setEntries] = useState<Inquiry[]>([]);
  const [search, setSearch] = useState("");
  const toast = useToast();

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await fetch("https://giba.vercel.app/api/v1/contact");
        const data: Inquiry[] = await response.json();
        setEntries(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch inquiries.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    };
    fetchInquiries();
  }, [toast]);

  const handleStatusChange = async (_id: string, newStatus: Inquiry["status"]) => {
    setEntries(entries.map(entry => entry._id === _id ? { ...entry, status: newStatus } : entry));
    toast({
      title: "Status Updated",
      description: `Inquiry ${_id} status changed to ${newStatus}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDelete = async (_id: string) => {
    setEntries(entries.filter(entry => entry._id !== _id));
    toast({
      title: "Inquiry Deleted",
      description: `Inquiry ${_id} has been removed`,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };
  
  const filteredEntries = entries.filter((entry) =>
    entry.fullname.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <Box p={5}>
      <Text fontSize="2xl" color="teal.800">Inquiries</Text>
      <Text mt={2}>View and manage inquiries from contact form entries.</Text>

      <Box mt={6} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box bg="white" borderRadius="md" overflow="hidden" boxShadow="md">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Full Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Subject</Th>
                <Th>Message</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredEntries.map((entry) => (
                <Tr key={entry._id} _hover={{ bg: "teal.50" }}>
                  <Td>{entry._id}</Td>
                  <Td>{entry.fullname}</Td>
                  <Td>{entry.email}</Td>
                  <Td>{entry.phone}</Td>
                  <Td>{entry.subject}</Td>
                  <Td>{entry.message}</Td>
                  <Td>
                    <Select value={entry.status} onChange={(e) => handleStatusChange(entry._id, e.target.value as Inquiry["status"]) }>
                      <option value="pending">Pending</option>
                      <option value="working">Working</option>
                      <option value="resolved">Resolved</option>
                      <option value="rejected">Rejected</option>
                    </Select>
                  </Td>
                  <Td>
                    <IconButton 
                      icon={<DeleteIcon />} 
                      aria-label="Delete Inquiry" 
                      colorScheme="red" 
                      onClick={() => handleDelete(entry._id)}
                      _hover={{ bg: "red.600" }} 
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};