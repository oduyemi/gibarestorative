"use client";
import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

export const AdBlock: React.FC = () => {
  return (
        <section className="ftco-intro" style={{ backgroundImage: "url(images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
            <Box className="overlay"></Box>
            <Box className="container">
                <Box className="row">
                    <Box className="col-md-9">
                        <Heading variant="h2">We Provide Free Health Care Consultation</Heading>
                        <Text className="mb-0">Your Health is Our Top Priority with Comprehensive, Affordable Health.</Text>
                        <Text></Text>
                    </Box>
                    <Box className="col-md-3 d-flex align-items-center">
                        <Text className="mb-0"><Link href="#" className="btn btn-white px-4 py-3">Free Consutation</Link></Text>
                    </Box>
                </Box>
            </Box>
        </section>
    );
};
