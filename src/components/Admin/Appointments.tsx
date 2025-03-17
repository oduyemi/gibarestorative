import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IntakeQWidget } from "../IntakeWidget";

export const Appointments: React.FC = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl" color="teal.800">Appointments</Text>
      <Text mt={2}>View and manage patient appointments.</Text>

      {/* Embed the page using iframe */}
      <Box mt={6} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <IntakeQWidget />
      </Box>
    </Box>
  );
};
