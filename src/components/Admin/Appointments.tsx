import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const Appointments: React.FC = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl" color="teal.800">Appointments</Text>
      <Text mt={2}>View and manage patient appointments.</Text>

      {/* Embed the page using iframe */}
      <Box mt={6} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <iframe
          src="https://intakeq.com/signin"
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="IntakeQ Sign In"
        />
      </Box>
    </Box>
  );
};
