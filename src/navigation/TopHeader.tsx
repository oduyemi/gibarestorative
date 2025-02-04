"use client";
import React from "react";
import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

export const TopHeader: React.FC = () => {
  return (
        <Box className="text-light py-2" style={{ backgroundColor: "#008B8B", margin: 0, padding: 0 }}>
            <Box className="container d-flex flex-column flex-md-row justify-content-between align-items-center" m={0} p={0}>
                <Text className="mb-0">
                <span className="font-weight-bold ms-5">Phone no:</span>
                <ChakraLink as={Link} href="" className="text-light ml-1">(346)545-1355</ChakraLink>
                <span className="ml-4 font-weight-bold">Email us:</span>
                    &nbsp;info@gibarestorative.com
                <span className="ml-5 font-weight-light">New Year Special - 10% off of any Weight Loss Program</span>
                </Text>
                <Box className="d-flex mt-2 mt-md-0">
                    <ChakraLink as={Link} href="" className="text-light mx-2">
                        <FaFacebook />
                    </ChakraLink>
                    <ChakraLink as={Link} href="" className="text-light mx-2">
                        <FaTwitter />
                    </ChakraLink>
                    <ChakraLink as={Link} href="" className="text-light mx-2">
                        <FaInstagram />
                    </ChakraLink>
                    <ChakraLink as={Link} href="#" className="text-light mx-2">
                        <FaDribbble />
                    </ChakraLink>
                </Box>
            </Box>
        </Box>
    );
};
