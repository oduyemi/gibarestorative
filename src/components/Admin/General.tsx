"use client";
import React from "react";
import { 
  Box, 
  Grid, 
  Text, 
  Flex, 
  Heading, 
  Button, 
  IconButton, 
} from "@chakra-ui/react";
import { Appointments } from "./Appointments";
import { EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";

export const General: React.FC = () => {
  return (
    <Box flex="1" p={5} mt={3}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={6}>
        {/* Left side: Top Banner and Service Areas stacked in a column */}
        <Flex direction="column" gap={6}>
          {/* Top Banner Section */}
          <Box rounded="lg" bg="white" p={5} boxShadow="lg" _hover={{ boxShadow: "xl" }}>
            <Heading size="md" mb={6} color="teal.800" fontWeight="semibold">Top Banner</Heading>
            <Flex direction="column" gap={4}>
              {['Phone Number', 'Email', 'Message'].map((label) => (
                <Flex key={label} justify="space-between" align="center">
                  <Box>
                    <Heading size="sm" color="teal.600">{label}</Heading>
                    <Text color="gray.500" noOfLines={1}>
                      {label === 'Phone Number' ? '(346) 545-1355' : 
                       label === 'Email' ? 'info@gibarestorative.com' : 
                       'Summer sale - 10% off any Weight Loss Program'}
                    </Text>
                  </Box>
                  <Box>
                    <IconButton 
                      icon={<EditIcon />} 
                      aria-label="Edit" 
                      colorScheme="teal" 
                      mr={2} 
                      _hover={{ bg: "teal.600" }} 
                    />
                    <IconButton 
                      icon={<DeleteIcon />} 
                      aria-label="Remove" 
                      colorScheme="red" 
                      _hover={{ bg: "red.600" }} 
                    />
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>

          {/* Service Areas Section */}
          <Box rounded="lg" bg="white" p={5} boxShadow="lg" _hover={{ boxShadow: "xl" }}>
            <Heading size="md" mb={6} color="teal.800" fontWeight="semibold">Service Areas</Heading>
            <Flex direction="column" gap={4}>
              {['Arizona', 'Delaware', 'Texas', 'Vermont'].map((area) => (
                <Flex key={area} justify="space-between" align="center">
                  <Box>{area}</Box>
                  <Box>
                    <IconButton 
                      icon={<EditIcon />} 
                      aria-label="Edit" 
                      colorScheme="teal" 
                      mr={2} 
                      _hover={{ bg: "teal.600" }} 
                    />
                    <IconButton 
                      icon={<DeleteIcon />} 
                      aria-label="Remove" 
                      colorScheme="red" 
                      _hover={{ bg: "red.600" }} 
                    />
                  </Box>
                </Flex>
              ))}
              <Button leftIcon={<AddIcon />} colorScheme="yellow" _hover={{ bg: "yellow.400" }}>
                Add Area
              </Button>
            </Flex>
          </Box>
        </Flex>

        {/* Right side: Appointments */}
        <Box rounded="lg" bg="white" p={5} boxShadow="lg" _hover={{ boxShadow: "xl" }}>
          <Appointments />
        </Box>
      </Grid>
    </Box>
  );
};
