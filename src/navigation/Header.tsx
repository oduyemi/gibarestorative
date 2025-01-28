"use client";
import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-dark" style={{ backgroundColor: "#fff", margin: 0, padding: 0 }}>
      <Box className="container d-flex justify-content-between align-items-center" m={0} p={0}>
        <Link className="navbar-brand d-flex align-items-center" href="/">
          {/* Giba<span>Clinic</span> <FaLeaf className="ml-2" /> */}
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-14 w-14 object-contain ml-4 logo"
        />
        </Link>
        <Button className="navbar-toggler" onClick={toggleMobileMenu}>
          <FaBars />
        </Button>
        <Box className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto text-center text-lg-left">
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-dark">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/weight-loss" className="nav-link text-dark">Weight Loss</Link>
            </li>
            <li className="nav-item">
              <Link href="/wellness" className="nav-link text-dark">Wellness</Link>
            </li>
            <li className="nav-item">
              <Link href="/urgent-care" className="nav-link text-dark">Urgent Care</Link>
            </li>
            <li className="nav-item">
              <Link href="/membership" className="nav-link text-dark">Membership</Link>
            </li>
            <li className="nav-item">
              <Link href="/bookings" className="nav-link text-dark">Bookings</Link>
            </li>
            <li className="nav-item">
              <Link href="/locator" className="nav-link text-dark">Contact Us</Link>
            </li>
          </ul>
        </Box>
      </Box>
    </nav>
  );
};
