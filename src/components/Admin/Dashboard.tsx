"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
    Box, 
    Grid, 
    GridItem, 
    Stat, 
    StatLabel, 
    StatNumber, 
    StatHelpText, 
    Flex, 
    Heading
} from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { General } from "./General";

// Define expected data types
interface PatientsData {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface MailingListData {
  id: string;
  email: string;
}

interface InquiryData {
  id: string;
  message: string;
}

export const Dashboard: React.FC = () => {
  const [stats, setStats] = useState([
    { label: "Total Patients", value: 0, helpText: "Updated daily" },
    { label: "Mailing List", value: 0, helpText: "For marketing purposes" },
    { label: "Inquiries", value: 0, helpText: "Contact form entries" },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [patientsRes, mailingListRes, inquiriesRes] = await Promise.all([
          axios.get<PatientsData[]>("https://giba.vercel.app/api/v1/patients"),
          axios.get<MailingListData[]>("https://giba.vercel.app/api/v1/mailinglist"),
          axios.get<InquiryData[]>("https://giba.vercel.app/api/v1/contact"),
        ]);

        setStats([
          { label: "Total Patients", value: patientsRes.data.length ?? 0, helpText: "Updated daily" },
          { label: "Mailing List", value: mailingListRes.data.length ?? 0, helpText: "For marketing purposes" },
          { label: "Inquiries", value: inquiriesRes.data.length ?? 0, helpText: "Contact form entries" },
        ]);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <Flex>
        <Sidebar />        
        <Box flex="1" p={5} bg="gray.100" minH="100vh">
            <Heading size="lg" mb={6} color="teal">Overview</Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
                {stats.map((stat, index) => (
                    <GridItem 
                        key={index}
                        p={5} 
                        shadow="lg" 
                        borderWidth="1px" 
                        borderRadius="lg"
                        bg="white"
                        _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
                    >
                        <Stat>
                            <StatLabel fontWeight="bold" color="teal.800">{stat.label}</StatLabel>
                            <StatNumber fontSize="2xl">{stat.value}</StatNumber>
                            <StatHelpText>{stat.helpText}</StatHelpText>
                        </Stat>
                    </GridItem>
                ))}
            </Grid>
            <General />
        </Box>
    </Flex>
  );
};
