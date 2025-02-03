"use client";
import { Box, Text, Heading, Input, Select, Button } from "@chakra-ui/react";
import Link from "next/link";

export const Board: React.FC = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <Box className="container-fluid px-md-0">
        <Box className="row no-gutters">
          {/* Left Column - Healthcare Services */}
          <Box className="col-md-3 d-flex align-items-stretch">
            <Box className="consultation w-100 text-center px-4 px-md-5" bg="white" boxShadow="md" borderRadius="lg" p={6}>
              <Heading as="h3" size="lg" className="mb-4">
                Healthcare Services
              </Heading>
              <Text fontSize="md" color="gray.600">
                Our team with the convenience of modern technology 
              will give you full attention. We will conduct a 1:1 
              consultation and explain all your options tailors 
              to meet your specific needs. 
              </Text>
              <Link href="/services" className="btn-custom">
                <Button 
                  variant="outline" 
                  color="#BDA023" 
                  borderColor="#BDA023" 
                  mt={4}
                  size="lg"
                  fontWeight="semibold"
                  borderRadius="full"
                  transition="all 0.3s ease"
                >See Services</Button>
              </Link>
            </Box>
          </Box>

          {/* Center Column - Consultation Form */}
          <Box className="col-md-6 d-flex align-items-stretch">
            <Box className="consultation consul w-100 px-4 px-md-5" bg="#008B8B" boxShadow="md" borderRadius="lg" p={8}>
              <Box className="text-center">
                <Heading as="h3" size="lg" className="mt-5 mb-4">
                  Free Consultation
                </Heading>
              </Box>
              <form action="" className="appointment-form">
                <Box className="row">
                  <Box className="col-md-12 col-lg-6 col-xl-4">
                    <Box className="form-group">
                      <Input type="text" className="form-control" placeholder="First Name" />
                    </Box>
                  </Box>
                  <Box className="col-md-12 col-lg-6 col-xl-4">
                    <Box className="form-group">
                      <Input type="text" className="form-control" placeholder="Last Name" />
                    </Box>
                  </Box>
                  <Box className="col-md-12 col-lg-6 col-xl-4">
                    <Box className="form-group">
                      <Box className="form-field">
                        <Box className="select-wrap">
                          <Box className="icon">
                            <span className="fa fa-chevron-down text-light"></span>
                          </Box>
                          <Select className="form-control text-secondary">
                            <option value="">Select one</option>
                            <option value="weightloss">Weight loss program</option>
                            <option value="hormone">Hormone Optimization</option>
                            <option value="virtualcare">Virtual Care</option>
                          </Select>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="col-md-12 col-lg-6 col-xl-4">
                    <Box className="form-group">
                      <Box className="input-wrap">
                        <Box className="icon">
                          <span className="ion-md-calendar"></span>
                        </Box>
                        <Input type="date" className="form-control appointment_date" placeholder="Date" />
                      </Box>
                    </Box>
                  </Box>
                  <Box className="col-md-12 col-lg-6 col-xl-4">
                    <Box className="form-group">
                      <Box className="input-wrap">
                        <Box className="icon">
                          <span className="ion-ios-clock"></span>
                        </Box>
                        <Input type="time" className="form-control appointment_time" placeholder="Time" />
                      </Box>
                    </Box>
                  </Box>
                  <Box className="col-md-12 col-lg-6 col-xl-4">
                    <Box className="form-group">
                      <Button 
                        className="btn py-2 px-4"   
                        bgColor="#BDA023"  
                        color="#fff" 
                        w="full"
                        size="lg"
                        fontWeight="semibold"
                        borderRadius="full"
                        transition="all 0.3s ease"
                      >
                        Appointment
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>

          {/* Right Column - Find A Health Expert */}
          <Box className="col-md-3 d-flex align-items-stretch">
            <Box className="consultation w-100 text-center px-4 px-md-5" bg="white" boxShadow="md" borderRadius="lg" p={6}>
              <Heading as="h3" size="lg" className="mb-4">
                Find A Health Expert
              </Heading>
              <Text fontSize="md" color="gray.600">
                  Your health care is not limited to what 
                insurance will cover. You deserve to receive a 
                holistic care plan. That’s why we offer an 
                affordable cash pay model. With our affordable 
                weight loss package, hormone replacement plan, 
                and virtual care membership, your quality 
                care is just one click away.
              </Text>
              <Link href="/locator" className="btn-custom">
                <Button 
                  variant="outline" 
                  borderColor="#BDA023" 
                  color="#BDA023" 
                  mt={4}
                  size="lg"
                  fontWeight="semibold"
                  borderRadius="full"
                  transition="all 0.3s ease"
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
