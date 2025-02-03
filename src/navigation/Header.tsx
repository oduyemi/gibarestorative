"use client";
import React, { useState } from "react";
import { 
  Box, Button, Menu, MenuButton, MenuList, MenuItem, Text, Flex 
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box as="nav" bg="white" shadow="md" py={4} px={6} position="sticky" top={0} zIndex={10}>
      <Flex justify="space-between" align="center">
        
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/assets/images/logo.png" 
            alt="Logo" 
            width={120} 
            height={50} 
            className="object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <Button 
          display={{ base: "flex", lg: "none" }} 
          onClick={toggleMobileMenu} 
          variant="ghost" 
          _hover={{ bg: "transparent" }}
          fontSize="1.5rem"
        >
          <FaBars />
        </Button>

        {/* Desktop Navigation */}
        <Flex 
          as="ul" 
          listStyleType="none" 
          align="center" 
          gap={6} 
          display={{ base: "none", lg: "flex" }}
        >
          {["Home", "About"].map((item, index) => (
            <Box as="li" key={index}>
              <Link href={`/${item.toLowerCase()}`} passHref>
                <Text 
                  fontSize="lg" 
                  _hover={{ color: "#008B8B" }} 
                  transition="color 0.3s"
                  cursor="pointer"
                >
                  {item}
                </Text>
              </Link>
            </Box>
          ))}

          {/* Services Dropdown - Now after About */}
          <Menu>
            <MenuButton 
              as={Button} 
              variant="ghost" 
              display="flex"
              alignItems="center"
              rightIcon={<FaChevronDown style={{ marginTop: "-70%"}} />}
              _hover={{ color: "#008B8B" }}
              transition="color 0.3s"
            >
              <Text fontSize="lg" fontWeight="medium">Services</Text>
            </MenuButton>
            <MenuList bg="white" shadow="lg" borderRadius="md">
              {[
                { label: "Hormone Replacement Therapy", link: "/hormone-replacement" },
                { label: "Patient Care", link: "/patient-care" },
                { label: "Virtual Visits", link: "/virtual-care" },
                { label: "Weight Loss Program", link: "/weight-loss" }
              ].map((service, idx) => (
                <MenuItem 
                  as={Link} 
                  key={idx} 
                  href={service.link} 
                  _hover={{ bg: "gray.100" }}
                >
                  {service.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {["Membership", "Bookings", "Contact Us"].map((item, index) => (
            <Box as="li" key={index}>
              <Link href={`/${item.toLowerCase().replace(/\s/g, "-")}`} passHref>
                <Text 
                  fontSize="lg" 
                  _hover={{ color: "#008B8B" }} 
                  transition="color 0.3s"
                  cursor="pointer"
                >
                  {item}
                </Text>
              </Link>
            </Box>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <Box 
          display={{ base: "block", lg: "none" }} 
          bg="white" 
          shadow="md" 
          py={4} 
          mt={2} 
          borderRadius="md"
        >
          <Flex flexDir="column" align="center" gap={4}>
            {["Home", "About"].map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase()}`} passHref>
                <Text 
                  fontSize="lg" 
                  _hover={{ color: "#008B8B" }} 
                  transition="color 0.3s"
                  cursor="pointer"
                >
                  {item}
                </Text>
              </Link>
            ))}
            
            {/* Mobile Dropdown - Now correctly ordered */}
            <Menu>
              <MenuButton 
                as={Button} 
                variant="ghost" 
                rightIcon={<FaChevronDown fontWeight={100} />} 
                _hover={{ color: "#008B8B" }}
                transition="color 0.3s"
              >
                <Text fontSize="lg">Services</Text>
              </MenuButton>
              <MenuList bg="white" shadow="lg" borderRadius="md">
                {[
                  { label: "Hormone Replacement Therapy", link: "/hormone-replacement" },
                  { label: "Patient Care", link: "/patient-care" },
                  { label: "Virtual Visits", link: "/virtual-care" },
                  { label: "Weight Loss Program", link: "/weight-loss" }
                ].map((service, idx) => (
                  <MenuItem 
                    as={Link} 
                    key={idx} 
                    href={service.link} 
                    _hover={{ bg: "gray.100", color: "#008B8B" }}
                  >
                    {service.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {["Membership", "Bookings", "Contact Us"].map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase().replace(/\s/g, "-")}`} passHref>
                <Text 
                  fontSize="lg" 
                  fontWeight="medium" 
                  _hover={{ color: "blue.500" }} 
                  transition="color 0.3s"
                  cursor="pointer"
                >
                  {item}
                </Text>
              </Link>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};
