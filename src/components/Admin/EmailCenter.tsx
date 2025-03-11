"use client";
import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Button, Spinner, Table, Thead, Tbody, Tr, Th, Td, VStack } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";

interface MailingList {
  email: string;
  name: string;
}

export const EmailCenter: React.FC = () => {
  const [mailingList, setMailingList] = useState<MailingList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMailingList = async () => {
      try {
        const response = await fetch("/api/mailing-list"); 
        const data = await response.json();
        setMailingList(data);
      } catch (error) {
        console.error("Error fetching mailing list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMailingList();
  }, []);

  // Function to export the list as PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Mailing List", 20, 10);
    mailingList.forEach((entry, index) => {
      doc.text(`${index + 1}. ${entry.name} - ${entry.email}`, 20, 20 + (index * 10));
    });
    doc.save("mailing_list.pdf");
  };

  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p={5} bg="gray.50" minH="100vh">
        <Text fontSize="2xl" fontWeight="bold" color="teal.600">
          Email Center
        </Text>
        <Text mt={2} color="gray.600">
          Manage your clinic&apos;s email communication with patients.
        </Text>

        {/* Export Buttons */}
        <Flex mt={5} gap={4}>
          <Button
            colorScheme="yellow"
            variant="solid"
            onClick={exportPDF}
            isLoading={loading}
            loadingText="Exporting"
            spinnerPlacement="start"
            _hover={{ bg: "yellow.600", color: "white" }}
          >
            Export as PDF
          </Button>

          <CSVLink
            data={mailingList}
            headers={[
              { label: "Name", key: "name" },
              { label: "Email", key: "email" }
            ]}
            filename="mailing_list.csv"
          >
            <Button
              colorScheme="yellow"
              variant="outline"
              isLoading={loading}
              loadingText="Exporting"
              spinnerPlacement="start"
              _hover={{ bg: "yellow.600", color: "white" }}
            >
              Export as CSV
            </Button>
          </CSVLink>
        </Flex>

        {/* Loading Spinner */}
        {loading && (
          <Flex justify="center" align="center" mt={10}>
            <Spinner size="xl" color="blue.500" />
          </Flex>
        )}

        {/* Mailing List Table */}
        {!loading && mailingList.length > 0 && (
          <Box mt={10}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                </Tr>
              </Thead>
              <Tbody>
                {mailingList.map((entry, index) => (
                  <Tr key={index}>
                    <Td>{entry.name}</Td>
                    <Td>{entry.email}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}

        {/* Empty State */}
        {!loading && mailingList.length === 0 && (
          <VStack mt={10} spacing={4} align="center">
            <Text fontSize="lg" color="gray.500">No mailing list available.</Text>
          </VStack>
        )}
      </Box>
    </Flex>
  );
};
