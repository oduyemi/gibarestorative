"use client";
import { Box, Text, VStack, Heading, useBreakpointValue } from "@chakra-ui/react";

export const Address = () => {
  return (
    <VStack
      p={{ base: 4, md: 6 }}
      bg="gray.50"
      boxShadow="lg"
      borderRadius="lg"
      width="100%"
      maxWidth="1200px"
      mx="auto"
      spacing={6}
      align="center"
    >
      <Heading fontSize={{ base: 'xl', md: '2xl' }} color="#345995" textAlign="center">
        Our Location
      </Heading>

      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" textAlign="center">
        Visit us at 24301 Brazos Town Crossing, Rosenberg, Texas 77471, United States
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.1197195751397!2d-95.75266992460004!3d29.542007642201337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86411d9616a36915%3A0xc3d94f38dcab7e71!2s24301%20Brazos%20Town%20Crossing%2C%20Rosenberg%2C%20TX%2074741%2C%20USA!5e0!3m2!1sen!2snl!4v1738398254821!5m2!1sen!2snl"
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
