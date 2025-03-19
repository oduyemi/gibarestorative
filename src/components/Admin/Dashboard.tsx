import React from "react";
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

export const Dashboard: React.FC = () => {
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


const stats = [
    { label: "Total Patients", value: "3", helpText: "Updated daily" },
    { label: "Mailing List", value: "0", helpText: "For marketing purposes" },
    { label: "Inquiries", value: "0", helpText: "contact form entries" },
];
