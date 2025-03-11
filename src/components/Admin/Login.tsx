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
  Image,
  Card,
  CardBody,
  HStack,
} from "@chakra-ui/react";

export const LoginForm: React.FC = () => {
  return (
    <Container maxW="lg" py={10}>
      <Card overflow="hidden" boxShadow="lg" borderRadius="lg">
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Box flex={{ base: "none", md: 1 }}>
            <Image
              src="/assets/images/docc.jpg"
              alt="phone"
              objectFit="cover"
              width="100%"
              height="100%"
              borderTopLeftRadius="lg"
              borderBottomLeftRadius={{ base: "none", md: "lg" }}
            />
          </Box>
          <Box flex={1} p={6}>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </FormControl>

                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Enter your password" />
                </FormControl>

                <HStack justifyContent="space-between" width="100%">
                  <Checkbox>Remember me</Checkbox>
                  <Link color="blue.500" href="#">Forgot password?</Link>
                </HStack>

                <Button colorScheme="yellow" width="full">
                  Sign in
                </Button>
              </VStack>
            </CardBody>
          </Box>
        </Flex>
      </Card>
    </Container>
  );
};

