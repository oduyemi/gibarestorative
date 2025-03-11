import React from "react";
import { Box, Text } from "@chakra-ui/react";


export const Settings: React.FC = () => {
    return (
      <Box p={5}>
        <Text fontSize="2xl">Settings</Text>
        <Text mt={2}>Adjust your admin dashboard preferences.</Text>
      </Box>
    );
  };