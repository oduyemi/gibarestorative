"use client";
import React, { useState } from "react";
import { 
  Box, Button, Menu, MenuButton, MenuList, MenuItem, Text, Flex, VStack, Slide, IconButton 
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import Image from "next/image";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box as="nav" bg="white" shadow="md" py={4} px={{ base: 4, lg: 6 }} position="sticky" top={0} zIndex={2000}>
      <Flex justify="space-between" align="center">
        
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/assets/images/logo/sitelogo.png" 
            alt="Logo" 
            width={120} 
            height={48} 
            className="object-cover"
            style={{
              marginTop: "-10%", 
              marginBottom: "-10%",
              transition: "all 0.3s ease-in-out",
            }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Toggle menu"
          display={{ base: "flex", lg: "none" }}
          onClick={toggleMobileMenu}
          variant="ghost"
          fontSize="1.5rem"
          icon={isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        />

        {/* Desktop Navigation */}
        <Flex 
          as="ul" 
          listStyleType="none" 
          align="center" 
          gap={8} 
          display={{ base: "none", lg: "flex" }}
        >
          <li>
            <Link href="/">
              <Text fontSize="lg" _hover={{ color: "#008B8B" }} cursor="pointer">
                Home
              </Text>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Text fontSize="lg" _hover={{ color: "#008B8B" }} cursor="pointer">
                About
              </Text>
            </Link>
          </li>

          {/* Services Dropdown */}
          <Menu>
            <MenuButton 
              as={Button} 
              variant="ghost" 
              display="flex"
              alignItems="center"
              rightIcon={<FaChevronDown className="up" />}
              _hover={{ color: "#008B8B" }}
            >
              <Text fontSize="lg" fontWeight="normal">Services</Text>
            </MenuButton>
            <MenuList bg="white" shadow="lg" borderRadius="md">
              {[ 
                { label: "Weight Loss Program", link: "/weightloss" },
                { label: "Hormone Replacement Therapy", link: "/hormone-replacement" },
                { label: "Virtual Visits", link: "/virtual-care" },
                { label: "Direct Primary Care", link: "/care" }
              ].map((service, idx) => (
                <MenuItem 
                  as={Link} 
                  key={idx} 
                  href={service.link} 
                  _hover={{ color: "#008B8B" }}
                >
                  {service.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {["Membership", "Bookings", "Contact"].map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase()}`}>
                <Text fontSize="lg" _hover={{ color: "#008B8B" }} cursor="pointer">
                  {item}
                </Text>
              </Link>
            </li>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Menu with Smooth Slide-In */}
      <Slide direction="right" in={isMobileMenuOpen} style={{ zIndex: 1000 }}>
        <Box 
          position="fixed" 
          top="0" 
          left="0" 
          width="70%" 
          height="100vh" 
          bg="teal.500" 
          color="white"
          shadow="lg" 
          py={6} 
          px={6} 
        >
          <VStack align="start" spacing={6}>
            <IconButton
              aria-label="Close menu"
              onClick={toggleMobileMenu}
              variant="ghost"
              fontSize="1.5rem"
              icon={<FaTimes />}
              alignSelf="flex-end"
            />
            <Link href="/" onClick={toggleMobileMenu}>
              <Text fontSize="lg" _hover={{ color: "#008B8B" }}>Home</Text>
            </Link>
            {["About", "Membership", "Bookings", "Contact"].map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase()}`} onClick={toggleMobileMenu}>
                <Text fontSize="lg" _hover={{ color: "#008B8B" }}>{item}</Text>
              </Link>
            ))}

            {/* Services Dropdown for Mobile */}
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="gray.200">Services</Text>
              <VStack align="start" pl={4} spacing={3}>
                {[ 
                  { label: "Weight Loss Program", link: "/weightloss" },
                  { label: "Hormone Replacement Therapy", link: "/hormone-replacement" },
                  { label: "Virtual Visits", link: "/virtual-care" },
                  { label: "Direct Primary Care", link: "/care" },
                ].map((service, idx) => (
                  <Link key={idx} href={service.link} onClick={toggleMobileMenu}>
                    <Text fontSize="md" _hover={{ color: "#008B8B" }}>
                      {service.label}
                    </Text>
                  </Link>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Slide>
    </Box>
  );
};
