"use client";
import React, { useState } from "react";
import { Box, Button, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-dark shadow-lg" style={{ backgroundColor: "#f8f9fa", padding: "1rem 2rem" }}>
      <Box className="container d-flex justify-content-between align-items-center" m={0} p={0}>
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-14 w-14 object-contain logo"
          />
        </Link>
        <Button 
          className="navbar-toggler" 
          onClick={toggleMobileMenu} 
          aria-label="Toggle Navigation Menu"
          display={{ base: "block", lg: "none" }} // Show only on mobile
          variant="ghost"
          _hover={{ bg: "transparent" }}
        >
          <FaBars />
        </Button>
        <Box className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} display={{ base: "block", lg: "flex" }}>
          <ul className="navbar-nav ml-auto text-center text-lg-left d-flex align-items-center gap-6">
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark hover:text-blue-600 transition-all duration-300">
                <Text fontSize="lg" fontWeight="semibold">Home</Text>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-dark hover:text-blue-600 transition-all duration-300">
                <Text fontSize="lg" fontWeight="semibold">About</Text>
              </Link>
            </li>
            <li className="nav-item">
              <Menu>
                <MenuButton 
                  as={Button} 
                  variant="ghost" 
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  rightIcon={<FaChevronDown />} 
                  _hover={{ bg: "transparent", color: "blue.600" }}
                  className="nav-link text-dark d-flex align-items-center hover:text-blue-600 transition-all duration-300"
                  padding="0.75rem 1.25rem" // Ensure consistent padding
                >
                  <Text fontSize="lg" fontWeight="semibold" mr={2}>Services</Text> {/* Added margin to space text and icon */}
                </MenuButton>
                <MenuList bg="white" boxShadow="lg" borderRadius="md" py={2}>
                  <MenuItem as={Link} href="/hormone-replacement" _hover={{ bg: "gray.100" }}>Hormone Replacement Therapy</MenuItem>
                  <MenuItem as={Link} href="/patient-care" _hover={{ bg: "gray.100" }}>Patient Care</MenuItem>
                  <MenuItem as={Link} href="/virtual-visits" _hover={{ bg: "gray.100" }}>Virtual Visits</MenuItem>
                  <MenuItem as={Link} href="/weight-loss" _hover={{ bg: "gray.100" }}>Weight Loss Program</MenuItem>
                </MenuList>
              </Menu>
            </li>
            <li className="nav-item">
              <Link href="/urgent-care" className="nav-link text-dark hover:text-blue-600 transition-all duration-300">
                <Text fontSize="lg" fontWeight="semibold">Urgent Care</Text>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/membership" className="nav-link text-dark hover:text-blue-600 transition-all duration-300">
                <Text fontSize="lg" fontWeight="semibold">Membership</Text>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/bookings" className="nav-link text-dark hover:text-blue-600 transition-all duration-300">
                <Text fontSize="lg" fontWeight="semibold">Bookings</Text>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/locator" className="nav-link text-dark hover:text-blue-600 transition-all duration-300">
                <Text fontSize="lg" fontWeight="semibold">Contact Us</Text>
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </nav>
  );
};
