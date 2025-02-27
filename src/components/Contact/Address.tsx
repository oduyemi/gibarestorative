"use client";
import { Box, Text, VStack, Heading, useBreakpointValue } from "@chakra-ui/react";

export const Address = () => {
  return (
    <VStack
      p={{ base: 4, md: 6 }}
      mt="5"
      bg="gray.50"
      boxShadow="lg"
      borderRadius="lg"
      width="100%"
      maxWidth="1200px"
      mx="auto"
      spacing={6}
      align="center"
    >
      <Heading fontSize={{ base: 'xl', md: '2xl' }} color="#008B8B" textAlign="center">
        Our Location
      </Heading>

      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" textAlign="center">
        Visit us at 4201 Cypress creek Pkwy 
        Ste 540 Houston, Texas 77068 United States
      </Text>

      <Box
        _hover={{
          transform: 'scale(1.03)',
          boxShadow: 'lg',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        }}
        borderRadius="lg"
        overflow="hidden"
        border="2px solid #E2E8F0"
        bg="white"
        shadow="md"
        width="100%"
        maxWidth="1200px"
        position="relative"
      >
        {/* Embedded map iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.6227652879566!2d-95.49581002458451!3d29.990269521135772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cc6429365375%3A0xf646a874cfd5c205!2s4201%20Cypress%20Creek%20Pkwy%2C%20Houston%2C%20TX%2077068%2C%20USA!5e0!3m2!1sen!2snl!4v1740663369714!5m2!1sen!2snl"
          width="100%"
          height={useBreakpointValue({ base: '300', md: '400' })}
          style={{
            border: '0',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
          }}
          allowFullScreen={true} 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" textAlign="center" mt={4}>
        We are here to assist you with any queries. Feel free to visit or reach out!
      </Text>
    </VStack>
  );
};
