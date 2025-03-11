import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";



export const EmailCenter: React.FC = () => {
    return (
        <Flex>
            <Sidebar />        
            <Box flex="1" p={5} bg="gray.100" minH="100vh">
                <Text fontSize="2xl">Email Center</Text>
                <Text mt={2}>Manage your clinic's email communication with patients.</Text>
            </Box>
        </Flex>
    );
  };