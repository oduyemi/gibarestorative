import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  VStack,
  Card,
  CardBody,
  HStack,
} from "@chakra-ui/react";

export const RegisterForm: React.FC = () => {
  return (
    <Container maxW="lg" py={10}>
      <Card overflow="hidden" boxShadow="lg" borderRadius="lg">
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Box flex={1} p={6}>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" name="fullname" placeholder="Enter full name" />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="mail" placeholder="Enter email" />
                </FormControl>

                <FormControl>
                  <FormLabel>Job Role</FormLabel>
                  <Input type="text" name="role" placeholder="Job role" />
                </FormControl>

                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="number" name="phone" placeholder="Enter phone number" />
                </FormControl>


                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" placeholder="Enter your password" />
                </FormControl>

                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" name="confirmPassword" placeholder="Confirm your password" />
                </FormControl>

                <HStack justifyContent="space-between" width="100%">
                  <Checkbox>I agree to the terms and conditions</Checkbox>
                </HStack>

                <Button colorScheme="yellow" width="full">
                  Register
                </Button>

                <Box textAlign="center">
                  <Link color="teal.500" href="/admin/login">Already have an account? Sign in</Link>
                </Box>
              </VStack>
            </CardBody>
          </Box>
        </Flex>
      </Card>
    </Container>
  );
};