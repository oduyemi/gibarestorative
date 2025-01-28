"use client";
import { Box, Text, Heading } from "@chakra-ui/react";
import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaFirstAid } from "react-icons/fa";

export const ServicesSection: React.FC = () => {
  return (
    <section className="ftco-section">
      <Box className="container">
        {/* Section Title */}
        <Box className="row justify-content-center pb-5 mb-3">
          <Box className="col-md-7 heading-section text-center ftco-animate">
            <Text className="subheading mb-3">Our Services</Text>
            <Heading size="xl">Our Affordable Packages</Heading>
          </Box>
        </Box>

        {/* Service Packages */}
        <Box className="row">
          {[
            { icon: <FaAppleAlt size={40} />, title: "Package 1" },
            { icon: <FaDumbbell size={40} />, title: "Package 2" },
            { icon: <FaHeartbeat size={40} />, title: "Package 3" },
            { icon: <FaFirstAid size={40} />, title: "Package 4" },
          ].map((pkg, index) => (
            <Box key={index} className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
              <Box className="d-block text-center">
                <Box className="icon d-flex justify-content-center align-items-center">
                  {pkg.icon}
                </Box>
                <Box className="media-body p-2 mt-3">
                  <Heading size="md" className="heading">{pkg.title}</Heading>
                  <Text>
                    Even the all-powerful Pointing has no control about the blind texts; it is an almost unorthographic.
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};
