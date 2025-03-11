"use client";
import { Box, Heading, Button, Table, Thead, Tbody, Tr, Th, Td, Link, Text, Flex } from "@chakra-ui/react";

export const Booking = () => {
  return (
    <Box maxW="900px" mx="auto" py={8} px={4}>
      <Box bg="white" boxShadow="md" borderRadius="lg" p={6}>
        {/* Header Section */}
        <Flex justify="space-between" align="center" mb={4}>
          <Heading as="h4" size="lg" color="teal.600">Choose an Option</Heading>
          <Link href="" color="teal.500" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
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
                    <Button as={Link} href="https://intakeq.com/#/bookingsettings?tab=widget" colorScheme="yellow" size="sm" borderRadius="full" px={6}>
                      Book Now
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
