"use client";
import { useEffect, useState } from "react";
import { Box, Heading, Button, Table, Thead, Tbody, Tr, Th, Td, Link, Text, Flex } from "@chakra-ui/react";

declare global {
  interface Window {
    intakeq?: { open: (id: string) => void };
  }
}

export const Booking = () => {
  const [intakeQLoaded, setIntakeQLoaded] = useState(false);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://intakeq.com/js/widget.min.js?1";
    script.async = true;
    script.onload = () => {
      setIntakeQLoaded(true);
      setLoading(false);
    };
    script.onerror = () => {
      console.error("Failed to load IntakeQ script.");
      setLoading(false); 
    };
    document.head.appendChild(script);
  
    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
    // Create script element and load it
  //   const script = document.createElement("script");
  //   script.src = "https://intakeq.com/js/widget.min.js?1";
  //   script.async = true;
  //   script.onload = () => {
  //     setIntakeQLoaded(true);
  //     setLoading(false); // Set loading to false once the script is loaded
  //   };
  //   script.onerror = () => {
  //     setLoading(false); // Handle script loading error
  //     console.error("Failed to load the IntakeQ script.");
  //   };
  //   document.head.appendChild(script);

  //   // Cleanup script when component unmounts
  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  const handleBookNow = () => {
    // Wait a moment if IntakeQ is still not loaded
    setTimeout(() => {
      if (intakeQLoaded && window.intakeq) {
        window.intakeq.open("65d394ee9a75d098d7e28a3d"); 
      } else {
        console.error("IntakeQ is not loaded yet. Please wait...");
      }
    }, 500); // Delay in milliseconds
  };

  return (
    <Box maxW="900px" mx="auto" py={8} px={4}>
      <Box bg="white" boxShadow="md" borderRadius="lg" p={6}>
        {/* Header Section */}
        <Flex justify="space-between" align="center" mb={4}>
          <Heading as="h4" size="lg" color="teal.600">Choose an Option</Heading>
          <Link href="#" color="teal.500" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
            Manage Appointments
          </Link>
        </Flex>

        {/* Table Section */}
        <Box overflowX="auto">
          <Table variant="simple">
            <Thead bg="gray.100">
              <Tr>
                <Th>Service</Th>
                <Th>Duration</Th>
                <Th textAlign="center">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                { title: "Initial Weight Loss Consultation", description: "Lab review and weight loss plan", duration: "45 mins" },
                { title: "Brief Weight Loss Consultation", description: "", duration: "30 mins" },
                { title: "Initial Medical Consultation", description: "", duration: "45 mins" },
                { title: "Brief Medical Consultation", description: "", duration: "30 mins" },
                { title: "Virtual Urgent Care", description: "If this is an emergency, call 911 or go to the nearest ER.", duration: "45 mins" },
              ].map((service, index) => (
                <Tr key={index}>
                  <Td>
                    <Text fontWeight="bold">{service.title}</Text>
                    {service.description && <Text fontSize="sm" color="gray.500">{service.description}</Text>}
                  </Td>
                  <Td>
                    <Text as="span" bg="teal.100" px={3} py={1} borderRadius="md">{service.duration}</Text>
                  </Td>
                  <Td textAlign="center">
                    <Button 
                      onClick={handleBookNow}
                      isDisabled={loading || !intakeQLoaded}
                      colorScheme="yellow" 
                      size="sm" 
                      borderRadius="full" 
                      px={6}
                    >
                      {loading ? "Loading..." : "Book Now"}
                    </Button>
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
