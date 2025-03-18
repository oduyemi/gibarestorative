"use client";
// import { useState } from "react";
import {
  Box, Heading, Button, Table, Thead, Tbody, Tr, Th, Td, Text, Flex, Link
  // Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
  // Input, FormControl, FormLabel, Select, useToast
} from "@chakra-ui/react";



const SERVICES = [
  { title: "Initial Weight Loss Consultation", duration: "45 mins" },
  { title: "Brief Weight Loss Consultation", duration: "30 mins" },
  { title: "Initial Medical Consultation", duration: "45 mins" },
  { title: "Brief Medical Consultation", duration: "30 mins" },
  { title: "Virtual Urgent Care", duration: "45 mins" },
];

export const Booking = () => {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [appointmentDetails, setAppointmentDetails] = useState({
  //   clientId: "123456",
  //   service: "",
  //   duration: "",
  //   location: "Giba Restorative Health & Wellness - Telemedicine",
  //   status: "Confirmed",
  //   reminderType: "Sms",
  //   date: new Date().toISOString().slice(0, 16),
  // });

  // const toast = useToast();

  // const handleModalOpen = (serviceName: string, serviceDuration: string) => {
  //   setAppointmentDetails(prev => ({
  //     ...prev,
  //     service: serviceName,
  //     duration: serviceDuration,
  //     date: new Date().toISOString().slice(0, 16),
  //   }));
  //   setIsModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };

  // const handleBookAppointment = async () => {
  //   setLoading(true);
  //   setError(null);

    // try {
    //   const response = await fetch("/api/book-appointment", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       practitionerId: "5356eb98c5771321282d2ac4",
    //       clientId: appointmentDetails.clientId, 
    //       serviceId: "00000000-0000-0000-0000-000000000000",
    //       locationId: "1",
    //       status: "Confirmed",
    //       date: appointmentDetails.date,
    //       reminderType: appointmentDetails.reminderType,
    //     }),
    //   });

    //   const data = await response.json();
    //   if (!response.ok) throw new Error(data.error || "Failed to book");

    //   toast({
    //     title: "Success",
    //     description: `Appointment booked successfully! ID: ${data.appointmentId}`,
    //     status: "success",
    //     duration: 5000,
    //     isClosable: true,
    //   });

    //   setIsModalOpen(false);
    // } catch (err: any) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  // };

  return (
    <Box maxW="900px" mx="auto" py={8} px={4}>
      <Box bg="white" boxShadow="md" borderRadius="lg" p={6}>
      <Flex justify="space-between" align="center" mb={4}>
  <Heading as="h4" size="lg" color="teal.600">
    Choose an Option
  </Heading>
  <Link 
    href="#" 
    color="teal.500" 
    fontWeight="bold"  
    _hover={{ textDecoration: "underline" }}
  >
    Manage Appointments
  </Link>
</Flex>


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
              {SERVICES.map((service, index) => (
                <Tr key={index}>
                  <Td><Text fontWeight="bold">{service.title}</Text></Td>
                  <Td><Text as="span" bg="teal.100" px={3} py={1} borderRadius="md">{service.duration}</Text></Td>
                  <Td textAlign="center">
                    <Link href="https://intakeq.com/booking/lxoy4o" target="_blank">
                    <Button
                      // onClick={() => handleModalOpen(service.title, service.duration)}
                      // isLoading={loading}
                      colorScheme="yellow"
                      size="sm"
                      borderRadius="full"
                      px={6}
                    >
                      Book Now
                    </Button>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          {/* {error && <Text color="red.500" mt={2}>{error}</Text>} */}
        </Box>
      </Box>

      {/* <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" fontSize="lg">{appointmentDetails.service}</Text>
            <Text>Chinyerem Ariole</Text>
            <Text>{appointmentDetails.duration}</Text>
            <Text>{appointmentDetails.location}</Text>

            <FormControl mt={4}>
              <FormLabel>Reminder Type</FormLabel>
              <Select
                value={appointmentDetails.reminderType}
                onChange={(e) => setAppointmentDetails({ ...appointmentDetails, reminderType: e.target.value })}
              >
                <option value="Sms">SMS</option>
                <option value="Email">Email</option>
                <option value="Voice">Voice</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Appointment Date</FormLabel>
              <Input
                type="datetime-local"
                value={appointmentDetails.date}
                onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={handleBookAppointment} isLoading={loading}>
              Confirm Booking
            </Button>
            <Button variant="ghost" onClick={handleModalClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  );
};
