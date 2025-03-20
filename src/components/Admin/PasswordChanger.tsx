"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Heading,
  Spinner,
  Alert,
  AlertIcon,
  Flex,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { Sidebar } from "./Sidebar";

interface State {
  oldPass: string;
  newPassFirst: string;
  newPassSecond: string;
  loading: boolean;
  errors: Record<string, boolean>;
  message: string;
  variant: "loading" | "error" | "success" | "warning" | "info" | undefined;
}

export const PasswordChanger: React.FC = () => {
  const [state, setState] = useState<State>({
    oldPass: "",
    newPassFirst: "",
    newPassSecond: "",
    loading: false,
    errors: {},
    message: "",
    variant: undefined,
  });

  const validateFields = (): boolean => {
    const { oldPass, newPassFirst, newPassSecond } = state;
    const errors: Record<string, boolean> = {};
    let message = "";

    if (!oldPass || !newPassFirst || !newPassSecond) {
      if (!oldPass) errors.oldPass = true;
      if (!newPassFirst) errors.newPassFirst = true;
      if (!newPassSecond) errors.newPassSecond = true;
      message = "All fields are required";
    } else if (newPassFirst !== newPassSecond) {
      message = "New password and confirmation do not match";
      errors.newPassFirst = errors.newPassSecond = true;
    } else if (oldPass === newPassFirst) {
      message = "New password cannot be the same as the current password";
      errors.newPassFirst = true;
    }

    if (message) {
      setState((prevState) => ({ ...prevState, errors, message, variant: "warning" }));
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields()) return;
  
    setState((prevState) => ({ ...prevState, loading: true }));
  
    try {
      const response = await fetch(`https://giba.vercel.app/api/v1/admin/reset-password/${"adminID"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword: state.oldPass,
          newPassword: state.newPassFirst,
          confirmNewPassword: state.newPassSecond,
        }),
      });
  
      const data: { message: string } = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "An error occurred");
      }
  
      setState((prevState) => ({ ...prevState, message: "Password changed successfully!", variant: "success", loading: false }));
    } catch (error) {
      if (error instanceof Error) {
        setState((prevState) => ({ ...prevState, message: error.message, variant: "error", loading: false }));
      } else {
        setState((prevState) => ({ ...prevState, message: "An unexpected error occurred", variant: "error", loading: false }));
      }
    }
  };
  
  const handleChange = (field: keyof State, value: string) => {
    setState((prevState) => ({ ...prevState, [field]: value, errors: { ...prevState.errors, [field]: false } }));
  };

  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p={5} bg="gray.50" minH="100vh" overflowX="auto">
        <VStack spacing={4} align="center" p={5}>
          <Heading color="teal.700">Change Password</Heading>
          <Box as="form" onSubmit={handleSubmit} w="100%" maxW="400px" p={5} boxShadow="md" borderRadius="md" bg="white">
            <VStack spacing={4}>
              {state.message && (
                <Alert status={state.variant} borderRadius="md">
                  <AlertIcon />
                  {state.message}
                </Alert>
              )}

              <FormControl isInvalid={state.errors.oldPass}>
                <FormLabel>Current Password</FormLabel>
                <Input type="password" value={state.oldPass} onChange={(e) => handleChange("oldPass", e.target.value)} />
                <FormErrorMessage>Current password is required</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={state.errors.newPassFirst}>
                <FormLabel>New Password</FormLabel>
                <Input type="password" value={state.newPassFirst} onChange={(e) => handleChange("newPassFirst", e.target.value)} />
                <FormErrorMessage>New password is required</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={state.errors.newPassSecond}>
                <FormLabel>Repeat New Password</FormLabel>
                <Input type="password" value={state.newPassSecond} onChange={(e) => handleChange("newPassSecond", e.target.value)} />
                <FormErrorMessage>Passwords must match</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="yellow" leftIcon={<FaLock />} isLoading={state.loading}>
                Change Password
              </Button>

              {state.loading && <Spinner />}
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};
