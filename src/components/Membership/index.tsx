"use client";
import React from "react";
import { Box, Text, Heading, Icon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const Membership: React.FC = () => {
  return (
    <section className="bsb-service-6 py-5 py-xl-8">
      <Box className="container">
        <Box className="row justify-content-center"> 
          <Box className="col-12 col-md-10 col-lg-8 col-xl-7">
            <Heading as="h2" color="#008B8B" className="fs-6 mb-2 text-center text-uppercase">
              Comprehensive Healthcare At Your Finger Tips
            </Heading>
            <Text className="mb-4 mb-md-5 text-center">
              Enjoy unlimited access to healthcare professionals 
              and a range of services designed to keep you and 
              your family healthy, all from the comfort of your home.<br/><br/> 
              You don&apos;t have to skip work, No waiting room, and 
              you will receive quality care anytime, anywhere 
              through a secured virtual platform.
            </Text>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </Box>
        </Box>
      </Box>

      <Box className="container overflow-hidden mx-auto">
        <Box className="row gy-4 gy-md-0 gx-xxl-5 justify-content-center"> 
          {/* Membership Benefits Box */}
          <Box className="col-12 col-md-4 d-flex justify-content-center"> 
            <Box className="card bg-light rounded-0 flex-grow-1 d-flex flex-column shadow-lg" style={{ borderColor: "#008B8B"}}>
              <Box className="card-body d-flex flex-column p-4">
                <Icon as={AddIcon} boxSize={8} color="teal.600" className="mb-4" />
                <Heading as="h3" className="h2 mb-4 text-teal-600">Membership Benefits</Heading>
                <Text className="mb-4 text-secondary flex-grow-1">
                  Unlimited Consultations: Speak with healthcare providers as often as you need.<br/>
                  24/7 Access: Get medical advice and treatment any time, day or night.<br/>
                  No Co-pays or Hidden Fees: Enjoy transparent pricing with no surprises.<br/>
                  Prescription Services: Receive prescriptions and refills conveniently.<br/>
                  Specialist Referrals: Get referrals to specialists when necessary.<br/>
                  Family Plans: Affordable options for you and your loved ones.<br/>
                </Text>
              </Box>
            </Box>
          </Box>

          {/* Services Included Box */}
          <Box className="col-12 col-md-4 d-flex justify-content-center">
            <Box className="card bg-light rounded-0 flex-grow-1 d-flex flex-column shadow-lg" style={{ borderColor: "#008B8B"}}>
              <Box className="card-body d-flex flex-column p-4">
                <Icon color="teal.600" as="svg" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="text-teal-600 mb-4" viewBox="0 0 16 16">
                  <path d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  <path d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198V11zM3.655 4.26 1.592 8.043C1.724 8.014 1.86 8 2 8h12c.14 0 .276.014.408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                </Icon>
                <Heading as="h3" className="h2 mb-4 text-teal-600">Services Included</Heading>
                <Text className="mb-4 text-secondary flex-grow-1">
                  Our membership covers a wide range of healthcare needs, including but not limited to:<br/><br/>
                  Primary Care: Routine check-ups, ongoing health management, and wellness advice.<br/>
                  Urgent Care: Immediate care for minor illnesses and injuries.<br/>
                  Chronic Condition Management: Support for conditions like diabetes, hypertension, and asthma.<br/>
                  Preventive Care: Screenings and health education.<br/>
                  Blood Testing
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
