"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Textarea,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Center,
} from "@chakra-ui/react";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const formErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is not valid";
      isValid = false;
    }

    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{7,15}$/.test(formData.phone)) {
      formErrors.phone = "Phone number is not valid";
      isValid = false;
    }

    if (!formData.subject) {
      formErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await fetch("https://giba.vercel.app/api/v1/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Error sending message");
        }
  
        setIsLoading(false);
        alert("Message sent successfully");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } catch {
        setIsLoading(false);
        alert("Failed to send message");
      }
    }
  };
  

  return (
    <section className="ftco-section bg-light mt-5">
      <Center>
        <Box className="container" maxW="1200px">
          <Box className="row justify-content-center">
            <Box className="col-md-12">
              <Box className="wrapper">
                <Box className="row no-gutters">
                  <Box className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                    <Box className="contact-wrap w-100 p-md-5 p-4" bg="white" boxShadow="lg" borderRadius="md">
                      <Heading as="h3" mb={4} color="#008B8B">
                        Get in touch
                      </Heading>
                      <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                          <FormControl id="name" isInvalid={!!errors.name}>
                            <FormLabel>Full Name</FormLabel>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Name"
                              borderColor={errors.name ? "red.500" : "gray.300"}
                              _focus={{ borderColor: "teal.500" }}
                            />
                            {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                          </FormControl>
                          <FormControl id="email" isInvalid={!!errors.email}>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email"
                              borderColor={errors.email ? "red.500" : "gray.300"}
                              _focus={{ borderColor: "teal.500" }}
                            />
                            {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                          </FormControl>
                          <FormControl id="phone" isInvalid={!!errors.phone}>
                            <FormLabel>Phone Number</FormLabel>
                            <Input
                              type="number"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Phone number"
                              borderColor={errors.phone ? "red.500" : "gray.300"}
                              _focus={{ borderColor: "teal.500" }}
                            />
                            {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
                          </FormControl>
                          <FormControl id="subject" isInvalid={!!errors.subject}>
                            <FormLabel>Subject</FormLabel>
                            <Input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Subject"
                              borderColor={errors.subject ? "red.500" : "gray.300"}
                              _focus={{ borderColor: "teal.500" }}
                            />
                            {errors.subject && <FormErrorMessage>{errors.subject}</FormErrorMessage>}
                          </FormControl>
                          <FormControl id="message" isInvalid={!!errors.message}>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Message"
                              rows={4}
                              borderColor={errors.message ? "red.500" : "gray.300"}
                              _focus={{ borderColor: "teal.500" }}
                            />
                            {errors.message && <FormErrorMessage>{errors.message}</FormErrorMessage>}
                          </FormControl>
                          <Button type="submit" colorScheme="yellow" isLoading={isLoading} loadingText="Sending...">
                            Send Message
                          </Button>
                        </Stack>
                      </form>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
    </section>
  );
};
