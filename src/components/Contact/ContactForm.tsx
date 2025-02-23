"use client";
import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Textarea, Stack, FormControl, FormLabel, FormErrorMessage, Center } from "@chakra-ui/react";
import Link from "next/link";


export const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

    const validateForm = () => {
        const formErrors = { name: "", email: "", phone: "", subject: "", message: "" }; 
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

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            setTimeout(() => {
                // Simulate sending data
                setIsLoading(false);
                alert("Message sent successfully");
            }, 2000);
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
                                            <Heading as="h3" mb={4} color="#008B8B">Get in touch</Heading>
                                            <form onSubmit={handleSubmit}>
                                                <Stack spacing={4}>
                                                    <Box display="flex" flexWrap="wrap" gap={4}>
                                                        <FormControl id="name" isRequired isInvalid={!!errors.name}>
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
                                                        <FormControl id="email" isRequired isInvalid={!!errors.email}>
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
                                                        <FormControl id="phone" isRequired isInvalid={!!errors.phone}>
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
                                                    </Box>
                                                    <FormControl id="subject" isRequired isInvalid={!!errors.subject}>
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
                                                    <FormControl id="message" isRequired isInvalid={!!errors.message}>
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
                                                    <Box>
                                                        <Button
                                                            type="submit"
                                                            colorScheme="yellow"
                                                            size="lg"
                                                            width="full"
                                                            fontWeight="semibold"
                                                            borderRadius="full"
                                                            transition="all 0.3s ease"
                                                            isLoading={isLoading}
                                                            loadingText="Sending..."
                                                            // _hover={{ bg: "gray.300", color: "black" }}
                                                        >
                                                            Send Message
                                                        </Button>
                                                    </Box>
                                                </Stack>
                                            </form>
                                        </Box>
                                    </Box>
                                    <Box className="col-lg-4 col-md-5 d-flex align-items-stretch">
                                        <Box className="info-wrap w-100 p-md-5 p-4" bg="#008B8B" color="white" borderRadius="md">
                                            <Heading as="h3" mb={4}>Get in Touch</Heading>
                                            <Text mb={4}>We are open for any suggestion or just to have a chat</Text>
                                            <Box className="dbox w-100 d-flex align-items-start mb-4">
                                                <Box className="icon d-flex align-items-center justify-content-center" mr={3}>
                                                    <span className="fa fa-map-marker"></span>
                                                </Box>
                                                <Box className="text">
                                                    <Text><strong>Address:</strong> 24301 Brazos Town Crossing, Rosenberg, Texas 77471, United States</Text>
                                                </Box>
                                            </Box>
                                            <Box className="dbox w-100 d-flex align-items-center mb-4">
                                                <Box className="icon d-flex align-items-center justify-content-center" mr={3}>
                                                    <span className="fa fa-phone"></span>
                                                </Box>
                                                <Box className="text">
                                                    <Text><strong>Phone:</strong> <Link href="tel://1346545-1355">+ 1(346)545-1355</Link></Text>
                                                </Box>
                                            </Box>
                                            <Box className="dbox w-100 d-flex align-items-center mb-4">
                                                <Box className="icon d-flex align-items-center justify-content-center" mr={3}>
                                                    <span className="fa fa-paper-plane"></span>
                                                </Box>
                                                <Box className="text">
                                                    <Text><strong>Email:</strong> <Link href="mailto:info@gibarestorative.com">info@gibarestorative.com</Link></Text>
                                                </Box>
                                            </Box>
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
