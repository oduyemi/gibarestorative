"use client";
import React from "react";
import { 
    Box, 
    VStack, 
    Flex,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Link,
    Icon, 
    Text
} from "@chakra-ui/react";
import { FiMenu, FiHome, FiUser, FiSettings, FiMail, FiLogOut } from "react-icons/fi";

export const Sidebar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <Flex>
            {/* Mobile Sidebar Toggle */}
            <IconButton
                aria-label="Open Menu"
                icon={<FiMenu />}
                size="lg"
                variant="ghost"
                onClick={onOpen}
                display={{ base: "flex", md: "none" }}
                m={2}
            />

            {/* Sidebar for larger screens */}
            <Box
                w={{ base: "0", md: "250px" }}
                bg="teal.900"
                color="white"
                minH="100vh"
                p={5}
                display={{ base: "none", md: "block" }}
                borderRight="1px solid teal"
            >
                <Text fontSize="lg" fontWeight="bold" mb={5}>Dashboard</Text>
                <VStack align="stretch" spacing={4}>
                    {menuItems.map((item, index) => (
                        <Link 
                            key={index}
                            href={item.link} 
                            display="flex" 
                            alignItems="center" 
                            py={2} 
                            px={3} 
                            borderRadius="md"
                            _hover={{ bg: "teal.700" }}
                        >
                            <Icon as={item.icon} mr={3} /> {item.label}
                        </Link>
                    ))}
                    {/* Logout Button */}
                    <Link 
                        href="/admin/logout" 
                        display="flex" 
                        alignItems="center" 
                        py={2} 
                        px={3} 
                        borderRadius="md"
                        color="red.400"
                        _hover={{ bg: "red.600", color: "white" }}
                    >
                        <Icon as={FiLogOut} mr={3} /> Logout
                    </Link>
                </VStack>
            </Box>

            {/* Drawer for mobile */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="teal.900" color="white">
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack align="stretch" spacing={4}>
                            {menuItems.map((item, index) => (
                                <Link 
                                    key={index}
                                    href={item.link} 
                                    onClick={onClose} 
                                    display="flex" 
                                    alignItems="center" 
                                    py={2} 
                                    px={3} 
                                    borderRadius="md"
                                    _hover={{ bg: "teal.700" }}
                                >
                                    <Icon as={item.icon} mr={3} /> {item.label}
                                </Link>
                            ))}
                            {/* Logout Button */}
                            <Link 
                                href="/admin/logout" 
                                onClick={onClose} 
                                display="flex" 
                                alignItems="center" 
                                py={2} 
                                px={3} 
                                borderRadius="md"
                                color="red.400"
                                _hover={{ bg: "red.600", color: "white" }}
                            >
                                <Icon as={FiLogOut} mr={3} /> Logout
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

// Updated menu items
const menuItems = [
    { label: "Home", icon: FiHome, link: "/" },
    { label: "Dashboard", icon: FiHome, link: "/admin" },
    { label: "Patients", icon: FiUser, link: "/admin/patients" },
    { label: "Mailing List", icon: FiMail, link: "/admin/email-center" },
    { label: "Profile", icon: FiUser, link: "/admin/profile" },
    { label: "Settings", icon: FiSettings, link: "/admin/settings" }
];
